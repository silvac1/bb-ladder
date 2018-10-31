import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AdminDashboard from './pages/admin/dashboard/index'

import AdminPositionsIndex from './pages/admin/positions/index'
import AdminPositionsNew from './pages/admin/positions/new'
import AdminPositionsEdit from './pages/admin/positions/edit'

import AdminPlayersIndex from './pages/admin/players/index'
import AdminPlayersNew from './pages/admin/players/new'
import AdminPlayersEdit from './pages/admin/players/edit'

class Router extends React.Component {
  componentDidMount() {
    console.log("App component is mounted!")
  }

  render() {
    return <Switch>
      <Route exact path={`/admin/`} component={AdminDashboard} />

      <Route exact path={`/admin/positions`} component={AdminPositionsIndex} />
      <Route exact path={`/admin/positions/new`} component={AdminPositionsNew} />
      <Route exact path={`/admin/positions/:id/edit`} component={AdminPositionsEdit} />

      <Route exact path={`/admin/players`} component={AdminPlayersIndex} />
      <Route exact path={`/admin/players/new`} component={AdminPlayersNew} />
      <Route exact path={`/admin/players/:id/edit`} component={AdminPlayersEdit} />
    </Switch>
  }
}


export default Router
