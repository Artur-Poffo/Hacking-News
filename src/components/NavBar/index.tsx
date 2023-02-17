import { Container } from './styles'
import { List } from './List'
import Link from 'next/link'
import { IMenuLink } from '@/interfaces/IMenuLink'

interface Props {
  items: IMenuLink[]
}

export function NavBar({ items }: Props) {
  return (
    <Container>
      <Link href={'/'}>
        <h2>Hacking News</h2>
      </Link>

      <List items={items} />
    </Container>
  )
}
