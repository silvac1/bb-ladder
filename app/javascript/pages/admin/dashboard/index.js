import React from 'react'
import { Link } from 'react-router-dom'

class AdminDashboard extends React.Component {
  render() {
    return <div>
      <h1>Admin Dashboard</h1>

      <ul>
        <li><Link to={`/admin/positions`}>Positions</Link></li>
        <li><Link to={`/admin/players`}>Players</Link></li>
      </ul>
    </div>
  }
}

export default AdminDashboard
