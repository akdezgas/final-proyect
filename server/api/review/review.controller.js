mongoose = require('mongoose');
reviewModel = require('./review.model');

const User = require("../user/user.model");

exports.listReview = function (req, res, next ){
  reviewModel.find()
  .then( reviewList => {res.json(reviewList);})
  .reject(err => { res.status(500).json(err)});
};
// POST
exports.createReview = function(req, res, next) {


        const {from,to,content,stars} = req.body;

        var newReview= reviewModel({
            from,
            to,
            description,
            stars
        });

        newReview.save((err) => {
            if (err) {
                res.status(400).json({
                    message: "Something went wrong"
                });
            } else {
                req.login(newReview, function(err) {
                    if (err) {
                        return res.status(500).json({
                            message: 'something went wrong :('
                        });
                    }
                    res.status(200).json(newReview);
                });
            }
        });
};

exports.getReview = function(req, res) {
    let userId = req.params.id;
    reviewModel.find({
        to: userId
    })
    .then((messages) => res.status(200).json(messages))
    .catch(err => res.status(500).json(err));
};

exports.getBox = function(req, res) {
    let userId = req.params.id;
    reviewModel.find({
        to: userId
    }).populate('from').then(messages => {
      return res.status(200).json(messages);
    })
    .catch(err => res.status(500).json(err));
};

exports.deleteReview = function (req, res) {
    let messageId = req.params.id;
    reviewModel.deleteOne({
        _id : messageId
    }).then(message => {
      return res.status(200).json(message);
    })
    .catch(err => res.status(500).json(err));
};
