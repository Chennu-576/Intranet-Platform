// src/components/layout/MobileNav.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Home, Users, Award, Calendar, UserCircle } from 'lucide-react'
import { useStore } from '@/store/store'

const mobileNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Feed', href: '/feed', icon: Home },
  { name: 'Directory', href: '/directory', icon: Users },
  { name: 'Recognition', href: '/recognition', icon: Award },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Profile', href: '/profile', icon: UserCircle },
]

export default function MobileNav() {
  const { mobileNavOpen, setMobileNavOpen } = useStore()

  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setMobileNavOpen(false)}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 left-0 bottom-0 w-72 bg-sidebar z-50 shadow-xl"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h2 className="text-white text-xl font-semibold">Intranet</h2>
              <button
                onClick={() => setMobileNavOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="py-4">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}