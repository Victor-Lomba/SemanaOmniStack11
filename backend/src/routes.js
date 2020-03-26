const express = require('express');
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session',SessionController.create);
routes.get('/ongs',OngController.index);

routes.post('/ongs',OngController.create);

routes.post('/incidents',incidentController.create);
routes.get('/incidents',incidentController.index);
routes.delete('/incidents/:id',incidentController.delete);
routes.get('/profile',profileController.index);

module.exports = routes;