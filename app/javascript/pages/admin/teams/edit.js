import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'
import AdminNavbar from '../../../components/admin-navbar'

class AdminTeamsEdit extends React.Component {
  state = {
    name: '',
    location: '',
    availablePlayers: [],
    teamPlayers: [],
    errors: {}
  }

  componentDidMount() {
    api(`api/v1/teams/${this.props.match.params.id}`, 'get')
      .then(json => this.setState({
        name: json.name,
        location: json.location,
        teamPlayers: json.players
      }))

    api("api/v1/available_players", "get")
      .then(availablePlayers => this.setState({
        availablePlayers
      }))
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, height } = this.state
    const headers = new Headers()
    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('X-CSRF-TOKEN', document.getElementById("authenticity-token").value)
    headers.append('Content-Type', 'application/json')

    fetch(`api/v1/admin/teams/${this.props.match.params.id}`, {
      method: 'PUT',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify({
        team: { name }
      })
    })
      .then(response => response.json())
      .then(json => {
        if(json.errors) {
          this.setState({
            errors: json.errors
          })
          return
        }

        this.props.history.push("/admin/teams")
      })
  }

  render() {
    const { name, location, teamPlayers, availablePlayers, errors } = this.state
    return <div>
      <AdminNavbar />
      <h1>Edit team ({this.props.match.params.id})</h1>
      <form onSubmit={this.handleSubmit}>

        <TextInput
          attr="name"
          value={name}
          label="Name"
          errors={errors.name}
          handleChange={(e) => this.handleChange(e, 'name')}
        />
        <TextInput
          attr="location"
          value={location}
          label="Location"
          errors={errors.name}
          handleChange={(e) => this.handleChange(e, 'location')}
        />

        <div>
          <h2>Team players</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Height</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                teamPlayers.map(player => <tr>
                  <td>{ player.id }</td>
                  <td>{ player.name }</td>
                  <td>{ player.position }</td>
                  <td>{ player.height }</td>
                  <td>
                    <button onClick={() => this.removePlayer(player.id)}>
                      Remove
                    </button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
        <div>
          <h2>Available players</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Height</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                availablePlayers.map(player => <tr>
                  <td>{ player.id }</td>
                  <td>{ player.name }</td>
                  <td>{ player.position }</td>
                  <td>{ player.height }</td>
                  <td>
                    <button onClick={() => this.addPlayer(player.id)}>
                      Add
                    </button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>


        <div>
          <button onClick={this.handleSubmit}>Save team</button>
          &nbsp;or&nbsp;
          <Link to={`/admin/teams`}>Cancel</Link>
        </div>
      </form>
    </div>
  }
}

export default AdminTeamsEdit
