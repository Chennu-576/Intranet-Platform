'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: 'primary' | 'success' | 'accent' | 'warning'
}

const colorVariants = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  accent: 'bg-accent/10 text-accent',
  warning: 'bg-warning/10 text-warning',
}

export default function StatsCard({ title, value, change, icon: Icon, color }: StatsCardProps) {
  const isPositive = change.startsWith('+')
  
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-cards rounded-xl border border-border p-4 md:p-6 transition-all duration-200 hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={cn("p-2 rounded-lg", colorVariants[color])}>
          <Icon size={18} className="md:w-5 md:h-5" />
        </div>
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          isPositive ? "bg-success/10 text-success" : "bg-error/10 text-error"
        )}>
          {change}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-text mb-1">{value}</h3>
      <p className="text-xs md:text-sm text-muted">{title}</p>
    </motion.div>
  )
}