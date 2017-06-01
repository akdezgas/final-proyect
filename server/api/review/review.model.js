const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ReviewSchema = new Schema({
  from          : { type: Schema.Types.ObjectId, ref: 'User'},
  for           : { type: Schema.Types.ObjectId, ref: 'User'},
  description   : { type:String },
  stars         : { type:Number }
});

module.exports = mongoose.model('Review', ReviewSchema);
