// src/data/mockData.ts
import { Employee, Announcement, FeedPost, Recognition, Event, KnowledgeArticle, Department } from '@/types'

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    email: 'alex.morgan@company.com',
    role: 'Senior Product Designer',
    department: 'Product',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Morgan&background=4F46E5&color=fff',
    joinDate: '2022-01-15',
    location: 'San Francisco, CA',
    manager: 'Sarah Chen',
    skills: ['UI/UX', 'Figma', 'User Research'],
    recognitionPoints: 2450
  },
  {
    id: '2',
    name: 'Jamie Rodriguez',
    email: 'jamie.rodriguez@company.com',
    role: 'Engineering Manager',
    department: 'Engineering',
    avatar: 'https://ui-avatars.com/api/?name=Jamie+Rodriguez&background=10B981&color=fff',
    joinDate: '2021-06-01',
    location: 'New York, NY',
    manager: 'Michael Chang',
    skills: ['Leadership', 'React', 'Node.js'],
    recognitionPoints: 3120
  },
  {
    id: '3',
    name: 'Taylor Swift',
    email: 'taylor.swift@company.com',
    role: 'HR Business Partner',
    department: 'Human Resources',
    avatar: 'https://ui-avatars.com/api/?name=Taylor+Swift&background=818CF8&color=fff',
    joinDate: '2022-08-20',
    location: 'Austin, TX',
    manager: 'Jennifer Lee',
    skills: ['Recruiting', 'Employee Relations', 'Benefits'],
    recognitionPoints: 1890
  },
  {
    id: '4',
    name: 'Jordan Lee',
    email: 'jordan.lee@company.com',
    role: 'Marketing Lead',
    department: 'Marketing',
    avatar: 'https://ui-avatars.com/api/?name=Jordan+Lee&background=F59E0B&color=fff',
    joinDate: '2023-01-10',
    location: 'Chicago, IL',
    manager: 'Alex Morgan',
    skills: ['Digital Marketing', 'Content Strategy', 'SEO'],
    recognitionPoints: 2780
  },
  {
    id: '5',
    name: 'Casey Williams',
    email: 'casey.williams@company.com',
    role: 'Data Scientist',
    department: 'Analytics',
    avatar: 'https://ui-avatars.com/api/?name=Casey+Williams&background=EF4444&color=fff',
    joinDate: '2022-09-05',
    location: 'Seattle, WA',
    manager: 'Jamie Rodriguez',
    skills: ['Python', 'SQL', 'Machine Learning'],
    recognitionPoints: 2340
  }
]

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: '🎉 Q4 Company All-Hands Meeting',
    content: 'Join us for our quarterly all-hands meeting where we\'ll discuss achievements, upcoming goals, and celebrate our wins. Virtual and in-person options available.',
    author: mockEmployees[0],
    createdAt: '2024-01-15T10:00:00Z',
    priority: 'high',
    attachments: []
  },
  {
    id: '2',
    title: 'New HR Policies Update',
    content: 'We\'ve updated our remote work policy and benefits package. Please review the updated handbook by end of month.',
    author: mockEmployees[2],
    createdAt: '2024-01-14T14:30:00Z',
    priority: 'medium',
    department: 'Human Resources'
  },
  {
    id: '3',
    title: '🏆 Best Project Award Winners Announced',
    content: 'Congratulations to the Product team for winning the Q3 Best Project Award for the redesign initiative!',
    author: mockEmployees[0],
    createdAt: '2024-01-13T09:15:00Z',
    priority: 'high'
  }
]

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    content: 'Thrilled to announce the launch of our new design system! This has been a massive team effort and I\'m incredibly proud of what we\'ve accomplished together. 🎨✨',
    author: mockEmployees[0],
    createdAt: '2024-01-15T08:30:00Z',
    likes: 127,
    comments: [
      {
        id: 'c1',
        author: mockEmployees[1],
        content: 'Amazing work, team! This will be a game-changer.',
        createdAt: '2024-01-15T09:00:00Z'
      }
    ],
    shares: 15,
    type: 'announcement'
  },
  {
    id: '2',
    content: 'Just finished mentoring our junior developers through an intensive React workshop. Seeing their growth is the best part of my job! 💻🚀',
    author: mockEmployees[1],
    createdAt: '2024-01-14T16:45:00Z',
    likes: 89,
    comments: [],
    shares: 8,
    type: 'update'
  },
  {
    id: '3',
    content: 'Shoutout to @Jordan Lee for an incredible marketing campaign that exceeded all KPIs by 150%! Your creativity and dedication are inspiring. 🌟',
    author: mockEmployees[3],
    createdAt: '2024-01-14T11:20:00Z',
    likes: 203,
    comments: [
      {
        id: 'c2',
        author: mockEmployees[4],
        content: 'Congratulations, Jordan! Well deserved!',
        createdAt: '2024-01-14T12:00:00Z'
      }
    ],
    shares: 23,
    type: 'recognition'
  }
]

export const mockRecognitions: Recognition[] = [
  {
    id: '1',
    from: mockEmployees[1],
    to: mockEmployees[0],
    message: 'Incredible leadership on the design system project. Your attention to detail and collaboration made all the difference!',
    badge: 'leader',
    createdAt: '2024-01-14T10:00:00Z'
  },
  {
    id: '2',
    from: mockEmployees[2],
    to: mockEmployees[3],
    message: 'Your initiative in organizing team-building events has boosted morale significantly. Thank you!',
    badge: 'teamplayer',
    createdAt: '2024-01-13T15:30:00Z'
  }
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Company Holiday Party',
    description: 'Annual celebration with food, music, and team activities',
    date: '2024-12-20T18:00:00Z',
    location: 'Grand Convention Center',
    organizer: mockEmployees[2],
    attendees: 245,
    type: 'celebration'
  },
  {
    id: '2',
    title: 'Leadership Workshop: Effective Communication',
    description: 'For team leads and managers',
    date: '2024-01-25T13:00:00Z',
    location: 'Virtual + Conference Room A',
    organizer: mockEmployees[1],
    attendees: 45,
    type: 'workshop'
  }
]

export const mockKnowledgeArticles: KnowledgeArticle[] = [
  {
    id: '1',
    title: 'Employee Handbook 2024',
    content: 'Complete guide to company policies, benefits, and expectations...',
    category: 'Policies',
    author: mockEmployees[2],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    views: 1250,
    helpful: 98
  },
  {
    id: '2',
    title: 'Design System Guidelines',
    content: 'How to use our new design system effectively...',
    category: 'Design',
    author: mockEmployees[0],
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    views: 890,
    helpful: 95
  }
]

export const mockDepartments: Department[] = [
  {
    id: 'product',
    name: 'Product',
    head: mockEmployees[0],
    members: mockEmployees.filter(e => e.department === 'Product'),
    metrics: {
      engagement: 92,
      productivity: 88,
      satisfaction: 95,
      achievements: 24
    }
  },
  {
    id: 'engineering',
    name: 'Engineering',
    head: mockEmployees[1],
    members: mockEmployees.filter(e => e.department === 'Engineering'),
    metrics: {
      engagement: 89,
      productivity: 94,
      satisfaction: 91,
      achievements: 31
    }
  }
]