import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../styles/sidebar.css'

const menuItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/admin/users', label: 'Manage Users', icon: '👥' },
  { to: '/admin/professionals', label: 'Manage Professionals', icon: '🔧' },
  { to: '/admin/services', label: 'Manage Services', icon: '📦' },
  { to: '/admin/settings', label: 'Settings', icon: '⚙️' },
]

export default function AdminLayout() {
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
          <span>Admin Panel</span>
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
