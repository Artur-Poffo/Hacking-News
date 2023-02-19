'use client'

import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import StyledComponentsRegistry from '../lib/registry'

import AuthProvider from '@/contexts/AuthContext'

import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head />
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
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
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
