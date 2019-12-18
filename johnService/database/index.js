const mongoose = require('mongoose');

const morestyles = 'mongodb://localhost/morestyles';

mongoose.connect(morestyles, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error'));
db.once('open', () => {
  console.log('Mongoose connected');
});

module.exports = db;
