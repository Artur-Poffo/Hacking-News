import { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children: ReactNode
}

export function FlexWrap({ children }: Props) {
  return <Container>{children}</Container>
}
