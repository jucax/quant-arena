import { useState } from 'react'
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
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Award,
  Users,
  Activity,
  Zap
} from 'lucide-react'

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('1M')

  // Mock data for charts
  const equityData = [
    { date: 'Jan 1', equity: 10000, drawdown: 0 },
    { date: 'Jan 7', equity: 10500, drawdown: -2 },
    { date: 'Jan 14', equity: 11200, drawdown: -1 },
    { date: 'Jan 21', equity: 10800, drawdown: -3 },
    { date: 'Jan 28', equity: 11500, drawdown: -1 },
    { date: 'Feb 4', equity: 12200, drawdown: 0 },
    { date: 'Feb 11', equity: 11800, drawdown: -2 },
    { date: 'Feb 18', equity: 12500, drawdown: -1 },
  ]

  const performanceData = [
    { metric: 'Total Return', value: 25.0, change: '+2.5%', color: 'text-green-400' },
    { metric: 'Sharpe Ratio', value: 1.85, change: '+0.15', color: 'text-blue-400' },
    { metric: 'Max Drawdown', value: -8.2, change: '-1.2%', color: 'text-red-400' },
    { metric: 'Win Rate', value: 68.5, change: '+3.2%', color: 'text-green-400' },
  ]

  const recentTrades = [
    { symbol: 'AAPL', side: 'BUY', pnl: 125.50, time: '2 min ago' },
    { symbol: 'TSLA', side: 'SELL', pnl: -45.20, time: '15 min ago' },
    { symbol: 'NVDA', side: 'BUY', pnl: 89.30, time: '1 hour ago' },
    { symbol: 'MSFT', side: 'SELL', pnl: 67.80, time: '2 hours ago' },
  ]

  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', team: 'Red', pnl: 45.2, strategies: 8 },
    { rank: 2, name: 'Sarah Kim', team: 'Blue', pnl: 42.8, strategies: 6 },
    { rank: 3, name: 'Mike Johnson', team: 'Red', pnl: 38.5, strategies: 5 },
    { rank: 4, name: 'Emma Davis', team: 'Blue', pnl: 35.1, strategies: 7 },
    { rank: 5, name: 'David Wilson', team: 'Red', pnl: 32.9, strategies: 4 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, John! Here's your trading performance overview.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-800 rounded-lg p-1">
            {['1W', '1M', '3M', '1Y'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  timeframe === period
                    ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceData.map((item) => (
          <div key={item.metric} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{item.metric}</p>
                <p className="text-2xl font-bold text-white mt-1">{item.value}%</p>
              </div>
              <div className={`text-sm font-medium ${item.color}`}>
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equity Curve */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Equity Curve</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Portfolio Value</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={equityData}>
              <defs>
                <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
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
                dataKey="equity" 
                stroke="#10B981" 
                fill="url(#equityGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Drawdown Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Drawdown</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Max Drawdown</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={equityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="drawdown" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Trades */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Recent Trades</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentTrades.map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${trade.side === 'BUY' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <div>
                    <p className="text-white font-medium">{trade.symbol}</p>
                    <p className="text-gray-400 text-sm">{trade.side}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    ${trade.pnl.toFixed(2)}
                  </p>
                  <p className="text-gray-400 text-sm">{trade.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Top Performers</h3>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div key={user.rank} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    user.rank === 1 ? 'bg-yellow-500 text-black' :
                    user.rank === 2 ? 'bg-gray-400 text-black' :
                    user.rank === 3 ? 'bg-orange-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {user.rank}
                  </div>
                  <div>
                    <p className="text-white font-medium">{user.name}</p>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${user.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                      <p className="text-gray-400 text-sm">Team {user.team}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-medium">+{user.pnl}%</p>
                  <p className="text-gray-400 text-sm">{user.strategies} strategies</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 