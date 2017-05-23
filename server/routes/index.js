var path = require('path');

module.exports = function(app) {
  app.use('/api/user', require('../api/user'));
  app.use('/api/plate', require('../api/plate'));
  app.use('/api/review', require('../api/review'));
  app.use('/api/request', require('../api/request'));
	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
