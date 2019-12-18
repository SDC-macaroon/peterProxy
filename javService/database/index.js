const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/reviewDB2';
const db = mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = db;
