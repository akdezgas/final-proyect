mongoose = require('mongoose');
reviewModel = require('./review.model');


exports.listReview = function (req, res, next ){
  reviewModel.find()
  .then( reviewList => {res.json(reviewList);})
  .reject(err => { res.status(500).json(err)});
};
// POST
exports.createReview = function(req, res, next) {

  const newReview = new reviewModel({
    creator:       req.user._id,
    description:   req.body.description,
    stars:         req.body.stars
  });

	newReview.save()
  .then( review => {res.json({ message: 'New Review created!', id: newReview._id });})
  .reject( err => {res.json(err); });
};
