const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  googleId: String,
  googleName: String,
  googleEmail: String
});

exports.User = mongoose.model('User', UserSchema);

