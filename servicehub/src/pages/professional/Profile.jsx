import { useState } from 'react'

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    category: 'Technology',
    experience: '12 years',
    location: 'Delhi, DL',
    bio: 'Technology expert offering IT support, system setup, and web development services for individuals and businesses.',
  })

  const [editing, setEditing] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value })
  }

  const handleSave = () => {
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div
        className="page-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1>My Profile</h1>
          <p>Manage your professional profile</p>
        </div>

        {!editing ? (
          <button className="btn btn-primary" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>

      {saved && (
        <div
          style={{
            padding: '12px 16px',
            background: 'var(--success-light)',
            color: 'var(--success)',
            borderRadius: 'var(--radius)',
            marginBottom: '16px',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          Profile updated successfully!
        </div>
      )}

      <div className="card" style={{ padding: '28px' }}>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            marginBottom: '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--gray-200)',
          }}
        >
          <img
            src="https://media.istockphoto.com/id/589544922/photo/doing-business-with-his-brain.jpg"
            alt="Profile"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              {profile.name}
            </h2>
            <p
              style={{
                color: 'var(--primary)',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              {profile.category}
            </p>
            <p
              style={{
                color: 'var(--gray-500)',
                fontSize: '0.8125rem',
              }}
            >
              {profile.experience} experience &middot; {profile.location}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          <div className="form-group">
            <label className="form-label">Full Name</label>
            {editing ? (
              <input
                className="form-input"
                value={profile.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            ) : (
              <p className="form-value">{profile.name}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            {editing ? (
              <input
                className="form-input"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            ) : (
              <p className="form-value">{profile.email}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            {editing ? (
              <input
                className="form-input"
                value={profile.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            ) : (
              <p className="form-value">{profile.phone}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            {editing ? (
              <input
                className="form-input"
                value={profile.location}
                onChange={(e) => handleChange('location', e.target.value)}
              />
            ) : (
              <p className="form-value">{profile.location}</p>
            )}
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Bio</label>
            {editing ? (
              <textarea
                className="form-textarea"
                value={profile.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
              />
            ) : (
              <p className="form-value">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}