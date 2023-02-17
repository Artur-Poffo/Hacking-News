'use client'

import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import StyledComponentsRegistry from '../lib/registry'

import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <AnimatePresence
              mode="wait"
              initial={true}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 })
                }
              }}
            >
              {children}

              <GlobalStyles />
            </AnimatePresence>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
