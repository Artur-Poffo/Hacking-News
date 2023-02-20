'use client'

import styled from 'styled-components'

interface ImageProps {
  image: string
}

export const Card = styled.div`
  max-width: 320px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 5px;
`

export const Image = styled.div<ImageProps>`
  width: 100%;
  min-height: 180px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  line-height: 23px;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.CONTRAST};

  h4 {
    color: ${({ theme }) => theme.COLORS.TITLE_COLOR};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }
`
