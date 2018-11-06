import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'
import AdminNavbar from '../../../components/admin-navbar'

class AdminPositionsEdit extends React.Component {
  state = {
    name: '',
    errors: {}
  }

  componentDidMount() {
    api(`//localhost:3000/api/v1/positions/${this.props.match.params.id}`, 'get')
      .then(json => this.setState({
        name: json.name
      }))
  }

  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name } = this.state
    const headers = new Headers()
    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('X-CSRF-TOKEN', document.getElementById("authenticity-token").value)
    headers.append('Content-Type', 'application/json')

    fetch(`//localhost:3000/api/v1/admin/positions/${this.props.match.params.id}`, {
      method: 'PUT',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify({
        position: { name }
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

        this.props.history.push("/admin/positions")
      })
  }

  render() {
    const { name, errors } = this.state
    return <div>
      <AdminNavbar />
      <h1>Edit position ({this.props.match.params.id})</h1>
      <form onSubmit={this.handleSubmit}>

        <TextInput
          attr="name"
          value={name}
          label="Name"
          errors={errors.name}
          handleChange={(e) => this.handleChange(e, 'name')}
        />
        <div>
          <button onClick={this.handleSubmit}>Save position</button>
          &nbsp;or&nbsp;
          <Link to={`/admin/positions`}>Cancel</Link>
        </div>
      </form>
    </div>
  }
}

export default AdminPositionsEdit
