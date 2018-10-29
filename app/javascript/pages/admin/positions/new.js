import React from 'react'
import { Link } from 'react-router-dom'
import fetch from '../../../fetch'

class AdminPositionsNew extends React.Component {
  state = {
    name: '',
    errors: {}
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

    fetch("//localhost:3000/api/v1/admin/positions", {
      method: 'POST',
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
      <h1>Create new position</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => this.handleChange(e, 'name')}
            style={
              errors && errors.name
                ? { border: '1px solid red' }
                : {}
            }
          />
          {
            errors && errors.name
              ? <div className="error">Name { errors.name.join(", ")}</div>
              : null
          }
        </div>

        <div>
          <button onClick={this.handleSubmit}>Save position</button>
        </div>
      </form>
    </div>
  }
}

export default AdminPositionsNew
