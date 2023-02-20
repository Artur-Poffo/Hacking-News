'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
    font-family: sans-serif;
    border: none;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 3px;
  }

  @media (max-width: 510px) {
    ::-webkit-scrollbar {
      width: 5px;
    }
  }

  a, a:active {
    color: inherit;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }
`
