const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES_Location  = require('../plate-location');

const RequestSchema = new Schema({
  _creator      : { type: Schema.Types.ObjectId, ref: 'User' },
  title         : { type: String },
  description   : { type: String },
  origin        : { type: String },
  location      : { type: String, enum: TYPES_Location},
  catch         : { type: Boolean, default: false },
  deadline      : { type: Date }
});


module.exports = mongoose.model('Request', RequestSchema);
