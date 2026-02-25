const resolvedIssues = [
  { id: 'Q004', user: 'Kavita Joshi', subject: 'Unable to make payment', priority: 'Low', date: '2026-02-10', resolvedDate: '2026-02-11', resolvedBy: 'Support Agent 1' },
  { id: 'Q005', user: 'Rahul Mehta', subject: 'Wrong professional assigned', priority: 'High', date: '2026-02-05', resolvedDate: '2026-02-06', resolvedBy: 'Support Agent 2' },
  { id: 'Q006', user: 'Deepa Nair', subject: 'Duplicate booking charge', priority: 'Medium', date: '2026-01-28', resolvedDate: '2026-01-30', resolvedBy: 'Support Agent 1' },
  { id: 'Q007', user: 'Suresh Iyer', subject: 'Profile update not saving', priority: 'Low', date: '2026-01-20', resolvedDate: '2026-01-20', resolvedBy: 'Support Agent 3' },
  { id: 'Q008', user: 'Meera Shah', subject: 'Booking cancellation issue', priority: 'Medium', date: '2026-01-15', resolvedDate: '2026-01-17', resolvedBy: 'Support Agent 2' },
]

export default function ResolvedIssues() {
  return (
    <div>
      <div className="page-header">
        <h1>Resolved Issues</h1>
        <p>Archive of resolved support tickets</p>
      </div>

      <div className="stats-grid" style={{ marginBottom: '24px' }}>
        <div className="card stat-card">
          <div className="stat-label">Total Resolved</div>
          <div className="stat-value">{resolvedIssues.length}</div>
          <div className="stat-change positive">All time</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Avg. Resolution Time</div>
          <div className="stat-value">1.4 days</div>
          <div className="stat-change positive">-0.3 days vs last month</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Satisfaction Rate</div>
          <div className="stat-value">94%</div>
          <div className="stat-change positive">+2% this month</div>
        </div>
      </div>

      <div className="card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Reported</th>
                <th>Resolved</th>
                <th>Resolved By</th>
              </tr>
            </thead>
            <tbody>
              {resolvedIssues.map((issue) => (
                <tr key={issue.id}>
                  <td style={{ fontWeight: 500 }}>{issue.id}</td>
                  <td>{issue.user}</td>
                  <td>{issue.subject}</td>
                  <td>
                    <span className={`badge ${
                      issue.priority === 'High' ? 'badge-danger' :
                      issue.priority === 'Medium' ? 'badge-warning' : 'badge-success'
                    }`}>
                      {issue.priority}
                    </span>
                  </td>
                  <td>{issue.date}</td>
                  <td>{issue.resolvedDate}</td>
                  <td>{issue.resolvedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
