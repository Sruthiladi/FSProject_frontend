import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  FiGrid,
  FiHelpCircle,
  FiCheckCircle,
  FiUser,
  FiLogOut
} from 'react-icons/fi'
import '../styles/sidebar.css'

const menuItems = [
  { to: '/support/dashboard', label: 'Dashboard', icon: <FiGrid /> },
  { to: '/support/queries', label: 'User Queries', icon: <FiHelpCircle /> },
  { to: '/support/resolved', label: 'Resolved Issues', icon: <FiCheckCircle /> },
  { to: '/support/profile', label: 'Profile', icon: <FiUser /> },
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
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}

          <button className="sidebar-link logout" onClick={handleLogout}>
            <span className="sidebar-icon">
              <FiLogOut />
            </span>
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