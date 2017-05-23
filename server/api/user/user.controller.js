mongoose = require('mongoose');
userModel = require('./user.model');

exports.listUser= function(req, res, next){
  userModel.find()
  .then( userList => {res.json(userList);})
  .reject(err => { res.status(500).json(err)});
};
// POST
exports.createUser = function(req, res, next) {
  console.log("hola")
  const newUser = new userModel({
    name:          req.body.name,
    email:         req.body.email,
    password:      req.body.password,
    image:         req.body.image
  });

	newUser.save()
         .then( user => {res.json({ message: 'New User created!', id: newUser._id });})
         .reject( err => {res.json(err);
  });
};

exports.editUser = function(req, res ,next) {
  const updates = {
    name:          req.body.name,
    email:         req.body.email,
    password:      req.body.password,
    image:         req.body.image
  };
  userModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update User", error});
    }
    res.json({ message: 'User updated successfully'});
  });
};


exports.removeUser = function (req, res) {
    userModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'user removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the user', error: err }));
};
