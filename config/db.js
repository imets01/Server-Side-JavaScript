var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/d7h8g6', { useNewUrlParser: true });

module.exports = mongoose;