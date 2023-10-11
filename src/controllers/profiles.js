const {ObjectId} = require('mongodb');
const connectDB = require('../db/mongo');

async function getHeroes() {
  const collectionName = await connectDB(); 
  if (!collectionName) {
    return []; 
  }

  try {
    return await collectionName.find({}).toArray();
  } catch (err) {
    console.error('Error fetching heroes:', err);
    throw err;
  } finally {
    console.log('Disconnected from MongoDB');
  }
}

  
  
async function getHeroesById(id) {
  const collectionName = await connectDB();
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const objectId = new ObjectId(id);
    console.log('ID code:', objectId);

    const hero = await collectionName.findOne({ _id: objectId });
    console.log('Hero found:', hero);

    return hero;
  } catch (err) {
    console.error('Error fetching hero by ID:', err);
    throw err;
  } finally {
    console.log('Disconnected from MongoDB');
  }
}



  async function createHeroes(heroData) {
    const collectionName = await connectDB(); 
    try {
      const result = await collectionName.insertOne(heroData);
      return result.insertedId;
    } catch (err) {
      console.error('Error creating hero:', err);
      throw err;
    } finally {
      console.log('Disconnected from MongoDB');
    }
  }
  
  
  

module.exports = {
    getHeroes,
    getHeroesById,
    createHeroes,
};