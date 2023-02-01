const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/test';

exports.initializeDatabase = () => mongoose.connect(connectionString);