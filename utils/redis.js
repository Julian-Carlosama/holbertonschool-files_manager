const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();

    this.client.on('error', (error) => {
      console.log(`Redis not connect to server: ${error}`);
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const getAsyncVal = promisify(this.client.get).bind(this.client);
    const val = await getAsyncVal(key);
    return val;
  }

  async set(key, value, duration) {
    this.client.set(key, value);
    this.client.expire(key, duration);
  }

  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
