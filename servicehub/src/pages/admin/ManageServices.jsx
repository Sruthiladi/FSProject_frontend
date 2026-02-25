import { useState } from 'react'
import { serviceCategories } from '../../data/mockData'

const initialServiceData = serviceCategories.map((cat, i) => ({
  id: i + 1,
  name: cat,
  professionals: Math.floor(Math.random() * 20) + 5,
  bookings: Math.floor(Math.random() * 50) + 10,
  status: 'Active',
}))

export default function ManageServices() {
  const [services, setServices] = useState(initialServiceData)
  const [showForm, setShowForm] = useState(false)
  const [newName, setNewName] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    setServices([
      ...services,
      { id: Date.now(), name: newName, professionals: 0, bookings: 0, status: 'Active' },
    ])
    setNewName('')
    setShowForm(false)
  }

  const toggleStatus = (id) => {
    setServices(services.map((s) =>
      s.id === id ? { ...s, status: s.status === 'Active' ? 'Disabled' : 'Active' } : s
    ))
  }

  const removeService = (id) => {
    setServices(services.filter((s) => s.id !== id))
  }

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Manage Services</h1>
          <p>Configure available service categories</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Category'}
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Category Name</label>
              <input
                className="form-input"
                placeholder="e.g. Gardening"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      )}

      <div className="card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Professionals</th>
                <th>Bookings</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 500 }}>{s.name}</td>
                  <td>{s.professionals}</td>
                  <td>{s.bookings}</td>
                  <td>
                    <span className={`badge ${s.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn btn-outline btn-sm" onClick={() => toggleStatus(s.id)}>
                        {s.status === 'Active' ? 'Disable' : 'Enable'}
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => removeService(s.id)}>
                        Remove
                      </button>
                    </div>
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
