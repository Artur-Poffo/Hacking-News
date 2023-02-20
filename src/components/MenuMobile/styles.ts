'use client'

import styled from 'styled-components'

interface Props {
  open: boolean
}

export const Menu = styled.div`
  display: none;

  @media (max-width: 660px) {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    z-index: 1000;

    div {
      width: 75%;
      height: 3px;
      background-color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
    }
  }
`

export const OverLay = styled.div<Props>`
  display: none;

  @media (max-width: 660px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    transition: all 0.3s ease-in;
    margin-left: ${({ open }) => (open ? 0 : '-100vw')};
    z-index: 999;

    h2 {
      font-family: monospace;
      font-size: 2rem;
      letter-spacing: 2px;
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      overflow: visible;
    }
  }
`
