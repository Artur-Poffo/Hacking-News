'use client'

import styled from 'styled-components'

interface ItemProp {
  active?: boolean
}

export const ItemContainer = styled.li<ItemProp>`
  position: relative;
  letter-spacing: 2px;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.CONTRAST};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: all 0.4s ease;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
