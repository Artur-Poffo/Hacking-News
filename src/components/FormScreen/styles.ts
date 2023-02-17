'use client'

import styled from 'styled-components'

interface BgProps {
  image: string
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.CONTRAST};

  @media (max-width: 1460px) {
    padding: 0 20px;
  }
`

export const FormArea = styled.div`
  width: 30%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  z-index: 800;

  h1 {
    color: ${({ theme }) => theme.COLORS.CONTRAST};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media (max-width: 1460px) {
    width: 35rem;
    height: max-content;
    border-radius: 10px;
  }
`

export const BgImage = styled.div<BgProps>`
  width: 70%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;

  @media (max-width: 1460px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`
