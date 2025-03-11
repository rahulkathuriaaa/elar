import { User, HomeIcon, Search, Bell } from 'lucide-react'
import { NavBar } from '@/ui/tubelight-navbar'

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Search', url: '/search', icon: Search },
    { name: 'Notifications', url: '/notifications', icon: Bell },
    { name: 'Profile', url: '/profile', icon: User }
  ]

  return <NavBar items={navItems} />
}