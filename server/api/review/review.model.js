const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ReviewSchema = new Schema({
  for           : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description   : { type:String, required:true },
  stars         : { type:Number, required:true }
});

module.exports = mongoose.model('Review', ReviewSchema);
