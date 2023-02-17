'use client'

import { useState } from 'react'
import { Menu, OverLay } from './styles'

import { IMenuLink } from '@/interfaces/IMenuLink'
import Link from 'next/link'
import { List } from '../NavBar/List'

interface Props {
  items: IMenuLink[]
}

export function MenuMobile({ items }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Menu>

      <OverLay open={open}>
        <Link href={'/'} onClick={() => setOpen(false)}>
          <h2>Hacking News</h2>
        </Link>

        <List setOpenMobile={setOpen} items={items} />
      </OverLay>
    </>
  )
}
