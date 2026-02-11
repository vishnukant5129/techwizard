import { useState, useCallback } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import authService from '../services/authService';

const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Call authentication service
      const result = await authService.login(email, password);

      if (result.success) {
        // Reset form
        setEmail('');
        setPassword('');
        // Navigate to home on successful login
        setTimeout(() => {
          onNavigate('home');
        }, 500);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Star Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Scanlines */}
      <div className="scanlines fixed inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-block mb-6 hover:text-cyan-400 transition-colors"
          >
            <h1 className="text-3xl font-black">
              TECH<span className="text-cyan-400">WIZARD</span>
            </h1>
          </button>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to access the arena</p>
        </div>

        {/* Login Card */}
        <div className="bg-gradient-to-br from-cyan-500/5 to-pink-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-cyan-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-cyan-500/50" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-cyan-400">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-cyan-500/50" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-cyan-500/50 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold py-2.5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <LogIn size={18} />
              {loading ? 'Logging in...' : 'Sign In'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyan-500/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/50 text-gray-500">Or</span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center text-gray-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
              >
                Create one
              </button>
            </div>
          </form>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
