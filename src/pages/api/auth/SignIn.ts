import type { NextApiRequest, NextApiResponse } from 'next'
import loadDB from '@/utils/db'
import User, { IUser } from '@/utils/Models/UserModel'

import jwt from 'jsonwebtoken'

type Data = {
  success: boolean
  message?: string
  token?: string
  data?: unknown
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  loadDB()

  if (req.method === 'POST') {
    const toVerifyUser: IUser = {
      email: req.body.email,
      password: req.body.password,
    }

    const searchEmail = await User.findOne(
      { email: toVerifyUser.email },
      '-password',
    )

    if (searchEmail !== null) {
      try {
        const secret = process.env.SECRET

        const token = jwt.sign({ id: searchEmail._id }, `${secret}`)

        const user = { ...searchEmail._doc }

        res.status(200).json({
          success: true,
          token,
          message: 'Sucesso ao entrar!',
          data: user,
        })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Erro ao entrar :(',
          data: error,
        })
      }
    } else {
      res.status(500).json({ success: false, message: 'Conta inexistente' })
    }
  } else {
    res.status(500).json({ success: false, message: 'Método não suportado' })
  }
}
