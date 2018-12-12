const express = require('express')
const graphqlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')
const http = require('http')
const terminus = require('@godaddy/terminus')

// schema || schema.js
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

// resolvers || resolver.js
const root = {
  hello: () => {
    return 'Hello World'
  },
  user: (userName) => {
    return {name: 'me', email: 'you@gmail.com'}
  },
  allUsers: () => {
    return [{name: 'me', email: 'you@gmail.com'},{name: 'me', email: 'you@gmail.com'},{name: 'me', email: 'you@gmail.com'}]
  }
}

const app = express()
app.get('/', (req, res) => {
  res.send('ok');
})
const server = http.createServer(app)
const options = { // opts
 }
terminus.createTerminus(server, options)
app.use('/graphql', graphqlHTTP({schema: schema, rootValue: root, graphiql: true}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
