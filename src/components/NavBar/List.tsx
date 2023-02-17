import { MenuItem } from '../MenuItem'
import { IMenuLink } from '@/interfaces/IMenuLink'

interface Props {
  items: IMenuLink[]
  setOpenMobile?: Function
}

export function List({ items, setOpenMobile }: Props) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <MenuItem setOpenMobile={setOpenMobile} key={item.text} item={item} />
        )
      })}
    </ul>
  )
}
