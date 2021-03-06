import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'
import AdminNavbar from '../../../components/admin-navbar'

class AdminPlayersEdit extends React.Component {
  state = {
    name: '',
    height: '',
    errors: {}
  }

  componentDidMount() {
    api(`api/v1/players/${this.props.match.params.id}`, 'get')
      .then(json => this.setState({
        name: json.name,
        height: json.height
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

    fetch(`api/v1/admin/players/${this.props.match.params.id}`, {
      method: 'PUT',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify({
        player: { name, height }
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

        this.props.history.push("/admin/players")
      })
  }

  render() {
    const { name, height, errors } = this.state
    return <div>
      <AdminNavbar />
      <h1>Edit player ({this.props.match.params.id})</h1>
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
          &nbsp;or&nbsp;
          <Link to={`/admin/players`}>Cancel</Link>
        </div>
      </form>
    </div>
  }
}

export default AdminPlayersEdit
