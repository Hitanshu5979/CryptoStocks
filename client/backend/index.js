const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});
const port = 5000
const bcrypt = require('bcryptjs');
app.use(express.json())//this is a middleware we use to use request.body So now we can send request in json
//Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})