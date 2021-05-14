const express = require('express');
const routes = require('./routes/index.js');
const app = express();

app.use(express.json());
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
