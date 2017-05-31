mongoose = require('mongoose');
plateModel = require('./plate.model');


//Get Plates
exports.getAllList = function (req,res,next){
  plateModel.find()
  .then( plateList => {res.json(plateList);})
  .reject(err => { res.status(500).json(err)});
};

exports.listPlates = function(req,res, next){
  plateModel.find({location: req.params.location})
  .then( plateList => {res.json(plateList);})
  .reject(err => { res.status(500).json(err)});
};

exports.singlePlate = function(req,res,next){
  console.log("holaaa")
  plateModel.findById(req.params.id)
  .then(singlePlate => {res.json(singlePlate);})
  .reject(err => { res.status(500).json(err)});
};
// POST
exports.createPlate = function(req, res, next) {
  const newPlate = new plateModel({
    creator:       req.body.creator,
    name:          req.body.name,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    price:         req.body.price,
    pic_path:     `/uploads/${req.file.filename}`,
    pic_name:      req.file.originalname
  });

  console.log("PLate created")
	newPlate.save()
      .then( plate => {res.json({ message: 'New Plate created!', id: newPlate._id });})
      .catch( err => {res.status(500).json({error:err, message:"Cannot create plate"}); });
};

exports.editPlate = function(req, res ,next) {
  const updates = {
    name:          req.body.name,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    price:         req.body.price,
    image:         `/uploads/${req.file.filename}`
  };
  plateModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update plate", error});
    }
    res.json({ message: 'Plate updated successfully'});
  });
};


exports.removePlate = function (req, res) {
    plateModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'plate removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the plate', error: err }));
};
