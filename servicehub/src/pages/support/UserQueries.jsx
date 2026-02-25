import { useState } from 'react'
import { mockQueries } from '../../data/mockData'

export default function UserQueries() {
  const [queries, setQueries] = useState(mockQueries.filter((q) => q.status !== 'Resolved'))
  const [filter, setFilter] = useState('All')

  const updateStatus = (id, status) => {
    setQueries(queries.map((q) => (q.id === id ? { ...q, status } : q)))
  }

  const filtered = filter === 'All' ? queries : queries.filter((q) => q.status === filter)

  return (
    <div>
      <div className="page-header">
        <h1>User Queries</h1>
        <p>Handle open and in-progress support tickets</p>
      </div>

      <div className="category-chips" style={{ marginBottom: '20px' }}>
        {['All', 'Open', 'In Progress'].map((f) => (
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
                <th>ID</th>
                <th>User</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '24px', color: 'var(--gray-500)' }}>
                    No queries found.
                  </td>
                </tr>
              ) : (
                filtered.map((q) => (
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
                        q.status === 'Open' ? 'badge-primary' : 'badge-warning'
                      }`}>
                        {q.status}
                      </span>
                    </td>
                    <td>{q.date}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {q.status === 'Open' && (
                          <button className="btn btn-primary btn-sm" onClick={() => updateStatus(q.id, 'In Progress')}>
                            Start
                          </button>
                        )}
                        {q.status === 'In Progress' && (
                          <button className="btn btn-primary btn-sm" onClick={() => updateStatus(q.id, 'Resolved')}>
                            Resolve
                          </button>
                        )}
                      </div>
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
