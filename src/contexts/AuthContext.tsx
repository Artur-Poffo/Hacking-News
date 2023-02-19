import React, { createContext, ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'

import api from '@/services/api'
import { IAuthParams } from '@/interfaces/AuthParams'
import { IUser } from '@/interfaces/IUser'

interface AuthContextData {
  isAuthenticated: boolean
  SignIn: (data: IAuthParams) => Promise<void>
  SignUp: (data: IAuthParams) => Promise<void>
  error: any | null
  setError: (argument: unknown) => void
  user: IUser | null
}

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null)
  const [error, setError] = useState<any | null>(null)
  const isAuthenticated = !!user
  const { push } = useRouter()

  async function SignIn(data: IAuthParams) {
    try {
      const res = await api.post('api/auth/SignIn', data)
      const { token, user } = res.data

      localStorage.setItem('blog.token', token)

      setUser(user)
      push('/')
    } catch (err: any) {
      setError(err)
    }
  }

  async function SignUp(data: IAuthParams) {
    try {
      const res = await api.post('/api/auth/SignUp', data)
      const { success, message } = res.data

      console.log(success, message)

      push('/SignIn')
    } catch (err) {
      setError(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, SignIn, SignUp, user, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  )
}
