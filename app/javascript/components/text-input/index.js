import React from 'react'

export default function TextInput({ handleChange, value, attr, label, errors }) {
  return <div>
    <label htmlFor={attr}>{ label }:</label>
    <input
      type="text"
      value={value}
      onChange={handleChange}
      style={
        errors
          ? { border: '1px solid red' }
          : {}
      }
    />
    {
      errors
        ? <div className="error">{ label } { errors.join(", ")}</div>
        : null
    }
  </div>
}
