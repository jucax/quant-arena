import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import StrategyBuilder from './pages/StrategyBuilder'
import ChallengeArena from './pages/ChallengeArena'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<Landing />} />
        
        {/* Registration route */}
        <Route path="/register" element={<Register />} />
        
        {/* App routes with sidebar layout */}
        <Route path="/app/*" element={
          <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Top Navigation */}
              <header className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img src="/assets/quant-arena-logo-1.png" alt="QuantArena" className="w-8 h-8" />
                    <span className="text-xl font-bold text-white">
                      QuantArena
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Live Trading</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto bg-gray-900">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/strategy-builder" element={<StrategyBuilder />} />
                  <Route path="/challenge-arena" element={<ChallengeArena />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </div>
        } />
        
        {/* Catch-all route for any unexpected paths */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
