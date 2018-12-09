![Graphql rest api](./_media/graphql-logo.png)

# README #

Graphql rest api

# Reference

- https://graphql.org
- https://graphql.org/graphql-js/running-an-express-graphql-server/

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

