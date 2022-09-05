const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(tihs.client);

    this.client.on('error', (error) => {
      console.log(`Redis not connect to server: {error}`);
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const val = await this.getAsync(key);
    return val;
  }

  async set(key, value, duration) {
    this.client.set(key, value);
    this.client.expire(key, duration);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
module.exports = redisClient;
