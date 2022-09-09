import AppController from '../controllers/AppController';

const express = require('express');

const router = (app) => {
  const endP = express.Router();
  app.use(express.json());
  app.use('/', endP);

  endP.get('/status', ((req, res) => AppController.getStatus(req, res)));
  endP.get('/stats', ((req, res) => AppController.getStats(req, res)));
};

export default router;
