import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { professionals, serviceCategories } from '../../data/mockData'

export default function BrowseServices() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = professionals.filter((pro) => {
    const matchCategory = activeCategory === 'All' || pro.category === activeCategory
    const matchSearch =
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div>
      <div className="page-header">
        <h1>Browse Services</h1>
        <p>Find the right professional for your needs</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          className="form-input"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '400px', width: '100%' }}
        />
      </div>

      <div className="category-chips">
        <button
          className={`chip ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {serviceCategories.map((cat) => (
          <button
            key={cat}
            className={`chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-500)' }}>No professionals found matching your criteria.</p>
        </div>
      ) : (
        <div className="pro-grid">
          {filtered.map((pro) => (
            <div key={pro.id} className="card pro-card">
              <img src={pro.image} alt={pro.name} className="pro-avatar" />
              <div style={{ flex: 1 }}>
                <div className="pro-info">
                  <h3>{pro.name}</h3>
                  <span className="pro-category">{pro.category}</span>
                  <div className="pro-meta">
                    <span className="stars">{'★'.repeat(Math.round(pro.rating))}</span>
                    <span>{pro.rating}</span>
                    <span>({pro.reviews} reviews)</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', margin: '6px 0' }}>
                  {pro.experience} exp &middot; {pro.location}
                </p>
                <div className="pro-footer">
                  <div className="pro-price">
                    {'₹'}{pro.price} <span>/ visit</span>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/user/book/${pro.id}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
