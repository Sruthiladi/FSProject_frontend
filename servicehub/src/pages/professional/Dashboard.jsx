import { mockBookings, mockEarnings } from '../../data/mockData'

export default function Dashboard() {
  const totalEarnings = mockEarnings.reduce((sum, e) => sum + e.amount, 0)
  const maxEarning = Math.max(...mockEarnings.map((e) => e.amount))

  return (
    <div>
      <div className="page-header">
        <h1>Professional Dashboard</h1>
        <p>Overview of your business performance</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Bookings</div>
          <div className="stat-value">{mockBookings.length}</div>
          <div className="stat-change positive">+12% this month</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Pending Requests</div>
          <div className="stat-value">{mockBookings.filter((b) => b.status === 'Pending').length}</div>
          <div className="stat-change">Needs attention</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Completed Jobs</div>
          <div className="stat-value">{mockBookings.filter((b) => b.status === 'Completed').length}</div>
          <div className="stat-change positive">+8% this month</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Total Earnings</div>
          <div className="stat-value">{'₹'}{totalEarnings.toLocaleString()}</div>
          <div className="stat-change positive">+15% this month</div>
        </div>
      </div>

      <div className="card chart-container">
        <h3>Earnings Overview (Last 6 Months)</h3>
        <div className="chart-bars">
          {mockEarnings.map((item) => (
            <div key={item.month} className="chart-bar-group">
              <span className="chart-bar-value">{'₹'}{(item.amount / 1000).toFixed(1)}k</span>
              <div
                className="chart-bar"
                style={{ height: `${(item.amount / maxEarning) * 160}px` }}
              />
              <span className="chart-bar-label">{item.month}</span>
            </div>
          ))}
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
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((b) => (
                <tr key={b.id}>
                  <td style={{ fontWeight: 500 }}>{b.id}</td>
                  <td>{b.service}</td>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>
                    <span className={`badge ${b.status === 'Confirmed' ? 'badge-primary' : b.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
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
  )
}
