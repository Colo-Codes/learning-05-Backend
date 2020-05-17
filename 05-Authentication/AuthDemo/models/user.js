const mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

// Defining Schemas
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Setting up the Passport Local Mongoose package to be used
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);