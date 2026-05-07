// src/types/index.ts
export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  avatar: string
  joinDate: string
  location: string
  manager?: string
  skills: string[]
  recognitionPoints: number
}

export interface Announcement {
  id: string
  title: string
  content: string
  author: Employee
  createdAt: string
  priority: 'high' | 'medium' | 'low'
  department?: string
  attachments?: string[]
}

export interface FeedPost {
  id: string
  content: string
  author: Employee
  createdAt: string
  likes: number
  comments: Comment[]
  shares: number
  type: 'announcement' | 'recognition' | 'update' | 'story'
  image?: string
}

export interface Comment {
  id: string
  author: Employee
  content: string
  createdAt: string
}

export interface Recognition {
  id: string
  from: Employee
  to: Employee
  message: string
  badge: BadgeType
  createdAt: string
}

export type BadgeType = 'star' | 'leader' | 'innovator' | 'teamplayer' | 'excellence'

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  organizer: Employee
  attendees: number
  image?: string
  type: 'celebration' | 'meeting' | 'workshop' | 'social'
}

export interface KnowledgeArticle {
  id: string
  title: string
  content: string
  category: string
  author: Employee
  createdAt: string
  updatedAt: string
  views: number
  helpful: number
}

export interface Department {
  id: string
  name: string
  head: Employee
  members: Employee[]
  metrics: DepartmentMetrics
}

export interface DepartmentMetrics {
  engagement: number
  productivity: number
  satisfaction: number
  achievements: number
}

export interface AnalyticsData {
  date: string
  engagement: number
  recognition: number
  activeUsers: number
  posts: number
}