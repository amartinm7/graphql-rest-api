const express = require('express')
const graphqlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')

const schema = buildSchema(`
  type User {
    name: String!
    email: String!
  }
  type Query {
    hello: String
    allUsers: [User]
    user(username: String!): User
   }
`)

const root = {
  hello: () => {
    return 'Hello World'
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({schema: schema, rootValue: root, graphiql: true}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
