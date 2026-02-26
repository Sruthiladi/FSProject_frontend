import { useState } from 'react'

const initialRequests = [
  {
    id: 'RQ001',
    customer: 'Amit Gupta',
    service: 'Website Development',
    date: '2026-03-02',
    time: '10:00 AM',
    status: 'Pending',
  },
  {
    id: 'RQ002',
    customer: 'Sneha Roy',
    service: 'IT Support',
    date: '2026-03-04',
    time: '2:00 PM',
    status: 'Pending',
  },
  {
    id: 'RQ003',
    customer: 'Kavita Joshi',
    service: 'System Setup',
    date: '2026-02-28',
    time: '11:00 AM',
    status: 'Accepted',
  },
  {
    id: 'RQ004',
    customer: 'Rohan Das',
    service: 'Technical Consulting',
    date: '2026-02-25',
    time: '9:00 AM',
    status: 'Completed',
  },
]

export default function Requests() {
  const [requests, setRequests] = useState(initialRequests)
  const [filter, setFilter] = useState('All')

  const updateStatus = (id, status) => {
    setRequests(requests.map((r) => (r.id === id ? { ...r, status } : r)))
  }

  const filtered = filter === 'All' ? requests : requests.filter((r) => r.status === filter)

  return (
    <div>
      <div className="page-header">
        <h1>Booking Requests</h1>
        <p>Manage incoming booking requests from customers</p>
      </div>

      <div className="category-chips" style={{ marginBottom: '20px' }}>
        {['All', 'Pending', 'Accepted', 'Completed', 'Declined'].map((f) => (
          <button
            key={f}
            className={`chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '24px', color: 'var(--gray-500)' }}>
                    No requests found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id}>
                    <td style={{ fontWeight: 500 }}>{r.id}</td>
                    <td>{r.customer}</td>
                    <td>{r.service}</td>
                    <td>{r.date}</td>
                    <td>{r.time}</td>
                    <td>
                      <span className={`badge ${
                        r.status === 'Pending' ? 'badge-warning' :
                        r.status === 'Accepted' ? 'badge-primary' :
                        r.status === 'Completed' ? 'badge-success' : 'badge-danger'
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td>
                      {r.status === 'Pending' ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button className="btn btn-primary btn-sm" onClick={() => updateStatus(r.id, 'Accepted')}>
                            Accept
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={() => updateStatus(r.id, 'Declined')}>
                            Decline
                          </button>
                        </div>
                      ) : r.status === 'Accepted' ? (
                        <button className="btn btn-outline btn-sm" onClick={() => updateStatus(r.id, 'Completed')}>
                          Mark Complete
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.8125rem', color: 'var(--gray-400)' }}>No action</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}