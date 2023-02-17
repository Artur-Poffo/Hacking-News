'use client'

import styled from 'styled-components'

export const Form = styled.form`
  width: 50%;
  height: max-content;
  padding: 20px 10px;

  button {
    width: 100%;
    padding: 15px 15px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 460px) {
    width: 85%;
  }
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 10px 15px;
    border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 5px;
  }
`
