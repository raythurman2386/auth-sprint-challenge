/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import axios from 'axios'

const Signup = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newUser = {
      username,
      password,
    }

    axios
      .post('http://localhost:3300/api/auth/register', newUser)
      .then(res => props.history.push('/login'))
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
      <button type='submit'>Sign up</button>
    </form>
  )
}

export default Signup
