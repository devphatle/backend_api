// User model
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    info: {
        name: String,
        age: Number,
        email: String,
        phone: String,
        birthday: Date
    },
    created_at: Date,
    updated_at: Date
});


userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

var user =  mongoose.model('User', userSchema);
module.exports = user;