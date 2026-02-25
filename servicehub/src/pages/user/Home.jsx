import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { professionals, serviceCategories } from '../../data/mockData'

export default function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/user/browse')
  }

  const featured = professionals.slice(0, 3)

  return (
    <div>
      <section className="hero">
        <h1>Find Trusted Professionals Near You</h1>
        <p>
          Book verified service professionals for plumbing, electrical, cleaning, and more — all in one place.
        </p>
        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn">Search</button>
        </form>
      </section>

      <div className="page-header">
        <h1>Popular Categories</h1>
        <p>Browse by service type</p>
      </div>
      <div className="category-chips" style={{ marginBottom: '32px' }}>
        {serviceCategories.map((cat) => (
          <button key={cat} className="chip" onClick={() => navigate('/user/browse')}>
            {cat}
          </button>
        ))}
      </div>

      <div className="page-header">
        <h1>Top Rated Professionals</h1>
        <p>Highest rated in your area</p>
      </div>
      <div className="pro-grid">
        {featured.map((pro) => (
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
    </div>
  )
}
