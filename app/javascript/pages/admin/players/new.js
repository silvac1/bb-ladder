import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'
import AdminNavbar from '../../../components/admin-navbar'


class AdminPlayersNew extends React.Component {
  state = {
    name: '',
    height: '',
    errors: {}
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, height } = this.state
    const token = document.getElementById("authenticity-token").value

    api("//localhost:3000/api/v1/admin/players", "post", token, {
      player: { name, height }
    }).then(json => {
      if(json.errors) {
        this.setState({
          errors: json.errors
        })
        return
      }

      this.props.history.push("/admin/players")
    })

  }

  render() {
    const { name, height, errors } = this.state
    return <div>
      <AdminNavbar />
      <h1>Create new player</h1>
      <form onSubmit={this.handleSubmit}>
        <TextInput
          attr="name"
          value={name}
          label="Name"
          errors={errors.name}
          handleChange={(e) => this.handleChange(e, 'name')}
        />

        <TextInput
          attr="height"
          value={height}
          label="Height"
          errors={errors.height}
          handleChange={(e) => this.handleChange(e, 'height')}
        />
        <div>
          <button onClick={this.handleSubmit}>Save player</button>
        </div>
      </form>
    </div>
  }
}

export default AdminPlayersNew
