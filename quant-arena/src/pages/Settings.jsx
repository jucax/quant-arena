import { useState } from 'react'
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Palette,
  Database,
  Key,
  Globe,
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account')
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    challenge: true,
    strategy: false,
    market: true
  })

  const dataProviders = [
    {
      id: 'alphavantage',
      name: 'Alpha Vantage',
      description: 'Real-time and historical stock data',
      status: 'connected',
      apiKey: '••••••••••••••••••••••••••••••••',
      lastUsed: '2024-01-20'
    },
    {
      id: 'polygon',
      name: 'Polygon.io',
      description: 'Aggregated market data and news',
      status: 'connected',
      apiKey: '••••••••••••••••••••••••••••••••',
      lastUsed: '2024-01-19'
    },
    {
      id: 'yahoo',
      name: 'Yahoo Finance',
      description: 'Free market data and financial news',
      status: 'available',
      apiKey: '',
      lastUsed: null
    }
  ]

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account preferences and integrations</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Settings Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <nav className="space-y-2">
              {[
                { key: 'account', label: 'Account', icon: User },
                { key: 'security', label: 'Security', icon: Shield },
                { key: 'notifications', label: 'Notifications', icon: Bell },
                { key: 'appearance', label: 'Appearance', icon: Palette },
                { key: 'integrations', label: 'Integrations', icon: Database }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.key
                        ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Account Settings */}
          {activeTab === 'account' && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Account Information</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                    <input
                      type="text"
                      defaultValue="johndoe"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Team</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="red">Team Red</option>
                      <option value="blue">Team Blue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Passionate algorithmic trader focused on momentum strategies and risk management."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-sm text-gray-400">Account created</p>
                    <p className="text-white">January 15, 2023</p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <Trash2 className="w-4 h-4 inline mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">SMS Authentication</p>
                      <p className="text-gray-400 text-sm">Receive codes via SMS</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Enable
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Authenticator App</p>
                      <p className="text-gray-400 text-sm">Use Google Authenticator or similar</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                      Setup
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div>
                        <p className="text-white">Chrome on MacBook Pro</p>
                        <p className="text-gray-400 text-sm">San Francisco, CA • Active now</p>
                      </div>
                      <button className="text-red-400 hover:text-red-300">Revoke</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div>
                        <p className="text-white">Safari on iPhone</p>
                        <p className="text-gray-400 text-sm">San Francisco, CA • 2 hours ago</p>
                      </div>
                      <button className="text-red-400 hover:text-red-300">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Email Notifications</h3>
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <p className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-gray-400 text-sm">
                          {key === 'email' && 'Receive notifications via email'}
                          {key === 'push' && 'Receive push notifications in browser'}
                          {key === 'challenge' && 'Get notified about new challenges'}
                          {key === 'strategy' && 'Receive strategy performance updates'}
                          {key === 'market' && 'Get market alerts and news'}
                        </p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange(key)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          value ? 'bg-blue-500' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          value ? 'transform translate-x-6' : 'transform translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Notification Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Quiet Hours</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="none">No quiet hours</option>
                        <option value="10pm-8am">10 PM - 8 AM</option>
                        <option value="11pm-7am">11 PM - 7 AM</option>
                        <option value="12am-6am">12 AM - 6 AM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Time Zone</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="pst">Pacific Time (PST)</option>
                        <option value="est">Eastern Time (EST)</option>
                        <option value="gmt">Greenwich Mean Time (GMT)</option>
                        <option value="cet">Central European Time (CET)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Theme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-blue-500 rounded-lg p-4 bg-gray-700">
                      <div className="w-full h-20 bg-gray-900 rounded mb-2"></div>
                      <p className="text-white font-medium">Dark (Current)</p>
                      <p className="text-gray-400 text-sm">Default dark theme</p>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-4 bg-gray-700">
                      <div className="w-full h-20 bg-white rounded mb-2"></div>
                      <p className="text-white font-medium">Light</p>
                      <p className="text-gray-400 text-sm">Light theme</p>
                    </div>
                    <div className="border-2 border-gray-600 rounded-lg p-4 bg-gray-700">
                      <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                      <p className="text-white font-medium">Auto</p>
                      <p className="text-gray-400 text-sm">Follow system</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Team Colors</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      <span className="text-white">Team Red</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-white">Team Blue</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Chart Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Default Timeframe</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="1m">1 Minute</option>
                        <option value="5m">5 Minutes</option>
                        <option value="15m">15 Minutes</option>
                        <option value="1h">1 Hour</option>
                        <option value="1d">1 Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Chart Type</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="candlestick">Candlestick</option>
                        <option value="line">Line</option>
                        <option value="area">Area</option>
                        <option value="bar">Bar</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integrations Settings */}
          {activeTab === 'integrations' && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Data Integrations</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  {dataProviders.map((provider) => (
                    <div key={provider.id} className="border border-gray-700 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                          <p className="text-gray-400 text-sm">{provider.description}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          provider.status === 'connected' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                        }`}>
                          {provider.status === 'connected' ? 'Connected' : 'Available'}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">API Key</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="password"
                              value={provider.apiKey}
                              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter API key"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                              <Key className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {provider.lastUsed && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Last used: {new Date(provider.lastUsed).toLocaleDateString()}</span>
                            <button className="text-blue-400 hover:text-blue-300">Test Connection</button>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            {provider.status === 'connected' ? 'Update' : 'Connect'}
                          </button>
                          {provider.status === 'connected' && (
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                              Disconnect
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-lg font-medium text-white mb-4">Data Export</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                      <Download className="w-4 h-4" />
                      <span>Export Trading Data</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                      <Upload className="w-4 h-4" />
                      <span>Import Strategies</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings 