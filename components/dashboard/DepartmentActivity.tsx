'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, Award, ArrowUp, ArrowDown } from 'lucide-react'

const departments = [
  { name: 'Product', engagement: 92, trend: '+5%', members: 24, achievements: 12 },
  { name: 'Engineering', engagement: 88, trend: '+3%', members: 42, achievements: 18 },
  { name: 'Marketing', engagement: 94, trend: '+8%', members: 18, achievements: 9 },
  { name: 'HR', engagement: 96, trend: '+2%', members: 12, achievements: 7 },
  { name: 'Sales', engagement: 85, trend: '-1%', members: 28, achievements: 6 },
]

export default function DepartmentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Building2 size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-text">Department Activity</h3>
        </div>
      </div>

      <div className="space-y-4">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-text">{dept.name}</span>
              <div className="flex items-center space-x-1">
                {dept.trend.startsWith('+') ? (
                  <ArrowUp size={12} className="text-success" />
                ) : (
                  <ArrowDown size={12} className="text-error" />
                )}
                <span className={`text-xs ${dept.trend.startsWith('+') ? 'text-success' : 'text-error'}`}>
                  {dept.trend}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted">Engagement</span>
              <span className="font-semibold text-text">{dept.engagement}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${dept.engagement}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted">
              <div className="flex items-center space-x-1">
                <Users size={12} />
                <span>{dept.members} members</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award size={12} />
                <span>{dept.achievements} achievements</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}