import { MongoClient } from 'mongodb'
import config from './config'

const database = MongoClient.connect(config.db.url)
  .then(client => client.db(config.db.name))

export default collectionName => {
  const o = database.then(db => db.collection(collectionName)).then(collection => {
    return {
      async get (id) {
        const { _id, ...document } = await collection.findOne({ _id: id })
        return { id: _id, ...document }
      },

      async put ({ id, ...document }) {
        await collection.updateOne({ _id: id }, { $set: { ...document } }, { upsert: true })
        return { id, ...document }
      },

      async delete (id) {
        await collection.deleteOne({ _id: id })
      },

      async all () {
        const cursor = await collection.find()
        const result = await cursor.toArray()
        return result.map(({ _id, ...doc }) => ({ id: _id, ...doc }))
      }
    }
  })

  return {
    get: id => o.then(o => o.get(id)),
    put: doc => o.then(o => o.put(doc)),
    delete: id => o.then(o => o.delete(id)),
    all: () => o.then(o => o.all())
  }
}
