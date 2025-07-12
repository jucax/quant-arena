import { useState } from 'react'
import { 
  User, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar,
  Star,
  Award,
  Clock,
  DollarSign,
  Activity,
  Settings,
  Edit,
  Share,
  Download
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const userStats = {
    name: 'John Doe',
    avatar: 'JD',
    team: 'Red',
    rank: 15,
    joinDate: '2023-01-15',
    totalPnl: 28.5,
    challenges: 12,
    winRate: 65.8,
    avgReturn: 9.2,
    totalTrades: 342,
    bestStrategy: 'Momentum Master',
    badges: [
      { name: 'Consistent', color: 'bg-green-500', icon: '🎯' },
      { name: 'Quick Learner', color: 'bg-blue-500', icon: '🚀' },
      { name: 'Team Player', color: 'bg-purple-500', icon: '🤝' },
      { name: 'Risk Manager', color: 'bg-orange-500', icon: '🛡️' }
    ]
  }

  const performanceData = [
    { month: 'Jan', pnl: 5.2, trades: 28 },
    { month: 'Feb', pnl: 8.7, trades: 35 },
    { month: 'Mar', pnl: 12.1, trades: 42 },
    { month: 'Apr', pnl: 9.8, trades: 38 },
    { month: 'May', pnl: 15.3, trades: 45 },
    { month: 'Jun', pnl: 18.9, trades: 52 },
    { month: 'Jul', pnl: 22.4, trades: 48 },
    { month: 'Aug', pnl: 25.7, trades: 55 },
    { month: 'Sep', pnl: 28.5, trades: 61 },
  ]

  const challengeHistory = [
    {
      id: 1,
      name: 'Momentum Masters',
      result: 'Winner',
      rank: 1,
      pnl: 45.2,
      date: '2024-01-15',
      prize: 5000,
      team: 'Red'
    },
    {
      id: 2,
      name: 'Mean Reversion Showdown',
      result: 'Runner-up',
      rank: 2,
      pnl: 38.1,
      date: '2023-12-20',
      prize: 2000,
      team: 'Red'
    },
    {
      id: 3,
      name: 'Volatility Hunters',
      result: 'Top 10',
      rank: 7,
      pnl: 25.3,
      date: '2023-11-10',
      prize: 500,
      team: 'Red'
    },
    {
      id: 4,
      name: 'Options Masters',
      result: 'Participant',
      rank: 15,
      pnl: 12.8,
      date: '2023-10-05',
      prize: 0,
      team: 'Red'
    }
  ]

  const favoriteStrategies = [
    {
      id: 1,
      name: 'Momentum Master',
      description: 'Advanced momentum-based trading strategy',
      performance: 45.2,
      trades: 156,
      winRate: 68.5,
      lastUsed: '2024-01-20',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Mean Reversion Pro',
      description: 'Statistical arbitrage using mean reversion',
      performance: 38.1,
      trades: 89,
      winRate: 72.3,
      lastUsed: '2024-01-18',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Volatility Hunter',
      description: 'Volatility-based options strategy',
      performance: 25.3,
      trades: 67,
      winRate: 58.9,
      lastUsed: '2024-01-15',
      status: 'Testing'
    }
  ]

  const recentActivity = [
    { type: 'challenge', message: 'Won Momentum Masters challenge', time: '2 hours ago', icon: '🏆' },
    { type: 'strategy', message: 'Updated Momentum Master strategy', time: '1 day ago', icon: '⚙️' },
    { type: 'trade', message: 'Executed 15 trades with 68% win rate', time: '2 days ago', icon: '📈' },
    { type: 'badge', message: 'Earned "Consistent" badge', time: '1 week ago', icon: '🎯' },
    { type: 'challenge', message: 'Joined Volatility Hunters challenge', time: '1 week ago', icon: '🎮' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Profile</h1>
          <p className="text-gray-400 mt-1">Your trading journey and achievements</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userStats.avatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{userStats.name}</h2>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${userStats.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                  <span className="text-gray-300">Team {userStats.team}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-300">Rank #{userStats.rank}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Joined {new Date(userStats.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {userStats.badges.map((badge, index) => (
              <div
                key={index}
                className={`${badge.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center space-x-1`}
                title={badge.name}
              >
                <span>{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total P&L</p>
              <p className="text-2xl font-bold text-green-400">+{userStats.totalPnl}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Win Rate</p>
              <p className="text-2xl font-bold text-blue-400">{userStats.winRate}%</p>
            </div>
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Challenges</p>
              <p className="text-2xl font-bold text-white">{userStats.challenges}</p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Trades</p>
              <p className="text-2xl font-bold text-white">{userStats.totalTrades}</p>
            </div>
            <Activity className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex border-b border-gray-700">
          {['overview', 'challenges', 'strategies', 'activity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Performance Chart */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Performance Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="pnl" 
                      stroke="#10B981" 
                      fill="url(#performanceGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Best Strategy */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Best Performing Strategy</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-white">{userStats.bestStrategy}</p>
                    <p className="text-gray-400 mt-1">Momentum-based trading with advanced risk management</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">+{userStats.totalPnl}%</p>
                    <p className="text-gray-400 text-sm">Total Return</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Challenge History</h3>
              {challengeHistory.map((challenge) => (
                <div key={challenge.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      challenge.result === 'Winner' ? 'bg-yellow-500' :
                      challenge.result === 'Runner-up' ? 'bg-gray-400' :
                      'bg-blue-500'
                    }`}>
                      <Trophy className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{challenge.name}</p>
                      <p className="text-gray-400 text-sm">{new Date(challenge.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-medium">+{challenge.pnl}%</p>
                    <p className="text-gray-400 text-sm">Rank #{challenge.rank}</p>
                    {challenge.prize > 0 && (
                      <p className="text-yellow-400 text-sm">${challenge.prize.toLocaleString()}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'strategies' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Favorite Strategies</h3>
              {favoriteStrategies.map((strategy) => (
                <div key={strategy.id} className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{strategy.name}</h4>
                      <p className="text-gray-400 text-sm">{strategy.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      strategy.status === 'Active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {strategy.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Performance</p>
                      <p className="text-green-400 font-medium">+{strategy.performance}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Trades</p>
                      <p className="text-white font-medium">{strategy.trades}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Win Rate</p>
                      <p className="text-blue-400 font-medium">{strategy.winRate}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Last Used</p>
                      <p className="text-gray-300 text-sm">{new Date(strategy.lastUsed).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{activity.message}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile 