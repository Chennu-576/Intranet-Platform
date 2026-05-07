// src/store/store.ts
import { create } from 'zustand'
import { Employee, Announcement, FeedPost, Recognition, Event } from '@/types'
import { mockEmployees, mockAnnouncements, mockFeedPosts, mockRecognitions, mockEvents } from '@/data/mockData'

interface AppState {
  // User state
  currentUser: Employee | null
  setCurrentUser: (user: Employee | null) => void
  
  // Data state
  employees: Employee[]
  announcements: Announcement[]
  feedPosts: FeedPost[]
  recognitions: Recognition[]
  events: Event[]
  
  // UI state
  sidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  
  // Actions
  addFeedPost: (post: FeedPost) => void
  addRecognition: (recognition: Recognition) => void
  likePost: (postId: string) => void
}

export const useStore = create<AppState>((set) => ({
  // Initial user
  currentUser: mockEmployees[0],
  setCurrentUser: (user) => set({ currentUser: user }),
  
  // Data
  employees: mockEmployees,
  announcements: mockAnnouncements,
  feedPosts: mockFeedPosts,
  recognitions: mockRecognitions,
  events: mockEvents,
  
  // UI
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  
  // Actions
  addFeedPost: (post) => set((state) => ({ feedPosts: [post, ...state.feedPosts] })),
  addRecognition: (recognition) => set((state) => ({ recognitions: [recognition, ...state.recognitions] })),
  likePost: (postId) => set((state) => ({
    feedPosts: state.feedPosts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
  }))
}))