mongoose = require('mongoose');
plateModel = require('./plate.model');



//Get Plates
exports.listPlates = function(req,res, next){
  plateModel.find()
  .then( plateList => {res.json(plateList);})
  .reject(err => { res.status(500).json(err)});
};

// POST
exports.createPlate = function(req, res, next) {

  const newPlate = new plateModel({
    name:          req.body.name,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    price:         req.body.price,
    image:         req.body.image,
    creator:       req.user._id
  });
  console.log(newPlate)
	newPlate.save()
  .then( plate => {res.json({ message: 'New Plate created!', id: newPlate._id });})
  .reject( err => {res.json(err); });
};

exports.editPlate = function(req, res ,next) {
  const updates = {
    name:          req.body.name,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    price:         req.body.price,
    image:         req.body.image
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
