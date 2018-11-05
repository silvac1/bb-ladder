import React from 'react'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'
import AdminNavbar from '../../../components/admin-navbar'

class AdminTeamsNew extends React.Component {
  state = {
    name: '',
    location: '',
    errors: {},
    teamPlayers: [],
    availablePlayers: []
  }

  componentDidMount() {
    api("//localhost:3000/api/v1/available_players", "get")
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
    const { name, location, teamPlayers } = this.state
    const token = document.getElementById("authenticity-token").value

    api("//localhost:3000/api/v1/admin/teams", "post", token, {
      team: { name, location, player_ids: teamPlayers.map(player => player.id) }
    }).then(json => {
      if(json.errors) {
        this.setState({
          errors: json.errors
        })
        return
      }

      this.props.history.push("/admin/teams")
    })

  }

  removePlayer = (id) => this.setState(prevState => ({
    teamPlayers: prevState.teamPlayers.filter(player => player.id !== id),
    availablePlayers: [
      ...prevState.availablePlayers,
      ...prevState.teamPlayers.filter(player => player.id === id)
    ]
  }))


  addPlayer = (id) => this.setState(prevState => ({
    teamPlayers: [
      ...prevState.teamPlayers,
      ...prevState.availablePlayers.filter(player => player.id === id)
    ],
    availablePlayers: prevState.availablePlayers.filter(player => player.id !== id)
  }))

  render() {
    const { name, location, teamPlayers, availablePlayers, errors } = this.state
    return <div>
      <AdminNavbar />
      <h1>Create new team</h1>
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
        </div>
      </form>
    </div>
  }
}

export default AdminTeamsNew
