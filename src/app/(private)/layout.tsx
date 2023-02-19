'use client'

import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import StyledComponentsRegistry from '../lib/registry'

import AuthProvider from '@/contexts/AuthContext'

import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

import { IMenuLink } from '@/interfaces/IMenuLink'

import { NavBar } from '@/components/NavBar'
import { MenuMobile } from '@/components/MenuMobile'

import PrivateRoute from '@/components/PrivateRoute'

export default function RootLayout({ children }: { children: ReactNode }) {
  const MenuItems: IMenuLink[] = [
    { text: 'Home', to: '/' },
    { text: 'Sobre', to: '/Sobre' },
    { text: 'Posts', to: '/Posts' },
  ]

  return (
    <html lang="pt">
      <head />
      <body>
        <PrivateRoute>
          <StyledComponentsRegistry>
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <NavBar items={MenuItems} />
                <MenuMobile items={MenuItems} />

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
        </PrivateRoute>
      </body>
    </html>
  )
}
