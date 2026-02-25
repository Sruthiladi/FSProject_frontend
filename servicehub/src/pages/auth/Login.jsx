import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/auth.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')

  const roles = [
    { value: 'user', label: 'User' },
    { value: 'professional', label: 'Professional' },
    { value: 'admin', label: 'Admin' },
    { value: 'support', label: 'Support' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('role', role)
    localStorage.setItem('user', JSON.stringify({ email, role }))

    const redirectMap = {
      user: '/user/home',
      professional: '/professional/dashboard',
      admin: '/admin/dashboard',
      support: '/support/dashboard',
    }
    navigate(redirectMap[role])
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">
          <h1>ServiceHub</h1>
          <p>Sign in to your account</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Login as</label>
            <div className="role-select-group">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  className={`role-option ${role === r.value ? 'active' : ''}`}
                  onClick={() => setRole(r.value)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Sign In
          </button>
        </form>
        <div className="auth-footer">
          {"Don't have an account? "}
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
