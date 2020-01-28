import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    axiosWithAuth()
      .get('http://localhost:3300/api/jokes')
      .then(res => setJokes(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Jokes</h1>
      {jokes && jokes.map(joke => <p>{joke.joke}</p>)}
    </div>
  )
}

export default Jokes

function axiosWithAuth() {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
  })
}
