/**
 * API Service Configuration
 * Base setup for backend API calls
 * 
 * Configure your backend URL here:
 * - Development: http://localhost:5000 (Node.js/Python/Java server)
 * - Production: https://your-api-domain.com
 */

// ===== CONFIGURATION =====
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/CollegeEvent';
const API_TIMEOUT = 10000; // 10 seconds

// ===== UTILITY FUNCTIONS =====

/**
 * Create request headers with authentication token if available
 */
const getHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

/**
 * Fetch wrapper with timeout and error handling
 */
const fetchWithTimeout = async (url, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: getHeaders()
    });
    clearTimeout(timeout);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeout);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
};

// ===== API ENDPOINTS =====

export const apiClient = {
  // Auth Endpoints
  auth: {
    /**
     * Login with email and password
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {Promise<{token: string, user: object}>}
     */
    login: async (email, password) => {
      const response = await fetchWithTimeout(`${API_BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    },

    /**
     * Register new user
     * @param {object} userData - User data (fullName, email, phone, password)
     * @returns {Promise<{token: string, user: object}>}
     */
    register: async (userData) => {
      const response = await fetchWithTimeout(`${API_BASE_URL}/signup`, {
        method: 'POST',
        body: JSON.stringify(userData)
      });
      
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      return response;
    },

    /**
     * Logout user and clear token
     */
    logout: () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    },

    /**
     * Verify if user is authenticated
     */
    isAuthenticated: () => {
      return !!localStorage.getItem('authToken');
    },

    /**
     * Get current user data
     */
    getCurrentUser: () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },

    /**
     * Forgot password - request reset email
     * @param {string} email - User email
     */
    forgotPassword: async (email) => {
      return fetchWithTimeout(`${API_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        body: JSON.stringify({ email })
      });
    },

    /**
     * Reset password with token
     * @param {string} token - Reset token from email
     * @param {string} newPassword - New password
     */
    resetPassword: async (token, newPassword) => {
      return fetchWithTimeout(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        body: JSON.stringify({ token, newPassword })
      });
    }
  },

  // User Endpoints
  user: {
    /**
     * Get user profile
     */
    getProfile: async () => {
      return fetchWithTimeout(`${API_BASE_URL}/user/profile`, {
        method: 'GET'
      });
    },

    /**
     * Update user profile
     * @param {object} profileData - Updated profile data
     */
    updateProfile: async (profileData) => {
      return fetchWithTimeout(`${API_BASE_URL}/user/profile`, {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });
    },

    /**
     * Change password
     * @param {string} oldPassword - Current password
     * @param {string} newPassword - New password
     */
    changePassword: async (oldPassword, newPassword) => {
      return fetchWithTimeout(`${API_BASE_URL}/user/change-password`, {
        method: 'POST',
        body: JSON.stringify({ oldPassword, newPassword })
      });
    }
  },

  // Events Endpoints
  events: {
    /**
     * Get all events
     */
    getAll: async () => {
      return fetchWithTimeout(`${API_BASE_URL}/events`, {
        method: 'GET'
      });
    },

    /**
     * Get single event details
     * @param {string} eventId - Event ID
     */
    getById: async (eventId) => {
      return fetchWithTimeout(`${API_BASE_URL}/events/${eventId}`, {
        method: 'GET'
      });
    },

    /**
     * Register for an event
     * @param {string} eventId - Event ID
     * @param {object} registrationData - Team info, participants, etc.
     */
    register: async (eventId, registrationData) => {
      return fetchWithTimeout(`${API_BASE_URL}/events/${eventId}/register`, {
        method: 'POST',
        body: JSON.stringify(registrationData)
      });
    }
  },

  // Team Endpoints
  teams: {
    /**
     * Get user's teams
     */
    getMyTeams: async () => {
      return fetchWithTimeout(`${API_BASE_URL}/teams`, {
        method: 'GET'
      });
    },

    /**
     * Create new team
     * @param {object} teamData - Team name, members, etc.
     */
    create: async (teamData) => {
      return fetchWithTimeout(`${API_BASE_URL}/teams`, {
        method: 'POST',
        body: JSON.stringify(teamData)
      });
    },

    /**
     * Update team details
     * @param {string} teamId - Team ID
     * @param {object} updateData - Update data
     */
    update: async (teamId, updateData) => {
      return fetchWithTimeout(`${API_BASE_URL}/teams/${teamId}`, {
        method: 'PUT',
        body: JSON.stringify(updateData)
      });
    }
  }
};

export default apiClient;
