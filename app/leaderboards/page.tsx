// src/app/leaderboards/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingUp, Medal, Star, Zap, Trophy, Crown,Users } from 'lucide-react'

const leaderboardData = [
  { rank: 1, name: 'Alex Morgan', points: 2450, badges: 24, department: 'Product', avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan', trend: '+342' },
  { rank: 2, name: 'Jamie Rodriguez', points: 2320, badges: 21, department: 'Engineering', avatar: 'https://ui-avatars.com/api/?name=Jamie+Rodriguez', trend: '+287' },
  { rank: 3, name: 'Jordan Lee', points: 2180, badges: 19, department: 'Marketing', avatar: 'https://ui-avatars.com/api/?name=Jordan+Lee', trend: '+156' },
  { rank: 4, name: 'Taylor Swift', points: 2050, badges: 18, department: 'HR', avatar: 'https://ui-avatars.com/api/?name=Taylor+Swift', trend: '+98' },
  { rank: 5, name: 'Casey Williams', points: 1890, badges: 16, department: 'Analytics', avatar: 'https://ui-avatars.com/api/?name=Casey+Williams', trend: '+234' },
]

const badges = [
  { name: 'Star Performer', icon: Star, points: 500, holders: 24 },
  { name: 'Innovation Leader', icon: Zap, points: 750, holders: 12 },
  { name: 'Team Player', icon: Users, points: 300, holders: 56 },
  { name: 'Excellence Award', icon: Trophy, points: 1000, holders: 8 },
]

export default function LeaderboardsPage() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'allTime'>('monthly')

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="text-yellow-500" size={24} />
      case 2: return <Medal className="text-gray-400" size={24} />
      case 3: return <Medal className="text-amber-600" size={24} />
      default: return <span className="text-muted font-semibold">#{rank}</span>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Award className="text-primary" size={28} />
            <h1 className="text-3xl font-bold text-text">Leaderboards</h1>
          </div>
          <p className="text-muted">Celebrate top contributors and their achievements</p>
        </motion.div>

        {/* Timeframe selector */}
        <div className="flex space-x-2 mb-8">
          {(['weekly', 'monthly', 'allTime'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeframe === tf
                  ? 'bg-primary text-white'
                  : 'bg-white text-muted hover:bg-gray-100'
              }`}
            >
              {tf === 'allTime' ? 'All Time' : tf.charAt(0).toUpperCase() + tf.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard List - Main */}
          <div className="lg:col-span-2">
            <div className="bg-cards rounded-xl border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-semibold text-text">Top Contributors</h3>
              </div>
              <div className="divide-y divide-border">
                {leaderboardData.map((person, index) => (
                  <motion.div
                    key={person.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 text-center">
                          {getRankIcon(person.rank)}
                        </div>
                        <img src={person.avatar} alt="" className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="font-semibold text-text">{person.name}</p>
                          <p className="text-xs text-muted">{person.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-text">{person.points.toLocaleString()} pts</p>
                        <p className="text-xs text-success">+{person.trend} this month</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="space-y-6">
            <div className="bg-cards rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-text mb-4 flex items-center">
                <Crown className="text-primary mr-2" size={20} />
                Available Badges
              </h3>
              <div className="space-y-4">
                {badges.map((badge) => (
                  <div key={badge.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <badge.icon size={24} className="text-primary" />
                      <div>
                        <p className="font-medium text-text">{badge.name}</p>
                        <p className="text-xs text-muted">{badge.points} points</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted">{badge.holders} holders</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cards rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted">Current Rank</span>
                  <span className="font-semibold text-text">#1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Total Points</span>
                  <span className="font-semibold text-text">1,890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Badges Earned</span>
                  <span className="font-semibold text-text">12</span>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Next Rank:</span>
                    <span className="text-primary">Need 110 more points</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}