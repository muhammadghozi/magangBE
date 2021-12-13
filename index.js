// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const path = require('path')

//register plugin register
fastify.register(require('fastify-static'), require("./config/static").public;
fastify.register(require('fastify-static'), require("./config/static").assets;
fastify.register(require('fastify-static'), require("./config/static").forms;
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, "public"),
  prefix: '/public', // optional: default '/'
  decorateReplay: false,
});

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, "public/assets"),
  prefix: '/assets', // optional: default '/'
  decorateReplay: false,
});

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, "public/forms"),
  prefix: '/forms', // optional: default '/'
  decorateReplay: false,
});

// Declare a route
fastify.get("/public/", async (request, reply) => {
  reply.sendFile ("index.html"); // serving path.join(__dirname, 'public', 'index.html') directly
});

// Declare a route
fastify.get("/apaya", async (request, reply) => {
  return { hello: 'apaya' }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (err) {
  
    fastify.log.error(err)
    process.exit(1)
  }
};
start();