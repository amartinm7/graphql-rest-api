import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from "apollo-cache-inmemory";
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://localhost:3000'})
  cache: new InMemoryCache()
})

client.query({
    query: gql`
    query AllUsers {
      allUsers {
        name
        email
      }
    }
  `,
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
