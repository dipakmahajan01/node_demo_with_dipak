
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const PORT = process.env.PORT || 3000
const { dbCollection } = require('./config/db');
const api = require('./routes/index');

//db connection
dbCollection()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

app.listen(PORT, () => {
  console.log(`listening on port${PORT}`);
})





