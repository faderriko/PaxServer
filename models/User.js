const mongoose = require('mongoose');// import mongoose// extract the schema from that mongoose object
const Schema = mongoose.Schema;// create a new post schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  OTP: {
    type: Array,
    "default" : []
  }
});// export the model
module.exports = mongoose.model('User', userSchema);