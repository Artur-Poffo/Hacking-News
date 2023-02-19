import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'

interface Props {
  children: ReactNode
}

export default function PrivateRoute({ children }: Props) {
  const { 'blog.token': token } = parseCookies()
  const { push } = useRouter()

  useEffect(() => {
    if (!token) {
      push('/SignIn')
    }
  }, [])

  return (
    <>
      {!token && null}
      {token && children}
    </>
  )
}
