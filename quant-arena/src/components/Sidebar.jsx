import { NavLink } from 'react-router-dom'
import { 
  BarChart3, 
  Code, 
  Trophy, 
  Users, 
  User, 
  Settings as SettingsIcon,
  TrendingUp,
  Activity
} from 'lucide-react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigation = [
    { name: 'Dashboard', href: '/app', icon: BarChart3 },
    { name: 'Strategy Builder', href: '/app/strategy-builder', icon: Code },
    { name: 'Challenge Arena', href: '/app/challenge-arena', icon: Trophy },
    { name: 'Leaderboard', href: '/app/leaderboard', icon: Users },
    { name: 'Profile', href: '/app/profile', icon: User },
    { name: 'Settings', href: '/app/settings', icon: SettingsIcon },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <img src="/assets/quant-arena-logo-1.png" alt="QuantArena" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">
                QuantArena
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-quant-red/20 to-quant-blue/20 text-white border border-quant-red/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </NavLink>
              )
            })}
          </nav>

          {/* Team Status */}
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Team Status</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-quant-red rounded-full"></div>
                <span className="text-sm text-gray-300">Team Red</span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">+12.5% this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar 