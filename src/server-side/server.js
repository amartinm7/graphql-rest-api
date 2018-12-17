import express from 'express'
import bodyParser from 'body-parser'
import {makeExecutableSchema} from "graphql-tools"
import {graphiqlExpress, graphqlExpress} from "graphql-server-express";

import typeDefs from './schemas'
import resolvers from './resolvers'

const PORT = 3000
const endPoint = '/pizza_api'
const server = express()
const schema = makeExecutableSchema({typeDefs,resolvers})

server.use(endPoint, bodyParser.json(), graphqlExpress({schema}))
server.use('/graphiql', graphiqlExpress({endpointURL:endPoint}))
server.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/${endPoint}`)
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphiql`)
})

