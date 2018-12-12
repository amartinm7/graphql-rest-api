/* src/schema.js */
const {buildSchema} = require('graphql')

const _schema = buildSchema(`
  type World {
    text: String!
  }
  type Hello {
    world: World!
  }
  type Query {
    hello: Hello
   }
`)

// exporting types
module.exports = _schema
