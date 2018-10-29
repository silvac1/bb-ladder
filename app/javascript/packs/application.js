import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Router from '../router'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-root')

  if (reactElement) {
    render(<BrowserRouter>
      <Router />
    </BrowserRouter>, reactElement)
  }
})
