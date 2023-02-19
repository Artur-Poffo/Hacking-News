'use client'

import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  width: 100vw;
  padding: 30px 50px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  h2 {
    font-family: monospace;
    font-size: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    overflow: visible;
  }

  @media (max-width: 660px) {
    display: none;
  }
`
