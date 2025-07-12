import { useState } from 'react'
import { 
  Trophy, 
  Clock, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Target,
  Award,
  Play,
  Calendar,
  Star,
  Zap
} from 'lucide-react'

const ChallengeArena = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null)

  const activeChallenges = [
    {
      id: 1,
      title: 'Momentum Masters',
      description: 'Build the best momentum-based trading strategy',
      prize: 5000,
      participants: 127,
      timeLeft: '2d 14h 32m',
      team: 'Red',
      difficulty: 'Hard',
      category: 'Momentum',
      requirements: ['Python 3.9+', 'Max 5 strategies', 'Live trading enabled'],
      leaderboard: [
        { rank: 1, name: 'Alex Chen', team: 'Red', pnl: 45.2, strategies: 3 },
        { rank: 2, name: 'Sarah Kim', team: 'Blue', pnl: 42.8, strategies: 2 },
        { rank: 3, name: 'Mike Johnson', team: 'Red', pnl: 38.5, strategies: 4 },
      ]
    },
    {
      id: 2,
      title: 'Mean Reversion Showdown',
      description: 'Master the art of mean reversion trading',
      prize: 3000,
      participants: 89,
      timeLeft: '5d 8h 15m',
      team: 'Blue',
      difficulty: 'Medium',
      category: 'Mean Reversion',
      requirements: ['Python 3.9+', 'Max 3 strategies', 'Backtest required'],
      leaderboard: [
        { rank: 1, name: 'Emma Davis', team: 'Blue', pnl: 38.1, strategies: 2 },
        { rank: 2, name: 'David Wilson', team: 'Red', pnl: 35.9, strategies: 3 },
        { rank: 3, name: 'Lisa Brown', team: 'Blue', pnl: 32.4, strategies: 1 },
      ]
    },
    {
      id: 3,
      title: 'Volatility Hunters',
      description: 'Profit from market volatility with innovative strategies',
      prize: 7500,
      participants: 203,
      timeLeft: '1d 6h 45m',
      team: 'Red',
      difficulty: 'Expert',
      category: 'Volatility',
      requirements: ['Python 3.9+', 'Max 7 strategies', 'Risk management required'],
      leaderboard: [
        { rank: 1, name: 'John Smith', team: 'Red', pnl: 52.3, strategies: 5 },
        { rank: 2, name: 'Maria Garcia', team: 'Blue', pnl: 48.7, strategies: 6 },
        { rank: 3, name: 'Tom Anderson', team: 'Red', pnl: 45.1, strategies: 4 },
      ]
    }
  ]

  const upcomingChallenges = [
    {
      id: 4,
      title: 'Options Masters',
      description: 'Advanced options trading strategies',
      prize: 10000,
      startDate: '2024-02-15',
      difficulty: 'Expert',
      category: 'Options'
    },
    {
      id: 5,
      title: 'Crypto Kings',
      description: 'Cryptocurrency trading challenge',
      prize: 8000,
      startDate: '2024-02-20',
      difficulty: 'Hard',
      category: 'Cryptocurrency'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Challenge Arena</h1>
          <p className="text-gray-400 mt-1">Compete against the best traders in real-time challenges</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Live Trading Active</span>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span>Active Challenges</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {activeChallenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
              onClick={() => setSelectedChallenge(challenge)}
            >
              {/* Challenge Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${challenge.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                    <span className="text-sm font-medium text-gray-400">{challenge.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-400">{challenge.difficulty}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-bold">${challenge.prize.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{challenge.participants}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{challenge.timeLeft}</span>
                  </div>
                </div>
              </div>

              {/* Challenge Footer */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Top Performers</span>
                  <button className="text-blue-400 text-sm hover:text-blue-300">View All</button>
                </div>
                
                <div className="space-y-2 mb-4">
                  {challenge.leaderboard.slice(0, 3).map((player) => (
                    <div key={player.rank} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          player.rank === 1 ? 'bg-yellow-500 text-black' :
                          player.rank === 2 ? 'bg-gray-400 text-black' :
                          'bg-orange-600 text-white'
                        }`}>
                          {player.rank}
                        </div>
                        <span className="text-white text-sm">{player.name}</span>
                        <div className={`w-2 h-2 rounded-full ${player.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                      </div>
                      <span className="text-green-400 text-sm font-medium">+{player.pnl}%</span>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600">
                  <Play className="w-4 h-4" />
                  <span>Join Challenge</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Challenges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-blue-500" />
          <span>Upcoming Challenges</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-400">{challenge.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-400">{challenge.difficulty}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold">${challenge.prize.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Starts {challenge.startDate}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
                <Zap className="w-4 h-4" />
                <span>Set Reminder</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge Details Modal */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{selectedChallenge.title}</h2>
                <button 
                  onClick={() => setSelectedChallenge(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Challenge Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Challenge Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool</span>
                      <span className="text-green-400 font-bold">${selectedChallenge.prize.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants</span>
                      <span className="text-white">{selectedChallenge.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time Remaining</span>
                      <span className="text-orange-400">{selectedChallenge.timeLeft}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Difficulty</span>
                      <span className="text-yellow-400">{selectedChallenge.difficulty}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedChallenge.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Leaderboard */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Current Leaderboard</h3>
                <div className="bg-gray-700 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-4 bg-gray-600 text-sm font-medium text-gray-300">
                    <span>Rank</span>
                    <span>Trader</span>
                    <span>Team</span>
                    <span>P&L</span>
                  </div>
                  {selectedChallenge.leaderboard.map((player) => (
                    <div key={player.rank} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-600">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          player.rank === 1 ? 'bg-yellow-500 text-black' :
                          player.rank === 2 ? 'bg-gray-400 text-black' :
                          player.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {player.rank}
                        </div>
                      </div>
                      <span className="text-white">{player.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${player.team === 'Red' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                        <span className="text-gray-300">Team {player.team}</span>
                      </div>
                      <span className="text-green-400 font-medium">+{player.pnl}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Strategy */}
              <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600">
                  <Trophy className="w-5 h-5" />
                  <span>Submit Strategy</span>
                </button>
                <button 
                  onClick={() => setSelectedChallenge(null)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeArena 