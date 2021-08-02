const mongoose = require('mongoose');
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/urlshortener';

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
