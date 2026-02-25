import { mockBookings } from '../../data/mockData'

export default function MyBookings() {
  const localBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
  const allBookings = [...mockBookings, ...localBookings]

  const getStatusBadge = (status) => {
    const map = {
      Confirmed: 'badge-primary',
      Pending: 'badge-warning',
      Completed: 'badge-success',
      Cancelled: 'badge-danger',
    }
    return map[status] || 'badge-primary'
  }

  return (
    <div>
      <div className="page-header">
        <h1>My Bookings</h1>
        <p>View and manage your service bookings</p>
      </div>

      {allBookings.length === 0 ? (
        <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-500)' }}>No bookings yet. Browse services to make your first booking.</p>
        </div>
      ) : (
        <div className="bookings-list">
          {allBookings.map((booking) => (
            <div key={booking.id} className="card booking-item">
              <div className="booking-info">
                <h4>{booking.service}</h4>
                <p>
                  {booking.professionalName} &middot; {booking.date} at {booking.time}
                </p>
              </div>
              <div className="booking-right">
                <span className={`badge ${getStatusBadge(booking.status)}`}>
                  {booking.status}
                </span>
                <span className="booking-amount">{'₹'}{booking.amount}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
