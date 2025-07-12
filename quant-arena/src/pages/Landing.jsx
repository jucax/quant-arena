import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Play, 
  ArrowRight, 
  Trophy, 
  Users, 
  TrendingUp, 
  Code,
  Target,
  Award,
  Star,
  Check,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Activity,
  DollarSign,
  BookOpen,
  GraduationCap
} from 'lucide-react'

const Landing = () => {
  const [activeTab, setActiveTab] = useState('features')

  const handleTryDemo = () => {
    // For now, just navigate to the app
    window.location.href = '/app'
  }

  const handleStartTrial = () => {
    // This would typically open a sign-up modal or redirect to sign-up
    alert('Sign-up functionality coming soon! For now, try the demo.')
    window.location.href = '/app'
  }

  const handleSignIn = () => {
    window.location.href = '/register'
  }

  const features = [
    {
      icon: Code,
      title: 'Strategy Builder',
      description: 'Create, test, and optimize your trading strategies with our advanced Python editor and real-time backtesting engine.',
      color: 'from-quant-blue to-blue-600'
    },
    {
      icon: Trophy,
      title: 'Challenge Arena',
      description: 'Compete in real-time trading challenges with other learners, track your progress, and improve your skills.',
      color: 'from-quant-red to-red-600'
    },
    {
      icon: Users,
      title: 'Team Competition',
      description: 'Join Team Red or Team Blue and compete in epic battles with real-time performance tracking.',
      color: 'from-quant-red to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Live Analytics',
      description: 'Monitor your performance with advanced charts, risk metrics, and real-time portfolio tracking.',
      color: 'from-quant-blue to-teal-500'
    }
  ]

  const stats = [
    { number: '5,000+', label: 'Active Learners', icon: Users },
    { number: '200+', label: 'Trading Strategies', icon: Code },
    { number: '95%', label: 'User Satisfaction', icon: Star },
    { number: '24/7', label: 'Community Support', icon: Shield }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Student Trader',
      content: 'QuantArena helped me understand algorithmic trading from the ground up. The community is incredibly supportive.',
      avatar: 'AC',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Finance Student',
      content: 'The platform\'s educational approach is perfect for beginners. I\'ve learned so much about risk management.',
      avatar: 'SK',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      role: 'Self-Taught Trader',
      content: 'The team competition aspect makes learning fun and engaging. Highly recommended for anyone interested in trading.',
      avatar: 'MJ',
      rating: 5
    }
  ]

  const accessPlans = [
    {
      name: 'Community Access',
      price: 'Free',
      features: [
        'Access to Strategy Builder',
        'Basic Backtesting',
        'Join 2 Challenges/month',
        'Community Support',
        'Educational Resources'
      ],
      cta: 'Join Community',
      popular: false
    },
    {
      name: 'Premium Access',
      price: 'Coming Soon',
      features: [
        'Everything in Community',
        'Advanced Analytics',
        'Unlimited Challenges',
        'Priority Support',
        'Custom Indicators',
        'API Access',
        'Exclusive Workshops'
      ],
      cta: 'Get Notified',
      popular: true
    },
    {
      name: 'Institutional',
      price: 'Contact Us',
      features: [
        'Everything in Premium',
        'White-label Solution',
        'Dedicated Support',
        'Custom Integrations',
        'Advanced Risk Management',
        'Team Management',
        'Educational Programs'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/quant-arena-logo-1.png" alt="QuantArena" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">
                QuantArena
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Access</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={handleSignIn} className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button onClick={handleStartTrial} className="bg-gradient-to-r from-quant-red to-quant-blue text-white px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-blue-600 transition-all">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-quant-red/10 text-quant-red border border-quant-red/20">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Educational Platform - Learn & Practice
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-white">
                  Algorithmic Trading
                </span>
                <br />
                <span className="text-white">Made Accessible</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Learn, practice, and improve your algorithmic trading skills in a supportive community environment. 
                Join thousands of learners in the ultimate educational trading platform.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button onClick={handleTryDemo} className="bg-gradient-to-r from-quant-red to-quant-blue text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-red-600 hover:to-blue-600 transition-all flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Try Demo Now</span>
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>

            {/* Logo with Cool Effect */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-quant-red/20 to-quant-blue/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Floating Animation Container */}
                <div className="relative animate-float">
                  <img 
                    src="/assets/quant-arena-logo-1.png" 
                    alt="QuantArena" 
                    className="w-64 h-64 lg:w-80 lg:h-80 animate-glow"
                  />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-quant-red rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-2 h-2 bg-quant-blue rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-quant-red rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-quant-blue rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-quant-red to-quant-blue rounded-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Learn
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From strategy development to live trading practice, QuantArena provides the complete educational toolkit for algorithmic traders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <button className="text-quant-blue hover:text-blue-300 font-medium flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                See QuantArena in Action
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Watch how easy it is to learn, build, and test trading strategies in our educational environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Real-time strategy backtesting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Educational trading competitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Risk management practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Community learning environment</span>
                </div>
              </div>
              <button onClick={handleTryDemo} className="mt-8 bg-gradient-to-r from-quant-red to-quant-blue text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-blue-600 transition-all flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Launch Demo</span>
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Learners Worldwide
            </h2>
            <p className="text-xl text-gray-400">
              See what our community has to say about QuantArena
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-quant-red to-quant-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Plans Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Access Level
            </h2>
            <p className="text-xl text-gray-400">
              Start learning for free and upgrade as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 rounded-lg p-8 border ${
                plan.popular ? 'border-quant-blue relative' : 'border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-quant-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button onClick={plan.name === 'Community Access' ? handleTryDemo : handleStartTrial} className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-quant-red to-quant-blue text-white hover:from-red-600 hover:to-blue-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of learners who are already improving their trading skills on QuantArena.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={handleStartTrial} className="bg-gradient-to-r from-quant-red to-quant-blue text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-red-600 hover:to-blue-600 transition-all flex items-center space-x-2">
              <span>Join Community</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/assets/quant-arena-logo-1.png" alt="QuantArena" className="w-8 h-8" />
                <span className="text-xl font-bold text-white">
                  QuantArena
                </span>
              </div>
              <p className="text-gray-400">
                The ultimate educational platform for algorithmic trading practice.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Access</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 QuantArena. Educational platform for algorithmic trading practice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing 