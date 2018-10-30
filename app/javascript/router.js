import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AdminPositionsIndex from './pages/admin/positions/index'
import AdminPositionsNew from './pages/admin/positions/new'
import AdminPositionsEdit from './pages/admin/positions/edit'

class Router extends React.Component {
  componentDidMount() {
    console.log("App component is mounted!")
  }

  render() {
    return <Switch>
      <Route exact path={`/admin/positions`} component={AdminPositionsIndex} />
      <Route exact path={`/admin/positions/new`} component={AdminPositionsNew} />
      <Route exact path={`/admin/positions/:id/edit`} component={AdminPositionsEdit} />
    </Switch>
  }
}


export default Router
