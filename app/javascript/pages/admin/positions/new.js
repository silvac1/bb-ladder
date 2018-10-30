import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../modules/api'

import TextInput from '../../../components/text-input'

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
    const token = document.getElementById("authenticity-token").value

    api("//localhost:3000/api/v1/admin/positions", "post", token, {
      position: { name }
    }).then(json => {
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
        <TextInput
          attr="name"
          value={name}
          label="Name"
          errors={errors.name}
          handleChange={(e) => this.handleChange(e, 'name')}
        />
        <div>
          <button onClick={this.handleSubmit}>Save position</button>
        </div>
      </form>
    </div>
  }
}

export default AdminPositionsNew
