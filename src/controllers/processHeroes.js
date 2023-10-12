const {
    getHeroes,
    getHeroesById,
    createHeroes,
    updateHero,
    deleteHero,
  } = require('./profiles');

const connectDB = require('../db/mongo');
  

  // intermediate functions
async function processGetHero(req, res) {
    const contacts = await getHeroes();
    res.json(contacts);
}

  
async function processGetHeroById(req, res) {
    const {id} = req.params;
    console.log('ID received:', id);
  
    const contact = await getHeroesById(id);
  
    if (!contact) {
      res.status(404).json({error: 'Hero Id not found.'});
      return;
    }
  
    res.json(contact);
}

  
async function processCreateHeroes(req, res) {
    console.log('Received request body:', req.body);
  
    const heroData = req.body;
  
    const hero = {
      name: heroData.name,
      age: heroData.age,
      planet: heroData.planet,
      gender: heroData.gender,
      alien: heroData.alien,
      tendency: heroData.tendency,
      editorial: heroData.editorial
    };
  
    try {
      const newHeroId = await createHeroes(hero);
  
      res.status(201).json({id: newHeroId});
    } catch (err) {
      console.error('Error creating contact:', err);
      res.status(500).json({error: 'Failed to create or add a new hero.'});
    }
}
  


async function processUpdateHero(req, res) {
    const { id } = req.params;
    const updatedHeroData = req.body;

    try {
      if (!id) {
        res.status(400).json({ error: 'Hero ID is required.' });
        return;
      }

      if (!updatedHeroData) {
        res.status(400).json({ error: 'Updated hero data is required.' });
        return;
      }


      const heroesCollection = await connectDB();

      const ObjectId = require('mongodb').ObjectId;
      const objectId = new ObjectId(id);

      const hero = await heroesCollection.findOne({ _id: objectId });

      if (!hero) {
        res.status(404).json({ error: 'Hero not found.' });
        return;
      }

      const fieldsToUpdate = ['name', 'age', 'planet', 'gender', 'alien', 'tendency', 'editorial'];
      const updateQuery = {};

      for (const field of fieldsToUpdate) {
        if (field in updatedHeroData) {
          updateQuery[field] = updatedHeroData[field];

          //see which fields were updated
          console.log(`${hero._id} - ${field} updated successfully`)
        }
      }

      const result = await heroesCollection.updateOne({ _id: objectId }, { $set: updateQuery });

      if (result.modifiedCount === 0) {
        res.status(500).json({ error: 'Failed to update hero.' });
      } else {
        res.status(204).json({ message: 'Hero updated successfully.' });
      }


    } catch (err) {
      console.error('Error updating hero:', err);
      res.status(500).json({ error: 'Failed to update hero.' });
    }
}

  
  
  async function processDeleteHero(req, res) {
    const {id} = req.params;
  
    try {
      const HeroDeleted = await deleteHero(id);
  
      if (HeroDeleted) {
        res.status(200).json({message: 'Hero deleted successfully.'});
      } else {
        res.status(404).json({error: 'Hero not found or not deleted.'});
      }
    } catch (err) {
      console.error('Error deleting Hero:', err);
      res.status(500).json({error: 'Failed to delete contact.'});
    }
  }
  


  module.exports = {
    processGetHero,
    processGetHeroById,
    processCreateHeroes,
    processUpdateHero,
    processDeleteHero,
  };
  