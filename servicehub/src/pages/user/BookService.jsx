import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { professionals } from '../../data/mockData'

export default function BookService() {
  const { id } = useParams()
  const navigate = useNavigate()
  const professional = professionals.find((p) => p.id === Number(id))

  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [payment, setPayment] = useState('Card')
  const [success, setSuccess] = useState(false)

  if (!professional) {
    return (
      <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
        <p>Professional not found.</p>
        <button className="btn btn-primary" onClick={() => navigate('/user/browse')} style={{ marginTop: '16px' }}>
          Browse Services
        </button>
      </div>
    )
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    const booking = {
      id: `BK${Date.now()}`,
      professionalId: professional.id,
      professionalName: professional.name,
      service,
      date,
      time,
      notes,
      payment,
      amount: professional.price,
      status: 'Confirmed',
    }

    const existing = JSON.parse(localStorage.getItem('bookings') || '[]')
    existing.push(booking)
    localStorage.setItem('bookings', JSON.stringify(existing))
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="card" style={{ padding: '48px', textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>&#10003;</div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Booking Confirmed!</h2>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', marginBottom: '24px' }}>
          Your appointment with {professional.name} has been booked for {date} at {time}.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={() => navigate('/user/bookings')}>
            View Bookings
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/user/browse')}>
            Browse More
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1>Book a Service</h1>
        <p>Fill in the details below to confirm your booking</p>
      </div>

      <div className="book-layout">
        <form className="card book-form" onSubmit={handleConfirm}>
          <h2>Booking Details</h2>
          <div className="form-grid">
            <div className="form-group form-full">
              <label className="form-label">Select Service</label>
              <select
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Choose a service</option>
                {professional.services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Date</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Time</label>
              <select
                className="form-select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
            <div className="form-group form-full">
              <label className="form-label">Additional Notes</label>
              <textarea
                className="form-textarea"
                placeholder="Any special instructions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div className="form-group form-full">
              <label className="form-label">Payment Method</label>
              <div className="payment-methods">
                {['Card', 'UPI', 'Cash'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    className={`payment-option ${payment === method ? 'active' : ''}`}
                    onClick={() => setPayment(method)}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '20px' }}>
            Confirm Booking
          </button>
        </form>

        <div className="card book-summary">
          <div className="summary-pro">
            <img src={professional.image} alt={professional.name} />
            <div>
              <h3>{professional.name}</h3>
              <p>{professional.category}</p>
              <div className="stars" style={{ fontSize: '0.8125rem' }}>
                {'★'.repeat(Math.round(professional.rating))} {professional.rating}
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px', color: 'var(--gray-900)' }}>
            Booking Summary
          </h3>
          <div className="summary-row">
            <span>Service</span>
            <span>{service || '—'}</span>
          </div>
          <div className="summary-row">
            <span>Date</span>
            <span>{date || '—'}</span>
          </div>
          <div className="summary-row">
            <span>Time</span>
            <span>{time || '—'}</span>
          </div>
          <div className="summary-row">
            <span>Payment</span>
            <span>{payment}</span>
          </div>
          <div className="summary-row">
            <span>Service Fee</span>
            <span>{'₹'}{professional.price}</span>
          </div>
          <div className="summary-row">
            <span>Platform Fee</span>
            <span>{'₹'}49</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{'₹'}{professional.price + 49}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
