import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Users from '../users'

const Root = () => (
  <div>
    <Link to="/users">Users</Link>
  </div>
)

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Root} />
      <Route path="/users" component={Users} />
    </main>
  </div>
)

export default App
