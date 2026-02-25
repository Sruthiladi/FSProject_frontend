import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../styles/user.css'

export default function UserLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <nav className="user-navbar">
        <div className="nav-brand">ServiceHub</div>
        <div className="nav-links">
          <NavLink to="/user/home" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/user/browse" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Browse Services
          </NavLink>
          <NavLink to="/user/bookings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            My Bookings
          </NavLink>
          <NavLink to="/user/help" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Help & Support
          </NavLink>
          <button className="nav-link logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  )
}
