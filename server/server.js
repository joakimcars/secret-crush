import express from 'express'
import users from './users/user-store'

const app = express()

app.get('/api/users/:id', async (req, res) => {
  const user = await users.get(req.params.id)
  if (!user) {
    return res.sendStatus(404)
  }
  return res.status(200).send(user)
})

app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await users.put({ id: req.params.id })
    return res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete('/api/users/:id', async (req, res) => {
  try {
    await users.delete(req.params.id)
    return res.status(200).send({ deleted: true })
  } catch (error) {
    return res.status(500).send(error)
  }
})

export default app
