import AppController from '../controllers/AppController';

const express = require('express');

const router = (app) => {
  const endP = express.Router();
  app.use(express.json());
  app.use('/', endP);

  endP.get('status', ((request, response) => AppController.getStatus(request, response)));
  endP.get('status', ((request, response) => AppController.getStatus(request, response)));
};

module.exports = router;
