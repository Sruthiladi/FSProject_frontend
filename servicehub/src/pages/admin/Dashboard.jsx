import { mockUsers, professionals, mockBookings, mockQueries } from '../../data/mockData'

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1>Admin Dashboard</h1>
        <p>Platform overview and key metrics</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">{mockUsers.length}</div>
          <div className="stat-change positive">+3 this week</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Professionals</div>
          <div className="stat-value">{professionals.length}</div>
          <div className="stat-change positive">+2 this week</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Total Bookings</div>
          <div className="stat-value">{mockBookings.length}</div>
          <div className="stat-change positive">+15% this month</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Open Tickets</div>
          <div className="stat-value">{mockQueries.filter((q) => q.status !== 'Resolved').length}</div>
          <div className="stat-change negative">Needs attention</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Recent Users</h3>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((u) => (
                  <tr key={u.id}>
                    <td style={{ fontWeight: 500 }}>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`badge ${u.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Recent Bookings</h3>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockBookings.map((b) => (
                  <tr key={b.id}>
                    <td style={{ fontWeight: 500 }}>{b.id}</td>
                    <td>{b.service}</td>
                    <td>
                      <span className={`badge ${
                        b.status === 'Confirmed' ? 'badge-primary' :
                        b.status === 'Pending' ? 'badge-warning' : 'badge-success'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td style={{ fontWeight: 600 }}>{'₹'}{b.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
