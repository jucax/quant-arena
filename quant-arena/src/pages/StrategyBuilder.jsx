import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { 
  Play, 
  Save, 
  Download, 
  Settings, 
  BarChart3, 
  Activity,
  TrendingUp,
  Target,
  Clock,
  DollarSign,
  Trophy,
  Code
} from 'lucide-react'

const StrategyBuilder = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const [activeMetric, setActiveMetric] = useState('pnl')
  const [isRunning, setIsRunning] = useState(false)
  const editorRef = useRef(null)

  const defaultCode = 'import pandas as pd\n' +
'import numpy as np\n' +
'from datetime import datetime, timedelta\n' +
'\n' +
'class MomentumStrategy:\n' +
'    def __init__(self, lookback_period=20, threshold=0.02):\n' +
'        self.lookback_period = lookback_period\n' +
'        self.threshold = threshold\n' +
'        self.position = 0\n' +
'        \n' +
'    def calculate_signals(self, data):\n' +
'        """Calculate trading signals based on momentum"""\n' +
'        signals = pd.DataFrame(index=data.index)\n' +
'        signals["signal"] = 0\n' +
'        \n' +
'        # Calculate returns\n' +
'        data["returns"] = data["close"].pct_change()\n' +
'        \n' +
'        # Calculate momentum (rolling mean of returns)\n' +
'        data["momentum"] = data["returns"].rolling(self.lookback_period).mean()\n' +
'        \n' +
'        # Generate signals\n' +
'        signals.loc[data["momentum"] > self.threshold, "signal"] = 1  # Buy\n' +
'        signals.loc[data["momentum"] < -self.threshold, "signal"] = -1  # Sell\n' +
'        \n' +
'        return signals\n' +
'    \n' +
'    def backtest(self, data, initial_capital=100000):\n' +
'        """Run backtest on historical data"""\n' +
'        signals = self.calculate_signals(data)\n' +
'        \n' +
'        # Calculate positions\n' +
'        positions = signals["signal"].shift(1)\n' +
'        \n' +
'        # Calculate portfolio value\n' +
'        portfolio = pd.DataFrame(index=data.index)\n' +
'        portfolio["positions"] = positions * data["close"]\n' +
'        portfolio["cash"] = initial_capital - (positions * data["close"]).cumsum()\n' +
'        portfolio["total"] = portfolio["positions"] + portfolio["cash"]\n' +
'        portfolio["returns"] = portfolio["total"].pct_change()\n' +
'        \n' +
'        return portfolio\n' +
'\n' +
'# Example usage\n' +
'if __name__ == "__main__":\n' +
'    # Load sample data (replace with your data source)\n' +
'    dates = pd.date_range("2023-01-01", "2023-12-31", freq="D")\n' +
'    np.random.seed(42)\n' +
'    prices = 100 + np.cumsum(np.random.randn(len(dates)) * 0.5)\n' +
'    \n' +
'    data = pd.DataFrame({\n' +
'        "close": prices,\n' +
'        "volume": np.random.randint(1000000, 10000000, len(dates))\n' +
'    }, index=dates)\n' +
'    \n' +
'    # Initialize and run strategy\n' +
'    strategy = MomentumStrategy(lookback_period=20, threshold=0.02)\n' +
'    results = strategy.backtest(data)\n' +
'    \n' +
'    print("Backtest completed!")\n' +
'    print("Final portfolio value: ${:,.2f}".format(results["total"].iloc[-1]))\n' +
'    print("Total return: {:.2f}%".format((results["total"].iloc[-1] / 100000 - 1) * 100))\n'

  const metricsData = {
    pnl: [
      { date: '2023-01', value: 100000 },
      { date: '2023-02', value: 105000 },
      { date: '2023-03', value: 112000 },
      { date: '2023-04', value: 108000 },
      { date: '2023-05', value: 115000 },
      { date: '2023-06', value: 122000 },
    ],
    sharpe: [
      { date: '2023-01', value: 1.2 },
      { date: '2023-02', value: 1.4 },
      { date: '2023-03', value: 1.6 },
      { date: '2023-04', value: 1.3 },
      { date: '2023-05', value: 1.7 },
      { date: '2023-06', value: 1.85 },
    ],
    winrate: [
      { date: '2023-01', value: 55 },
      { date: '2023-02', value: 58 },
      { date: '2023-03', value: 62 },
      { date: '2023-04', value: 59 },
      { date: '2023-05', value: 65 },
      { date: '2023-06', value: 68.5 },
    ]
  }

  const consoleLogs = [
    { type: 'info', message: 'Strategy loaded successfully', time: '14:32:15' },
    { type: 'info', message: 'Loading historical data...', time: '14:32:16' },
    { type: 'success', message: 'Data loaded: 252 trading days', time: '14:32:17' },
    { type: 'info', message: 'Running backtest...', time: '14:32:18' },
    { type: 'success', message: 'Backtest completed in 2.3s', time: '14:32:20' },
    { type: 'info', message: 'Total Return: +22.0%', time: '14:32:20' },
    { type: 'info', message: 'Sharpe Ratio: 1.85', time: '14:32:20' },
    { type: 'info', message: 'Max Drawdown: -8.2%', time: '14:32:20' },
    { type: 'info', message: 'Win Rate: 68.5%', time: '14:32:20' },
  ]

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }

  const handleRunBacktest = () => {
    setIsRunning(true)
    // Simulate backtest running
    setTimeout(() => {
      setIsRunning(false)
    }, 3000)
  }

  const handleSaveStrategy = () => {
    const code = editorRef.current?.getValue()
    console.log('Saving strategy:', code)
    // Here you would typically save to backend
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Strategy Builder</h1>
          <p className="text-gray-400 mt-1">Create, test, and optimize your trading strategies</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleRunBacktest}
            disabled={isRunning}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4" />
            <span>{isRunning ? 'Running...' : 'Run Backtest'}</span>
          </button>
          <button
            onClick={handleSaveStrategy}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Editor Tabs */}
          <div className="bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex space-x-1">
                {['editor', 'console', 'metrics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab === 'editor' && <Code className="w-4 h-4 inline mr-2" />}
                    {tab === 'console' && <Activity className="w-4 h-4 inline mr-2" />}
                    {tab === 'metrics' && <BarChart3 className="w-4 h-4 inline mr-2" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Python 3.9</span>
              </div>
            </div>

            <div className="h-96">
              {activeTab === 'editor' && (
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  defaultValue={defaultCode}
                  theme="vs-dark"
                  onMount={handleEditorDidMount}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              )}

              {activeTab === 'console' && (
                <div className="h-full bg-gray-900 p-4 font-mono text-sm overflow-y-auto">
                  {consoleLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-3 mb-2">
                      <span className="text-gray-500 text-xs mt-1">{log.time}</span>
                      <div className="flex-1">
                        <span className={`${
                          log.type === 'success' ? 'text-green-400' :
                          log.type === 'error' ? 'text-red-400' :
                          'text-blue-400'
                        }`}>
                          [{log.type.toUpperCase()}]
                        </span>
                        <span className="text-gray-300 ml-2">{log.message}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="h-full bg-gray-900 p-4">
                  <div className="flex space-x-2 mb-4">
                    {[
                      { key: 'pnl', label: 'P&L', icon: DollarSign },
                      { key: 'sharpe', label: 'Sharpe', icon: TrendingUp },
                      { key: 'winrate', label: 'Win Rate', icon: Target }
                    ].map((metric) => (
                      <button
                        key={metric.key}
                        onClick={() => setActiveMetric(metric.key)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeMetric === metric.key
                            ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <metric.icon className="w-4 h-4" />
                        <span>{metric.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    {metricsData[activeMetric]?.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <span className="text-gray-300">{item.date}</span>
                        <span className="text-white font-medium">
                          {activeMetric === 'pnl' ? `$${item.value.toLocaleString()}` :
                           activeMetric === 'sharpe' ? item.value.toFixed(2) :
                           `${item.value}%`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Strategy Panel */}
        <div className="space-y-6">
          {/* Strategy Info */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Strategy Info</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Strategy Name</label>
                <input
                  type="text"
                  defaultValue="Momentum Strategy"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                  defaultValue="A momentum-based trading strategy that buys when price momentum is positive and sells when negative."
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tags</label>
                <input
                  type="text"
                  defaultValue="momentum, trend-following, medium-term"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Return</span>
                <span className="text-green-400 font-medium">+22.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sharpe Ratio</span>
                <span className="text-blue-400 font-medium">1.85</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Drawdown</span>
                <span className="text-red-400 font-medium">-8.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Win Rate</span>
                <span className="text-green-400 font-medium">68.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Trades</span>
                <span className="text-white font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Trade Duration</span>
                <span className="text-white font-medium">3.2 days</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600">
                <Trophy className="w-4 h-4" />
                <span>Submit to Challenge</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
                <Settings className="w-4 h-4" />
                <span>Optimize Parameters</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
                <Clock className="w-4 h-4" />
                <span>Schedule Live Trading</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StrategyBuilder 