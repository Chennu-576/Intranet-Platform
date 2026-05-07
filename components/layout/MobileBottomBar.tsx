'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Award, Calendar, UserCircle, MessageCircle } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Feed', href: '/feed', icon: MessageCircle },
  { name: 'Directory', href: '/directory', icon: Users },
  { name: 'Recognition', href: '/recognition', icon: Award },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Profile', href: '/profile/1', icon: UserCircle },
]

export default function MobileBottomBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40 shadow-lg">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <item.icon size={22} />
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : ''}`}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}