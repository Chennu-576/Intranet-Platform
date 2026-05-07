'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Award,
  Calendar,
  BookOpen,
  MessageCircle,
  Shield,
  BarChart3,
  Image,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  Building2,
  Trophy
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Employee Feed', href: '/feed', icon: MessageCircle },
  { name: 'Announcements', href: '/announcements', icon: Megaphone },
  { name: 'Recognition', href: '/recognition', icon: Award },
  { name: 'Directory', href: '/directory', icon: Users },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Knowledge Hub', href: '/knowledge', icon: BookOpen },
  { name: 'Discussion Forum', href: '/forum', icon: MessageCircle },
  { name: 'Department Spaces', href: '/departments', icon: Building2 },
  { name: 'Leaderboards', href: '/leaderboards', icon: Trophy },
  { name: 'Media Gallery', href: '/gallery', icon: Image },
  { name: 'Admin Center', href: '/admin', icon: Shield },
  { name: 'My Profile', href: '/profile/1', icon: UserCircle },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  // Close sidebar on mobile by default
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Desktop Sidebar - ALWAYS visible on desktop */}
      <div 
        className={`hidden md:block fixed left-0 top-0 h-full bg-sidebar text-white transition-all duration-300 z-30 shadow-2xl`}
        style={{ width: isOpen ? '260px' : '80px' }}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-end p-4 h-16 border-b border-white/10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center mx-2 my-1 px-3 py-2.5 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }
                `}
                style={{ justifyContent: isOpen ? 'flex-start' : 'center' }}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {isOpen && (
                  <span className="ml-3 text-sm whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* User Footer */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-sidebar">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-medium">AM</span>
              </div>
              <div>
                <p className="text-sm font-medium">Alex Morgan</p>
                <p className="text-xs text-gray-400">Product Designer</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Spacer - pushes main content to the right */}
      <div className={`hidden md:block transition-all duration-300`} style={{ width: isOpen ? '260px' : '80px' }} />
    </>
  )
}