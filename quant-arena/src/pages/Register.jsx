import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Globe,
  Building,
  GraduationCap,
  Send,
  CheckCircle
} from 'lucide-react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    experience: '',
    interests: [],
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const experienceLevels = [
    'Beginner - New to trading',
    'Intermediate - Some experience',
    'Advanced - Experienced trader',
    'Professional - Industry experience'
  ]

  const interestAreas = [
    'Algorithmic Trading',
    'Quantitative Analysis',
    'Risk Management',
    'Portfolio Optimization',
    'Machine Learning in Trading',
    'Cryptocurrency Trading',
    'Options Trading',
    'Forex Trading'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Registration data:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-400 mb-6">
              Your information has been received. We'll reach out to you when our official program launches with exclusive early access and special offers.
            </p>
            <div className="space-y-4">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-quant-blue hover:text-blue-300 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <div className="text-sm text-gray-500">
                <p>You'll receive updates about:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Platform launch announcements</li>
                  <li>• Early access opportunities</li>
                  <li>• Educational content and resources</li>
                  <li>• Community events and workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <img src="/assets/quant-arena-logo-1.png" alt="QuantArena" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">
                QuantArena
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join the QuantArena Community
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get notified when our official educational platform launches. We'll reach out with exclusive early access and special offers for our community members.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <User className="w-5 h-5 text-quant-blue" />
                <span>Personal Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-quant-blue" />
                <span>Contact Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Building className="w-5 h-5 text-quant-blue" />
                <span>Professional Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Role/Position</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue"
                  />
                </div>
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-quant-blue" />
                <span>Trading Experience</span>
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4">What's your experience level with trading? *</label>
                <div className="space-y-3">
                  {experienceLevels.map((level, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={level}
                        checked={formData.experience === level}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-quant-blue bg-gray-700 border-gray-600 focus:ring-quant-blue"
                      />
                      <span className="text-gray-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-quant-blue" />
                <span>Areas of Interest</span>
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4">What areas are you most interested in? (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestAreas.map((interest, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-quant-blue bg-gray-700 border-gray-600 rounded focus:ring-quant-blue"
                      />
                      <span className="text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Additional Comments or Questions</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us more about your goals, specific questions, or any other information you'd like to share..."
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-quant-blue resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-quant-red to-quant-blue text-white px-8 py-3 rounded-lg font-medium hover:from-red-600 hover:to-blue-600 transition-all flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Registration</span>
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="text-center text-sm text-gray-500">
              <p>
                By submitting this form, you agree to receive updates about QuantArena's launch and educational content. 
                We respect your privacy and will never share your information with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register 