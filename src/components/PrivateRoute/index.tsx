import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  children: ReactNode
}

export default function PrivateRoute({ children }: Props) {
  const token = localStorage.getItem('blog.token')
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
