const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['path-to-your-routes-file'];
const doc = require('./swagger-config');


const corsOptions = {
  origin: '*',
};
const doc = {
  info: {
    title: 'Heroes API',
    description: 'API for managing heroes',
  },
  // host: 'localhost:8080', 
  host: 'localhost:5000/heroes',
  basePath: '/',
};


swaggerAutogen(outputFile, endpointsFiles, doc, (outputFile) => {
    console.log('Swagger JSON output to: ' + outputFile);
  });