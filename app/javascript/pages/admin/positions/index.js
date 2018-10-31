import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

class AdminPositionsIndex extends React.Component {
  state = {
    positions: []
  }

  componentDidMount() {
    api("//localhost:3000/api/v1/positions.json", 'get')
      .then(positions => this.setState({ positions }))
  }

  delete = (id) => {
    const token = document.getElementById("authenticity-token").value
    api(`//localhost:3000/api/v1/admin/positions/${id}`, 'delete', token, {})
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
            <th />
          </tr>
        </thead>
        <tbody>
          {
            positions.map(position => <tr>
              <td>{ position.id }</td>
              <td>{ position.name }</td>
              <td>
                <Link to={`/admin/positions/${position.id}/edit`}>Edit</Link>
                &nbsp;|&nbsp;
                <Link to={this.props.match.url} onClick={() => this.delete(position.id)}>Delete</Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  }
}

export default AdminPositionsIndex
