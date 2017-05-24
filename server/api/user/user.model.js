const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  username          : { type: String, required: true },
  email         : { type: String, required: true },
  password      : { type: String, required: true },
  pic_path      : String,
  pic_name      : String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
