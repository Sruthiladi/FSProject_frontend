import { useState } from 'react'

const initialServices = [
  { id: 1, name: 'Wiring', price: 600, duration: '2-3 hours', status: 'Active' },
  { id: 2, name: 'Panel Upgrade', price: 1200, duration: '4-5 hours', status: 'Active' },
  { id: 3, name: 'Lighting Installation', price: 450, duration: '1-2 hours', status: 'Active' },
  { id: 4, name: 'Smart Home Setup', price: 2500, duration: '5-6 hours', status: 'Inactive' },
]

export default function Services() {
  const [services, setServices] = useState(initialServices)
  const [showForm, setShowForm] = useState(false)
  const [newService, setNewService] = useState({ name: '', price: '', duration: '' })

  const handleAdd = (e) => {
    e.preventDefault()
    const service = {
      id: Date.now(),
      name: newService.name,
      price: Number(newService.price),
      duration: newService.duration,
      status: 'Active',
    }
    setServices([...services, service])
    setNewService({ name: '', price: '', duration: '' })
    setShowForm(false)
  }

  const toggleStatus = (id) => {
    setServices(services.map((s) =>
      s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s
    ))
  }

  const removeService = (id) => {
    setServices(services.filter((s) => s.id !== id))
  }

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>My Services</h1>
          <p>Manage the services you offer</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Service'}
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: 1, minWidth: '180px' }}>
              <label className="form-label">Service Name</label>
              <input
                className="form-input"
                placeholder="e.g. Drain Cleaning"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group" style={{ width: '140px' }}>
              <label className="form-label">Price (₹)</label>
              <input
                className="form-input"
                type="number"
                placeholder="500"
                value={newService.price}
                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                required
              />
            </div>
            <div className="form-group" style={{ width: '160px' }}>
              <label className="form-label">Duration</label>
              <input
                className="form-input"
                placeholder="e.g. 1-2 hours"
                value={newService.duration}
                onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
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
                <th>Service</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 500 }}>{s.name}</td>
                  <td>{'₹'}{s.price}</td>
                  <td>{s.duration}</td>
                  <td>
                    <span className={`badge ${s.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn btn-outline btn-sm" onClick={() => toggleStatus(s.id)}>
                        {s.status === 'Active' ? 'Deactivate' : 'Activate'}
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
