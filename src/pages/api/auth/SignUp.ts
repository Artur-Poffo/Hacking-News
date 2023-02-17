import type { NextApiRequest, NextApiResponse } from 'next'
import loadDB from '@/utils/db'
import User, { IUser } from '@/utils/Models/UserModel'

type Data = {
  success: boolean
  message?: string
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

    const searchEmail = await User.findOne({ email: toVerifyUser.email })

    if (searchEmail === null) {
      try {
        // eslint-disable-next-line no-unused-vars
        const newUser = await User.create(req.body)
        res.status(200).json({
          success: true,
          message: 'Conta Criada',
        })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Erro ao criar a conta :(',
          data: error,
        })
      }
    } else {
      res.status(500).json({ success: false, message: 'Email em uso' })
    }
  } else {
    res.status(500).json({ success: false, message: 'Método não suportado' })
  }
}
