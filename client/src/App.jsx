import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Jokes from './components/Jokes'

const App = () => (
  <div>
    <nav>
      <Link to='/'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </nav>
    <Switch>
      <Route exact path='/' component={Signup} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/jokes' component={Jokes} />
    </Switch>
  </div>
)

export default App
