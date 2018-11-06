import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  const liStyles = { display: 'inline', marginRight: 4 }
  return <ul style={{ padding: 0, listStyle: 'none', position: 'absolute', right: 0 }}>
    <li style={liStyles}><Link to={`/admin`}>Dashboard</Link></li>
    <li style={liStyles}><a href="/admins/sign_out">Sign out</a></li>
  </ul>
}
