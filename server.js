var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Libro = require('./api/models/LibroModel')

// mongoose instance connection url connection
mongoose
  .connect('mongodb://localhost:27017/libros', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('db connect success')
  })
  .catch((err) => {
    throw err
  })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var routes = require('./api/routes/LibroRoute')
routes(app)

app.listen(port)
console.log('Servidor en puerto: ' + port)
