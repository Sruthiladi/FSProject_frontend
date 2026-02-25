import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../styles/sidebar.css'

const menuItems = [
  { to: '/support/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/support/queries', label: 'User Queries', icon: '❓' },
  { to: '/support/resolved', label: 'Resolved Issues', icon: '✅' },
  { to: '/support/profile', label: 'Profile', icon: '👤' },
]

export default function SupportLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="sidebar-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>ServiceHub</h2>
          <span>Support Panel</span>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          <button className="sidebar-link logout" onClick={handleLogout}>
            <span className="sidebar-icon">🚪</span>
            Logout
          </button>
        </nav>
      </aside>
      <main className="sidebar-main">
        <Outlet />
      </main>
    </div>
  )
}
