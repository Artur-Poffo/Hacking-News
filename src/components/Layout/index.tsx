'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut', delay: 0.2 }}
      style={{ position: 'relative' }}
    >
      <>{children}</>
    </motion.article>
  )
}

export default Layout
