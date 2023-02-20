'use client'

import styled from 'styled-components'

export const Topic = styled.li`
  display: block;
  text-align: center;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  border-radius: 5px;
`
