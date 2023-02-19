'use client'

import React, { createContext, ReactNode, useState } from 'react'
import nookies from 'nookies'
import { useRouter } from 'next/navigation'

import api from '@/services/api'
import { IAuthParams } from '@/interfaces/AuthParams'

interface AuthContextData {
  SignIn: (data: IAuthParams) => Promise<void>
  SignUp: (data: IAuthParams) => Promise<void>
  error: any | null
  setError: (argument: unknown) => void
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [error, setError] = useState<any | null>(null)
  const { push } = useRouter()

  async function SignIn(data: IAuthParams) {
    try {
      const res = await api.post('api/auth/SignIn', data)
      const { token } = res.data

      nookies.set(null, 'blog.token', token, {
        maxAge: 3600,
      })

      push('/')
    } catch (err: any) {
      setError(err)
      console.error(err)
    }
  }

  async function SignUp(data: IAuthParams) {
    try {
      const res = await api.post('/api/auth/SignUp', data)
      const { success, message } = res.data

      console.log(success, message)

      push('/SignIn')
    } catch (err: any) {
      setError(err)
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ SignIn, SignUp, error, setError }}>
      {children}
    </AuthContext.Provider>
  )
}
