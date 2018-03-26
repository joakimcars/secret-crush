import express from 'express'
import users from './users/user-store'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const nodemailer = require('nodemailer')

app.post('/api/users/:id/email', (req, res) => {
  const output = `
  <h3> Congratulations you have a secret crush!</h3>
  <p>Someone has listed you as one of their secret crushes. Join secretcrush.com and list you secret crushes to see if you have a match!<p> 
  `
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'secret.crush.website@gmail.com',
      pass: 'comeoneileen'
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: '"Secret Crush" <secret.crush.website@gmail.com>',
    to: req.body.email,
    subject: 'Someone has a secret crush on you',
    text: 'Hello world?',
    html: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
  return res.status(200).send(req.body.email)
})

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
