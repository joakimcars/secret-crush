import express from 'express'
import users from './users/user-store'

const app = express()

app.get('/api/users/:id', async (req, res) => {
  const user = await users.get(req.params.id)
  if (!user) {
    return res.sendStatus(404)
  }
  res.status(200).send(user)
})

app.put('/api/users/:id', async (req, res) => {
  const user = await users.put({ id: req.params.id })
  res.send(user)
})

export default app
