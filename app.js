const express = require('express');
const app = express();
const port = 3000;

const homeController = require('./controllers/homeController');

app.get('/', homeController.index);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});