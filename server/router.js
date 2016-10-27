const express = require('express');
const _ourController = require('./controllers/_ourController');

module.exports = (app) => {
  const apiRoutes = express.Router();

  // routes will go here
  apiRoutes.get('/helloworld', _ourController.helloworld);

  app.use('/api', apiRoutes);
};
