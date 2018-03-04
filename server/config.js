export default {
  server: {
    port: process.env.SERVER_PORT || 3000,
    db: {
      url: process.env.MONGO_SERVER || 'mongodb://localhost:27017',
      name: process.env.MONGO_DBNAME || 'dev'
    }
  }
}
