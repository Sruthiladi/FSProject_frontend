import { mockEarnings } from '../../data/mockData'

const transactions = [
  {
    id: 'TXN001',
    service: 'Website Development',
    customer: 'Amit Gupta',
    date: '2026-02-22',
    amount: 800,
    status: 'Paid',
  },
  {
    id: 'TXN002',
    service: 'IT Support',
    customer: 'Sneha Roy',
    date: '2026-02-18',
    amount: 500,
    status: 'Paid',
  },
  {
    id: 'TXN003',
    service: 'System Setup',
    customer: 'Kavita Joshi',
    date: '2026-02-15',
    amount: 700,
    status: 'Paid',
  },
  {
    id: 'TXN004',
    service: 'Technical Consulting',
    customer: 'Rohan Das',
    date: '2026-02-10',
    amount: 1200,
    status: 'Pending',
  },
]

export default function Earnings() {
  const totalEarnings = mockEarnings.reduce((sum, e) => sum + e.amount, 0)
  const thisMonth = mockEarnings[mockEarnings.length - 1].amount
  const lastMonth = mockEarnings[mockEarnings.length - 2].amount
  const maxEarning = Math.max(...mockEarnings.map((e) => e.amount))

  return (
    <div>
      <div className="page-header">
        <h1>Earnings</h1>
        <p>Track your income and payment history</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Earnings</div>
          <div className="stat-value">₹{totalEarnings.toLocaleString()}</div>
          <div className="stat-change positive">Last 6 months</div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">This Month</div>
          <div className="stat-value">₹{thisMonth.toLocaleString()}</div>
          <div className={`stat-change ${thisMonth >= lastMonth ? 'positive' : 'negative'}`}>
            {thisMonth >= lastMonth ? '+' : ''}
            {(((thisMonth - lastMonth) / lastMonth) * 100).toFixed(0)}% vs last month
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Avg. per Month</div>
          <div className="stat-value">
            ₹{Math.round(totalEarnings / mockEarnings.length).toLocaleString()}
          </div>
          <div className="stat-change">6-month average</div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Pending Payouts</div>
          <div className="stat-value">₹2,500</div>
          <div className="stat-change">1 transaction</div>
        </div>
      </div>

      <div className="card chart-container">
        <h3>Monthly Earnings</h3>
        <div className="chart-bars">
          {mockEarnings.map((item) => (
            <div key={item.month} className="chart-bar-group">
              <span className="chart-bar-value">₹{(item.amount / 1000).toFixed(1)}k</span>
              <div
                className="chart-bar"
                style={{ height: `${(item.amount / maxEarning) * 160}px` }}
              />
              <span className="chart-bar-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>
          Transaction History
        </h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Service</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 500 }}>{t.id}</td>
                  <td>{t.service}</td>
                  <td>{t.customer}</td>
                  <td>{t.date}</td>
                  <td style={{ fontWeight: 600 }}>₹{t.amount}</td>
                  <td>
                    <span className={`badge ${t.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>
                      {t.status}
                    </span>
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