import db from '../db'

const users = db('users')

export default {
  async get (id) {
    return users.get(id)
  },

  async put (user) {
    return users.put(user)
  },

  async delete (id) {
    return users.delete(id)
  },

  async all () {
    return users.all()
  }
}
