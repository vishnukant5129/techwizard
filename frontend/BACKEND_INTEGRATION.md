# Backend Integration Guide

Your React authentication pages are now **backend-ready**! Follow this guide to connect to your backend server.

## Quick Setup

### 1. Configure API Endpoint

Create a `.env.local` file in your project root (copy from `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
```

**Production URLs:**
- Vercel/Netlify: `https://your-api-domain.com/api`
- Custom Domain: `https://api.yourdomain.com`

### 2. Service Layer Overview

#### **api.js** - Core API Client
- Base configuration and fetch wrapper with timeout/error handling
- All API endpoints organized by resource (auth, user, events, teams)
- Automatic bearer token management in request headers
- Maps HTTP errors to user-friendly messages

```javascript
// Usage in components
import apiClient from '../services/api';

const data = await apiClient.auth.login(email, password);
const user = await apiClient.user.getProfile();
const events = await apiClient.events.getAll();
```

#### **authService.js** - High-Level Auth Operations
- Input validation before API calls
- Error handling and user-friendly messages
- Token & user data management (localStorage)
- Ready-to-use functions for components

```javascript
// Usage in components
import authService from '../services/authService';

const result = await authService.login(email, password);
if (result.success) {
  navigate('/dashboard');
} else {
  setError(result.error);
}
```

## Backend Requirements

Your backend API must provide these endpoints:

### Authentication Endpoints

#### `POST /api/auth/login`
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "fullName": "John Doe",
    "phone": "1234567890",
    "role": "participant"
  }
}
```

**Error Response (401):**
```json
{
  "message": "Invalid email or password"
}
```

#### `POST /api/auth/register`
**Request:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "new_user_id",
    "email": "john@example.com",
    "fullName": "John Doe",
    "phone": "1234567890",
    "role": "participant"
  }
}
```

**Error Response (409):**
```json
{
  "message": "Email already registered"
}
```

#### `POST /api/auth/logout`
Clears server-side session/token blacklist

#### `POST /api/auth/forgot-password`
**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Reset link sent to email"
}
```

#### `POST /api/auth/reset-password`
**Request:**
```json
{
  "token": "reset_token",
  "newPassword": "newpassword123"
}
```

### User Endpoints

#### `GET /api/user/profile`
**Headers:** `Authorization: Bearer {token}`

**Response (200):**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "fullName": "John Doe",
  "phone": "1234567890",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### `PUT /api/user/profile`
**Request:**
```json
{
  "fullName": "John Doe Updated",
  "phone": "9876543210"
}
```

#### `POST /api/user/change-password`
**Request:**
```json
{
  "oldPassword": "current_password",
  "newPassword": "new_password"
}
```

### Events Endpoints

#### `GET /api/events`
Get all available events

**Response:**
```json
[
  {
    "id": "event_id",
    "name": "Robo War",
    "description": "Battle robots in competitive arenas",
    "maxTeams": 100,
    "registeredTeams": 45,
    "category": "competitive"
  }
]
```

#### `POST /api/events/{eventId}/register`
**Headers:** `Authorization: Bearer {token}`

**Request:**
```json
{
  "teamName": "Team Alpha",
  "members": ["member1_id", "member2_id"]
}
```

## Error Handling

The frontend automatically handles these HTTP status codes:

| Code | Meaning | Frontend Action |
|------|---------|-----------------|
| 200 | Success | Process response |
| 201 | Created | Process response |
| 400 | Bad Request | Show validation error |
| 401 | Unauthorized | Show "Invalid credentials" or redirect to login |
| 409 | Conflict | Show "Email already exists" |
| 429 | Too Many Requests | Show "Too many attempts" |
| 500 | Server Error | Show "Server error, try again later" |
| timeout | No response | Show "Connection timeout" |

## Token Management

The frontend automatically:
- Stores JWT token in `localStorage.authToken` after login
- Includes token in `Authorization: Bearer {token}` header for all authenticated requests
- Clears token on logout
- Refreshes token on expiration (implement token refresh endpoint if needed)

### Optional: Token Refresh Flow

If your backend uses short-lived tokens, implement refresh:

```javascript
// Add to api.js
auth: {
  refreshToken: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: getHeaders()
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('authToken', data.token);
    }
    return data;
  }
}
```

## Testing the Integration

### 1. Start Your Backend
```bash
# Example Node.js/Express server
npm run dev  # Runs on http://localhost:5000
```

### 2. Update Frontend API URL
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Test Login Flow
```bash
npm run dev
# Go to http://localhost:5173
# Click LOGIN button
# Enter: email@example.com / password123
```

### 4. Monitor Network Requests
Open DevTools → Network tab to see:
- `POST /api/auth/login` - Check request/response
- Headers should include `Content-Type: application/json`
- Token should appear in all subsequent requests

## Frontend Features Already Implemented

✅ Email validation (regex check)
✅ Password strength validation (min 6 chars)
✅ Phone number validation (10 digits)
✅ Password confirmation matching
✅ Loading states during API calls
✅ Error display to users
✅ Token storage & automatic header inclusion
✅ Automatic redirect after login/register
✅ Form reset after successful submission

## Common Issues & Solutions

### CORS Errors
If you see `Access to XMLHttpRequest blocked by CORS policy`:

Add to your backend (Example: Node.js/Express):
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true
}));
```

### Token Not Being Sent
Check in Network tab → Headers:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

If missing, ensure your backend returns token in login response.

### 401 Errors After Login
- Verify token is stored: `localStorage.getItem('authToken')` in DevTools Console
- Ensure backend validates token correctly
- Check token expiration time

### 400 Validation Errors
- Frontend validates before sending, but backend should validate too
- Check request body format matches backend expectations
- Verify all required fields are included

## Next Steps

1. **Clone your backend repository** into the project:
   ```bash
   git clone <backend-repo> backend/
   ```

2. **Update API_BASE_URL** in `.env.local` after backend is running

3. **Test each endpoint** individually in Postman/Insomnia before using in app

4. **Add loading skeleton screens** for better UX during API calls

5. **Implement token refresh** if using short-lived JWT tokens

6. **Add email verification** for new registrations

7. **Add password reset** email flow

## Technology Stack

- **Frontend**: React 19 + Vite
- **HTTP Client**: Fetch API (no external libraries needed)
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: JWT token + user data
- **Backend**: Your choice (Node.js, Python, Java, etc.)

Your authentication system is **production-ready** and ready to connect to any REST API!
