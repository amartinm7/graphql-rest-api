![Graphql rest api](./_media/graphql-logo.png)

Graphql rest api.

# README

GraphQL on the server allows you to define how you want to fetch your data. Then, on the client, you can execute a query that has the exact data shape you want, and the data you get back will have the same shape as the query.

# Reference

- https://graphql.org
- https://graphql.org/graphql-js/running-an-express-graphql-server/
- https://medium.freecodecamp.org/graphql-front-end-queries-made-easy-68e9d9ded283

## Run the server
```
node server.js
```

## Run graphiql console
Since we configured graphqlHTTP with graphiql: true, you can use the GraphiQL tool to manually issue GraphQL queries. If you navigate in a web browser to 
```
http://localhost:4000/graphql
```
![Graphql testing console](./_media/hello.png)


## Testing server via curl

```
curl -X GET -i "http://localhost:4000/" -H "Content-type: application/json" -H "Accept: application/json"
```

# TIPS

## closing ports
```
sudo lsof -i :8888
sudo kill -9 PID
```

