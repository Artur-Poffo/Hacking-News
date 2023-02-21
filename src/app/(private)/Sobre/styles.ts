'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 110px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    max-width: 800px;

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }

    p {
      line-height: 28px;
    }
  }
`
