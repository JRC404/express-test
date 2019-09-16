// first steps with mongoose.
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {type: String, required: true},
    // email: {type: String, required: true},
    password: {type: String, required: true}
});

// exporting a model... think of it like a table. Table for every scheme we have.
module.exports = mongoose.model('users', user);
// end of first steps with mongoose.

// ~/mongodb/bin/mongo