'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { smoothScroll } from '@/lib/smooth-scroll'
import { MobileNav } from './mobile-nav'

const navItems = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'projects', label: 'Projects' },
  { href: 'experience', label: 'Experience' },
  { href: 'skills', label: 'Skills' },
  { href: 'contact', label: 'Contact' },
]

export function Navigation() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <MobileNav items={navItems} />
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
              <a
                href={`#${item.href}`}
                onClick={(e) => smoothScroll(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </motion.header>
  )
}

