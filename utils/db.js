const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const dB = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${host}:${port}/`;

class DBClient {
  constructor() {
    this.client = null;

    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
      if (err) {
        this.client = false;
      } else {
        this.client = db.db(dB);
        this.client.createcollection('users');
        this.client.createcollection('files');
      }
    });
  }

  isAlive() {
    if (this.client) return true;
    return false;
  }

  async nbUsers() {
    const collecUsers = await this.client.collection('users').estimatedDocumentCount({});
    return collecUsers;
  }

  async nbFiles() {
    const collecFiles = await this.client.collection('files').estimatedDocumentCount({});
    return collecFiles;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
