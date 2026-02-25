import { useState } from 'react'
import { professionals as initialPros } from '../../data/mockData'

export default function ManageProfessionals() {
  const [pros, setPros] = useState(
    initialPros.map((p) => ({ ...p, status: 'Active' }))
  )
  const [search, setSearch] = useState('')

  const toggleStatus = (id) => {
    setPros(pros.map((p) =>
      p.id === id ? { ...p, status: p.status === 'Active' ? 'Suspended' : 'Active' } : p
    ))
  }

  const filtered = pros.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="page-header">
        <h1>Manage Professionals</h1>
        <p>Review and manage service professionals</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          className="form-input"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: '360px', width: '100%' }}
        />
      </div>

      <div className="card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Professional</th>
                <th>Category</th>
                <th>Location</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                    </div>
                  </td>
                  <td>{p.category}</td>
                  <td>{p.location}</td>
                  <td>
                    <span className="stars">{'★'}</span> {p.rating}
                  </td>
                  <td>{p.reviews}</td>
                  <td>
                    <span className={`badge ${p.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-sm" onClick={() => toggleStatus(p.id)}>
                      {p.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
