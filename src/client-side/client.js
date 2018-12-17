import 'dotenv/config'
console.log(process.env.MY_DATABASE_PASSWORD);
import { execute, makePromise } from 'apollo-link';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';


const uri = 'https://localhost:3000/pizza_api';
const link = new HttpLink({ uri, fetch });

const operation = {
  query: gql`query { pizzas {
    id
  } }`,
  variables: {}, //optional
  operationName: {}, //optional
  context: {}, //optional
  extensions: {} //optional
}

// execute returns an Observable so it can be subscribed to
execute(link, operation).subscribe({
  next: data => console.log(`received data: ${JSON.stringify(data, null, 2)}`),
  error: error => console.log(`received error ${error}`),
  complete: () => console.log(`complete`),
})

// For single execution operations, a Promise can be used
makePromise(execute(link, operation))
  .then(data => console.log(`received data ${JSON.stringify(data, null, 2)}`))
  .catch(error => console.log(`received error ${error}`))
