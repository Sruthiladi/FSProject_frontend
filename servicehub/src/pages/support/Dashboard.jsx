import { mockQueries } from '../../data/mockData'

export default function Dashboard() {
  const open = mockQueries.filter((q) => q.status === 'Open').length
  const inProgress = mockQueries.filter((q) => q.status === 'In Progress').length
  const resolved = mockQueries.filter((q) => q.status === 'Resolved').length
  const highPriority = mockQueries.filter((q) => q.priority === 'High' && q.status !== 'Resolved').length

  return (
    <div>
      <div className="page-header">
        <h1>Support Dashboard</h1>
        <p>Overview of customer support activity</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Open Tickets</div>
          <div className="stat-value">{open}</div>
          <div className="stat-change negative">Needs attention</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">In Progress</div>
          <div className="stat-value">{inProgress}</div>
          <div className="stat-change">Being handled</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Resolved</div>
          <div className="stat-value">{resolved}</div>
          <div className="stat-change positive">+5 this week</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">High Priority</div>
          <div className="stat-value">{highPriority}</div>
          <div className="stat-change negative">Urgent</div>
        </div>
      </div>

      <div className="card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>Recent Queries</h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {mockQueries.map((q) => (
                <tr key={q.id}>
                  <td style={{ fontWeight: 500 }}>{q.id}</td>
                  <td>{q.user}</td>
                  <td>{q.subject}</td>
                  <td>
                    <span className={`badge ${
                      q.priority === 'High' ? 'badge-danger' :
                      q.priority === 'Medium' ? 'badge-warning' : 'badge-success'
                    }`}>
                      {q.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      q.status === 'Open' ? 'badge-primary' :
                      q.status === 'In Progress' ? 'badge-warning' : 'badge-success'
                    }`}>
                      {q.status}
                    </span>
                  </td>
                  <td>{q.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
