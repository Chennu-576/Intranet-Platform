'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Calendar } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import AnnouncementsWidget from '@/components/dashboard/AnnouncementsWidget'
import EngagementChart from '@/components/dashboard/EngagementChart'
import RecentRecognitions from '@/components/dashboard/RecentRecognitions'
import UpcomingEvents from '@/components/dashboard/UpcomingEvents'
import TrendingDiscussions from '@/components/dashboard/TrendingDiscussions'
import QuickActions from '@/components/dashboard/QuickActions'
import DepartmentActivity from '@/components/dashboard/DepartmentActivity'

// Format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-sm md:text-base text-muted">Here's what's happening across your organization today.</p>
        </motion.div>

        {/* Stats Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatsCard
            title="Active Employees"
            value="1,284"
            change="+12%"
            icon={Users}
            color="primary"
          />
          <StatsCard
            title="Engagement Rate"
            value="87%"
            change="+5%"
            icon={TrendingUp}
            color="success"
          />
          <StatsCard
            title="Recognition Given"
            value="342"
            change="+28%"
            icon={Award}
            color="accent"
          />
          <StatsCard
            title="Upcoming Events"
            value="8"
            change="+2"
            icon={Calendar}
            color="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Main Feed Area */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <AnnouncementsWidget />
            <EngagementChart />
            <TrendingDiscussions />
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="space-y-6 md:space-y-8">
            <QuickActions />
            <RecentRecognitions />
            <UpcomingEvents />
            <DepartmentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
