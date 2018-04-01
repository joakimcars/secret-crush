import express from 'express'
import users from './users/user-store'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/users', async (req, res) => {
  const list = await users.all()
  return res.status(200).send(list)
})

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
    console.error(error)
    return res.status(500).send({ error: error.message })
  }
})

app.delete('/api/users/:id', async (req, res) => {
  try {
    await users.delete(req.params.id)
    return res.status(200).send({ deleted: true })
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: error.message })
  }
})

app.post('/api/users/:id/crushes', async (req, res) => {
  try {
    console.log(req.body)
    const user = await users.get(req.params.id)
    const { email, ...crush } = req.body
    if (!email) {
      return res.status(400).send({ error: 'No email specified for crush' })
    }

    const updated = await users.put({ ...user, crushes: { ...user.crushes, [email]: crush } })
    return res.status(200).send(updated)
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: error.message })
  }
})

app.delete('/api/users/:id/crushes/:crush', async (req, res) => {
  try {
    const user = await users.get(req.params.id)
    const { [req.params.crush]: deleted, ...crushes } = (user.crushes || {})
    const updated = await users.put({ ...user, crushes })
    return res.status(200).send(updated)
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: error.message })
  }
})

export default app
