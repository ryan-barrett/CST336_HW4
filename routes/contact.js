const faker = require('faker');

function initContact(app) {
  app.get('/contact', (req, res) => {
    const fakeEmail = faker.internet.email();
    res.json({ email: fakeEmail });
  });
}

module.exports = initContact;
