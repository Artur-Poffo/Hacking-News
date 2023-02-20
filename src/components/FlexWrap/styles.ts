'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 20px;
  padding: 20px 50px;

  @media (max-width: 450px) {
    padding: 20px 0;
  }
`
