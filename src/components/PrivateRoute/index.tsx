'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import nookies from 'nookies'

interface Props {
  children: ReactNode
}

export default function PrivateRoute({ children }: Props) {
  const [token, setToken] = useState<string | null>(null)
  const { push } = useRouter()

  useEffect(() => {
    const { 'blog.token': token } = nookies.get()
    setToken(token)

    if (!token) {
      push('/SignIn')
    }
  })

  return (
    <div>
      {!token && null}
      {token && children}
    </div>
  )
}
