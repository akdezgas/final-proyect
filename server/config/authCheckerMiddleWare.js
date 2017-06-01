function authChecker (req,res, next){
  console.log("Is authenticated --> " ,req.isAuthenticated());
  if(req.isAuthenticated()){
    return next();
  }
  res.status(403).json({ message: "Unauthorized" });
}
module.exports = authChecker;
