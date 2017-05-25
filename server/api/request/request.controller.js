mongoose = require('mongoose');
requestModel = require('./request.model');


exports.listRequests = function(req,res, next){
  requestModel.find()
  .then( requestList => {res.json(requestList);})
  .reject(err => { res.status(500).json(err)});
};

exports.singleRequest = function (req,res,next){
  requestModel.findById(req.params.id)
  .then(singleRequest => {res.json(singleRequest);})
  .reject(err => { res.status(500).json(err)});
};
// POST
exports.createRequest = function(req, res, next) {

  const newRequest = new requestModel({
    creator:       req.user._id,
    title:         req.body.title,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    image:         req.body.image
  });

	newRequest.save()
  .then( request => {res.json({ message: 'New Request created!', id: newRequest._id });})
  .reject( err => {res.json(err); });
};

exports.editRequest = function(req, res ,next) {
  const updates = {
    title:         req.body.title,
    description:   req.body.description,
    origin:        req.body.origin,
    location:      req.body.location,
    deadline:      req.body.deadline,
    image:         req.body.image
  };
  requestModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update request", error});
    }
    res.json({ message: 'Request updated successfully'});
  });
};


exports.removeRequest = function (req, res) {
    requestModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'request removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the Request', error: err }));
};
