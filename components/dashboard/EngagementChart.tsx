// src/components/dashboard/EngagementChart.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Calendar } from 'lucide-react'

const data = [
  { date: 'Week 1', engagement: 82, recognition: 45, activeUsers: 890 },
  { date: 'Week 2', engagement: 85, recognition: 52, activeUsers: 920 },
  { date: 'Week 3', engagement: 88, recognition: 58, activeUsers: 950 },
  { date: 'Week 4', engagement: 91, recognition: 67, activeUsers: 1010 },
]

export default function EngagementChart() {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'quarter'>('week')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cards rounded-xl border border-border p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text">Engagement Trends</h3>
          <p className="text-sm text-muted">Employee engagement metrics over time</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTimeframe('week')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              timeframe === 'week' ? 'bg-primary text-white' : 'text-muted hover:bg-gray-100'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              timeframe === 'month' ? 'bg-primary text-white' : 'text-muted hover:bg-gray-100'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.3}/>
              <stop offset="100%" stopColor="#4F46E5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="date" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
          />
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#4F46E5"
            strokeWidth={2}
            fill="url(#engagementGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}