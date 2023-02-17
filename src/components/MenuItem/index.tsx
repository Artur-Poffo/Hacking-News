import { usePathname } from 'next/navigation'
import { ItemContainer } from './styles'
import Link from 'next/link'
import { IMenuLink } from '@/interfaces/IMenuLink'

interface Props {
  item: IMenuLink
  setOpenMobile?: Function
}

export function MenuItem({ item, setOpenMobile }: Props) {
  const pathName = usePathname()

  return (
    <ItemContainer
      active={pathName === item.to && true}
      onClick={() => setOpenMobile && setOpenMobile(false)}
    >
      <Link href={item.to}>{item.text}</Link>
    </ItemContainer>
  )
}
