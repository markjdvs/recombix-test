const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  dateFrom: Date,
  dateTo: Date,
  location: String,
  description: String
});

module.exports = mongoose.model('Event', eventSchema);
