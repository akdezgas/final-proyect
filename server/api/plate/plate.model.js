

const mongoose        = require('mongoose');
const Schema          = mongoose.Schema;
const TYPES_Location  = require('../plate-location');

const PlateSchema = new Schema({
  _creator      : { type: Schema.Types.ObjectId, ref: 'User' },
  name          : { type: String },
  description   : { type: String },
  origin        : { type: String },
  location      : { type: String, enum: TYPES_Location},
  price         : { type: Number },
  deadline      : { type: Date },
  guests        : { type: Number, default: 0 },
  pic_path      : String,
  pic_name      : String,
});


module.exports = mongoose.model('Plate', PlateSchema);
