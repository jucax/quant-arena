import { useState } from 'react'
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Target, 
  Award,
  Filter,
  Search,
  Calendar,
  Star,
  TrendingDown
} from 'lucide-react'

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rank')

  const leaderboardData = [
    {
      rank: 1,
      name: 'Alex Chen',
      avatar: 'AC',
      team: 'Red',
      totalPnl: 45.2,
      challenges: 8,
      winRate: 75.5,
      avgReturn: 12.8,
      bestStrategy: 'Momentum Master',
      joinDate: '2023-01-15',
      badges: ['Champion', 'Consistent', 'Innovator']
    },
    {
      rank: 2,
      name: 'Sarah Kim',
      avatar: 'SK',
      team: 'Blue',
      totalPnl: 42.8,
      challenges: 6,
      winRate: 68.2,
      avgReturn: 11.3,
      bestStrategy: 'Mean Reversion Pro',
      joinDate: '2023-02-20',
      badges: ['Runner-up', 'Analyst', 'Risk Manager']
    },
    {
      rank: 3,
      name: 'Mike Johnson',
      avatar: 'MJ',
      team: 'Red',
      totalPnl: 38.5,
      challenges: 5,
      winRate: 72.1,
      avgReturn: 10.9,
      bestStrategy: 'Volatility Hunter',
      joinDate: '2023-01-08',
      badges: ['Consistent', 'Quick Learner']
    },
    {
      rank: 4,
      name: 'Emma Davis',
      avatar: 'ED',
      team: 'Blue',
      totalPnl: 35.1,
      challenges: 7,
      winRate: 65.8,
      avgReturn: 9.7,
      bestStrategy: 'Options Master',
      joinDate: '2023-03-10',
      badges: ['Innovator', 'Team Player']
    },
    {
      rank: 5,
      name: 'David Wilson',
      avatar: 'DW',
      team: 'Red',
      totalPnl: 32.9,
      challenges: 4,
      winRate: 70.3,
      avgReturn: 11.2,
      bestStrategy: 'Crypto King',
      joinDate: '2023-02-05',
      badges: ['Rising Star', 'Consistent']
    },
    {
      rank: 6,
      name: 'Lisa Brown',
      avatar: 'LB',
      team: 'Blue',
      totalPnl: 29.7,
      challenges: 6,
      winRate: 62.4,
      avgReturn: 8.9,
      bestStrategy: 'Arbitrage Pro',
      joinDate: '2023-01-25',
      badges: ['Analyst', 'Risk Manager']
    },
    {
      rank: 7,
      name: 'Tom Anderson',
      avatar: 'TA',
      team: 'Red',
      totalPnl: 27.3,
      challenges: 5,
      winRate: 58.9,
      avgReturn: 7.8,
      bestStrategy: 'Swing Trader',
      joinDate: '2023-02-15',
      badges: ['Consistent']
    },
    {
      rank: 8,
      name: 'Maria Garcia',
      avatar: 'MG',
      team: 'Blue',
      totalPnl: 25.8,
      challenges: 4,
      winRate: 64.2,
      avgReturn: 9.1,
      bestStrategy: 'Scalping Master',
      joinDate: '2023-03-01',
      badges: ['Quick Learner', 'Team Player']
    },
    {
      rank: 9,
      name: 'John Smith',
      avatar: 'JS',
      team: 'Red',
      totalPnl: 23.4,
      challenges: 3,
      winRate: 66.7,
      avgReturn: 8.2,
      bestStrategy: 'Trend Follower',
      joinDate: '2023-02-28',
      badges: ['Rising Star']
    },
    {
      rank: 10,
      name: 'Anna Lee',
      avatar: 'AL',
      team: 'Blue',
      totalPnl: 21.9,
      challenges: 5,
      winRate: 59.8,
      avgReturn: 7.3,
      bestStrategy: 'Breakout Trader',
      joinDate: '2023-01-30',
      badges: ['Analyst']
    }
  ]

  const filters = [
    { key: 'all', label: 'All Time', icon: Trophy },
    { key: 'month', label: 'This Month', icon: Calendar },
    { key: 'week', label: 'This Week', icon: TrendingUp },
    { key: 'red', label: 'Team Red', icon: TrendingUp },
    { key: 'blue', label: 'Team Blue', icon: TrendingDown }
  ]

  const getBadgeColor = (badge) => {
    const colors = {
      'Champion': 'bg-yellow-500 text-black',
      'Runner-up': 'bg-gray-400 text-black',
      'Consistent': 'bg-green-500 text-white',
      'Innovator': 'bg-purple-500 text-white',
      'Analyst': 'bg-blue-500 text-white',
      'Risk Manager': 'bg-orange-500 text-white',
      'Quick Learner': 'bg-pink-500 text-white',
      'Team Player': 'bg-indigo-500 text-white',
      'Rising Star': 'bg-emerald-500 text-white'
    }
    return colors[badge] || 'bg-gray-600 text-white'
  }

  const filteredData = leaderboardData.filter(user => {
    if (activeFilter === 'red' && user.team !== 'Red') return false
    if (activeFilter === 'blue' && user.team !== 'Blue') return false
    if (searchTerm && !user.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'rank':
        return a.rank - b.rank
      case 'pnl':
        return b.totalPnl - a.totalPnl
      case 'winRate':
        return b.winRate - a.winRate
      case 'challenges':
        return b.challenges - a.challenges
      default:
        return a.rank - b.rank
    }
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
          <p className="text-gray-400 mt-1">Top performers across all challenges and competitions</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-300">Live Rankings</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search traders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 text-sm font-medium text-gray-300">
          <div className="col-span-1">Rank</div>
          <div className="col-span-3">Trader</div>
          <div className="col-span-1">Team</div>
          <div className="col-span-1 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('pnl')}>
            Total P&L
          </div>
          <div className="col-span-1 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('challenges')}>
            Challenges
          </div>
          <div className="col-span-1 text-right cursor-pointer hover:text-white" onClick={() => setSortBy('winRate')}>
            Win Rate
          </div>
          <div className="col-span-1 text-right">Avg Return</div>
          <div className="col-span-2">Best Strategy</div>
          <div className="col-span-1">Badges</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-700">
          {sortedData.map((user) => (
            <div key={user.rank} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-750 transition-colors">
              {/* Rank */}
              <div className="col-span-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  user.rank === 1 ? 'bg-yellow-500 text-black' :
                  user.rank === 2 ? 'bg-gray-400 text-black' :
                  user.rank === 3 ? 'bg-orange-600 text-white' :
                  'bg-gray-600 text-white'
                }`}>
                  {user.rank}
                </div>
              </div>

              {/* Trader Info */}
              <div className="col-span-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-gray-400 text-sm">Joined {new Date(user.joinDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Team */}
              <div className="col-span-1 flex items-center">
                <div className={`w-3 h-3 rounded-full ${user.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                <span className="text-gray-300 ml-2 text-sm">Team {user.team}</span>
              </div>

              {/* Total P&L */}
              <div className="col-span-1 text-right">
                <span className="text-green-400 font-medium">+{user.totalPnl}%</span>
              </div>

              {/* Challenges */}
              <div className="col-span-1 text-right">
                <span className="text-white">{user.challenges}</span>
              </div>

              {/* Win Rate */}
              <div className="col-span-1 text-right">
                <span className="text-blue-400 font-medium">{user.winRate}%</span>
              </div>

              {/* Avg Return */}
              <div className="col-span-1 text-right">
                <span className="text-gray-300">+{user.avgReturn}%</span>
              </div>

              {/* Best Strategy */}
              <div className="col-span-2">
                <span className="text-gray-300 text-sm">{user.bestStrategy}</span>
              </div>

              {/* Badges */}
              <div className="col-span-1 flex items-center space-x-1">
                {user.badges.slice(0, 2).map((badge, index) => (
                  <div
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(badge)}`}
                    title={badge}
                  >
                    {badge}
                  </div>
                ))}
                {user.badges.length > 2 && (
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white">
                    +{user.badges.length - 2}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Participants</p>
              <p className="text-2xl font-bold text-white">1,247</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Team Red Avg</p>
              <p className="text-2xl font-bold text-white">+28.4%</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Team Blue Avg</p>
              <p className="text-2xl font-bold text-white">+25.7%</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Avg Win Rate</p>
              <p className="text-2xl font-bold text-white">67.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard 