const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES_Location  = require('../plate-location');

const RequestSchema = new Schema({
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title         : { type: String, required: true },
  description   : { type: String, required: true },
  origin        : { type: String, required: true },
  location      : { type: String, enum: TYPES_Location, required: true },
  catch         : { type: Boolean, default: false },
  deadline      : { type: Date, required: true },
  pic_path      : String,
  pic_name      : String
});


module.exports = mongoose.model('Request', RequestSchema);
