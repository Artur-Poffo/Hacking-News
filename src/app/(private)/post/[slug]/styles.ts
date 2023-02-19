'use client'

import styled from 'styled-components'

export const Container = styled.article`
  width: 100vw;
  min-height: 100vh;
  padding: 110px 0px 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  ul {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  span {
    font-weight: bold;
  }

  a {
    color: #60a5fa;
  }
`

export const Content = styled.div`
  max-width: 700px;
  padding: 10px 15px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    line-height: 32px;
  }

  a {
    color: #2563eb;
    text-decoration: underline;
    font-weight: bold;
  }

  h2 {
    padding: 15px 0;
    font-size: 2rem;
    font-weight: bolder;

    @media (max-width: 420px) {
      font-size: 1.5rem;
    }
  }

  pre {
    padding: 20px 10px;
    margin: 10px 0;
    background-color: #282c34;
    color: #eee;
    border-radius: 5px;

    code {
      padding: 0;
    }

    @media (max-width: 510px) {
      overflow-x: scroll;
    }
  }

  code {
    padding: 5px;
    background-color: #282c34;
    color: #eee;
    border-radius: 5px;
  }

  ul {
    padding: 5px 20px;

    li {
      margin: 10px 0;
    }
  }

  img {
    align-self: center;
    max-width: 100%;
  }

  blockquote {
    align-self: center;
    width: 100%;
    padding: 30px 20px;
    background-color: #064e3b;
    color: #eee;
    border-left: 4px solid #059669;
    border-radius: 5px;
  }
`

export const Warning = styled.h1`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: crimson;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  a {
    font-size: initial;
    text-decoration: underline;
  }
`
