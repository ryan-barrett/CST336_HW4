function initViews(app) {
  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.get('/aggregation', function (req, res) {
    res.render('aggregation.html');
  });

  app.get('/benefits', function (req, res) {
    res.render('benefits.html');
  });

  app.get('/strategies', function (req, res) {
    res.render('strategies.html');
  });
}

module.exports = initViews;
