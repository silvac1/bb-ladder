import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'
import AdminNavbar from '../../../components/admin-navbar'

class AdminPlayersIndex extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    api("api/v1/players.json", 'get')
      .then(players => this.setState({ players }))
  }

  delete = (id) => {
    const token = document.getElementById("authenticity-token").value
    api(`api/v1/admin/players/${id}`, 'delete', token, {})
      .then(players => this.setState({ players }))
  }

  render() {
    const { players } = this.state
    return <div>
      <AdminNavbar />
      <h1>Admins - Players - List</h1>
      <Link to={`/admin/players/new`}>Create Player</Link>
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
            players.map(player => <tr>
              <td>{ player.id }</td>
              <td>{ player.name }</td>
              <td>
                <Link to={`/admin/players/${player.id}/edit`}>Edit</Link>
                &nbsp;|&nbsp;
                <Link to={this.props.match.url} onClick={() => this.delete(player.id)}>Delete</Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  }
}

export default AdminPlayersIndex
