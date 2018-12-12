const express = require('express')
const graphqlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')
const http = require('http')
const terminus = require('@godaddy/terminus')

const _schema = require('./schema.js')
const _resolver = require('./resolvers.js')

const app = express()
app.get('/', (req, res) => {
  res.send('ok');
})
const server = http.createServer(app)
const options = { // opts
}
terminus.createTerminus(server, options)
app.use('/graphql', graphqlHTTP({schema: _schema, rootValue: _resolver, graphiql: true}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
