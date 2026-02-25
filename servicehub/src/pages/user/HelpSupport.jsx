import { useState } from 'react'

const faqs = [
  {
    question: 'How do I book a service?',
    answer: 'Browse available professionals, select a service, pick a date and time, choose your payment method, and confirm the booking.',
  },
  {
    question: 'Can I cancel a booking?',
    answer: 'Yes, you can cancel a booking up to 2 hours before the scheduled time. Go to My Bookings and select the booking you wish to cancel.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept Card payments, UPI transfers, and Cash on delivery.',
  },
  {
    question: 'How do I contact a professional?',
    answer: 'After booking, you will receive the professional\'s contact details via email and in-app notification.',
  },
  {
    question: 'What if the professional doesn\'t show up?',
    answer: 'Contact our support team immediately. We will arrange an alternative professional or provide a full refund.',
  },
]

export default function HelpSupport() {
  const [openIndex, setOpenIndex] = useState(null)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setSubject('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      <div className="page-header">
        <h1>Help & Support</h1>
        <p>Find answers or reach out to our support team</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--gray-900)',
                    textAlign: 'left',
                  }}
                >
                  {faq.question}
                  <span style={{ fontSize: '1.25rem', color: 'var(--gray-400)', transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 18px 14px', fontSize: '0.8125rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
            Contact Support
          </h2>
          {submitted && (
            <div style={{ padding: '12px 16px', background: 'var(--success-light)', color: 'var(--success)', borderRadius: 'var(--radius)', marginBottom: '16px', fontSize: '0.875rem', fontWeight: 500 }}>
              Your message has been sent! We will get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="Brief description of your issue"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your issue in detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ minHeight: '120px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
