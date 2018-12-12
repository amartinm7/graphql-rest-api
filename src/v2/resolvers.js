class World {
  constructor () {
    this.text = 'Hello world!'
  }
}

class Hello {
  constructor () {
    this.hell = 'hello first level'
    this.world = new World()
  }
}

module.exports =  {
  Query: {
    // Our only Resolver, which belongs to the `Query`
    // Type that we defined before
    hello: () => new Hello()
  },
  Hello: {
    hell: hello => hello.hell,
    world: hello => hello.world
  }
}
