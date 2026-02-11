/**
 * Authentication Service
 * Higher-level auth operations with error handling and validation
 */

import apiClient from './api';

export const authService = {
  /**
   * Login user with email and password
   * Handles validation and error mapping
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{success: boolean, data?: object, error?: string}>}
   */
  login: async (email, password) => {
    try {
      // Input validation
      if (!email || !password) {
        return {
          success: false,
          error: 'Email and password are required'
        };
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
          success: false,
          error: 'Invalid email format'
        };
      }

      if (password.length < 6) {
        return {
          success: false,
          error: 'Password must be at least 6 characters'
        };
      }

      // Call API
      const result = await apiClient.auth.login(email, password);

      return {
        success: true,
        data: result
      };
    } catch (error) {
      // Map common backend errors to user-friendly messages
      let errorMessage = error.message;

      if (error.message.includes('401')) {
        errorMessage = 'Invalid email or password';
      } else if (error.message.includes('429')) {
        errorMessage = 'Too many login attempts. Please try again later';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Connection timeout. Please check your internet';
      }

      return {
        success: false,
        error: errorMessage
      };
    }
  },

  /**
   * Register new user
   * @param {object} userData - { fullName, email, phone, password, confirmPassword }
   * @returns {Promise<{success: boolean, data?: object, error?: string}>}
   */
  register: async (userData) => {
    try {
      // Input validation
      const requiredFields = ['fullName', 'email', 'phone', 'password', 'confirmPassword'];
      const missingField = requiredFields.find(field => !userData[field]);

      if (missingField) {
        return {
          success: false,
          error: `${missingField} is required`
        };
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        return {
          success: false,
          error: 'Invalid email format'
        };
      }

      if (!/^\d{10}$/.test(userData.phone.replace(/\D/g, ''))) {
        return {
          success: false,
          error: 'Phone number must be 10 digits'
        };
      }

      if (userData.password.length < 6) {
        return {
          success: false,
          error: 'Password must be at least 6 characters'
        };
      }

      if (userData.password !== userData.confirmPassword) {
        return {
          success: false,
          error: 'Passwords do not match'
        };
      }

      // Prepare data for API - transform field names to match backend
      const apiData = {
        name: userData.fullName,
        email: userData.email,
        phoneNumber: userData.phone,
        password: userData.password,
        confirmPassword: userData.confirmPassword
      };

      // Call API
      const result = await apiClient.auth.register(apiData);

      return {
        success: true,
        data: result
      };
    } catch (error) {
      // Map common backend errors
      let errorMessage = error.message;

      if (error.message.includes('409') || error.message.includes('already exists')) {
        errorMessage = 'Email already registered. Please login or use different email';
      } else if (error.message.includes('400')) {
        errorMessage = 'Invalid data submitted. Please check your inputs';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Connection timeout. Please check your internet';
      }

      return {
        success: false,
        error: errorMessage
      };
    }
  },

  /**
   * Logout current user
   */
  logout: () => {
    apiClient.auth.logout();
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: () => {
    return apiClient.auth.isAuthenticated();
  },

  /**
   * Get current user from localStorage
   */
  getCurrentUser: () => {
    return apiClient.auth.getCurrentUser();
  }
};

export default authService;
