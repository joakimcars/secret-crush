import express from 'express'
import users from './users/user-store'

const app = express()

app.get('/users/:id', async (req, res) => {
  const user = await users.get(req.params.id)
  res.send(user)
})

app.put('/users/:id', async (req, res) => {
  const user = await users.put({ id: req.params.id })
  res.send(user)
})

export default app
