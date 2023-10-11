
const express = require('express');
const app = express();
const port = 5000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); 
const cors = require('cors');

app.use(cors());

const heroesRouter = require('./routes/index');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/', heroesRouter);
app.use('/heroes', heroesRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
