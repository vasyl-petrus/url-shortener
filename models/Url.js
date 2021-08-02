const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema(
  {
    urlHash: String,
    originalUrl: String,
    shortUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', URLSchema);
