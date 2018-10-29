import React from 'react'
import { Link } from 'react-router-dom'
import fetch from '../../../fetch'

class AdminPositionsIndex extends React.Component {
  state = {
    positions: []
  }

  componentDidMount() {
    fetch("//localhost:3000/api/v1/positions.json")
      .then(response => response.json())
      .then(positions => this.setState({ positions }))
  }

  render() {
    const { positions } = this.state
    return <div>

      <h1>Admins - Positions - List</h1>
      <Link to={`/admin/positions/new`}>Create position</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {
            positions.map(position => <tr>
              <td>{ position.id }</td>
              <td>{ position.name }</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  }
}

export default AdminPositionsIndex
