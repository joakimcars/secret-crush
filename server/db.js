import mongodb from 'mongodb'
import config from './config'

const database = mongodb(config.db.url)
  .then(client => client.db(config.db.name))

export default collectionName => {
  const o = database.then(db => db.collection(collectionName)).then(collection => {
    return {
      async get (id) {
        const { _id, ...document } = await collection.findOne({ _id: id })
        return { id: _id, ...document }
      },

      async put ({ id, ...document }) {
        await collection.insertOne({ _id: id, ...document })
        return document
      }
    }
  })

  return {
    get: id => o.then(o => o.get(id)),
    put: doc => o.then(o => o.put(doc))
  }
}