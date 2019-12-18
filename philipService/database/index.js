const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/colourpreview';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .catch(error => console.log(error));

module.exports = db;
