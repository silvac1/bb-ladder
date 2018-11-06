import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'
import AdminNavbar from '../../../components/admin-navbar'

class AdminTeamsIndex extends React.Component {
  state = {
    teams: []
  }

  componentDidMount() {
    api("api/v1/teams.json", 'get')
      .then(teams => this.setState({ teams }))
  }

  delete = (id) => {
    const token = document.getElementById("authenticity-token").value
    api(`api/v1/admin/teams/${id}`, 'delete', token, {})
      .then(teams => this.setState({ teams }))
  }

  render() {
    const { teams } = this.state
    return <div>
      <AdminNavbar />
      <h1>Admins - Teams - List</h1>
      <Link to={`/admin/teams/new`}>Create Team</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            teams.map(team => <tr>
              <td>{ team.id }</td>
              <td>{ team.name }</td>
              <td>
                <Link to={`/admin/teams/${team.id}/edit`}>Edit</Link>
                &nbsp;|&nbsp;
                <Link to={this.props.match.url} onClick={() => this.delete(team.id)}>Delete</Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  }
}

export default AdminTeamsIndex
