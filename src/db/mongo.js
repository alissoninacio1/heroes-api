const {MongoClient} = require('mongodb');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const uri = process.env.MONGO_URI;

async function connectDB() {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db(dbName);
      const heroesCollection = db.collection('profile');
  
      return heroesCollection; 
  
    } catch (err) {
      console.error('Error:', err);
      throw err; 
    }
  }
  

module.exports = connectDB;
