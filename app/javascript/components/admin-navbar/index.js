import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return <ul className="admin-navbar">
    <li><Link to={`/admin`}>Dashboard</Link></li>
    <li><a href="/admins/sign_out">Sign out</a></li>
  </ul>
}