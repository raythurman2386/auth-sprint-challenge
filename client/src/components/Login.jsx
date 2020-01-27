import React, { useState } from 'react'
import axios from 'axios'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      username,
      password,
    }

    axios
      .post('http://localhost:3300/api/auth/login', user)
      .then(res => localStorage.setItem('token', res.data.token))
      .then(props.history.push('/jokes'))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        placeholder='Username'
        onChange={e => setUsername(e.target.value)}
      />
      <input
        value={password}
        placeholder='Password'
        type='password'
        onChange={e => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
