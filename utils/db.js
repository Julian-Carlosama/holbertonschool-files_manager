const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const dB = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/`;

    MongoClient.connect(url, (err, client) => {
      if (err) {
        this.db = false;
      } else {
        this.db = client.db(dB);
      }
    });
  }

  isAlive() {
    if (this.db)
      return true;
    else
      return false;
  }

  async nbUsers() {
    const collecUsers = await this.client.collection('users').countDocuments()
    return callectUsers;
  }

   async nbFiles() {
    const collecFiles = await this.collection('files').countDocuments();
    return collecFiles;
  }
}

const dbClient = new DBClient();
export default dbClient;
