const initViews = require('./views');
const initContact = require('./contact');

function initRoutes(app) {
  initViews(app);
  initContact(app);
}

module.exports = initRoutes;
