const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];
const doc = {
  info: {
    title: 'Heroes API',
    description: 'API for managing heroes',
  },
  host: 'heroes-api-sjmr.onrender.com/heroes',
  basePath: '/',
};

swaggerAutogen(outputFile, endpointsFiles, doc, (outputFile) => {
  console.log('Swagger JSON output to: ' + outputFile);
});
