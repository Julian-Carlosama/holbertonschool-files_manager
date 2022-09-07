import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).send(status);
  }

  static async getStats(req, res) {
    const stats = {
      userNum: await dbClient.nbUsers(),
      fileNum: await dbClient.nbFiles(),
    };
    return res.status(200).send(stats);
  }
}

module.exports = AppController();
