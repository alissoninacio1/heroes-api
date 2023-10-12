const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];
const doc = {
  info: {
    title: 'Heroes API',
    description: 'API for managing heroes',
  },
  host: 'localhost:5000/heroes',
  basePath: '/',
};

swaggerAutogen(outputFile, endpointsFiles, doc, (outputFile) => {
  console.log('Swagger JSON output to: ' + outputFile);
});
