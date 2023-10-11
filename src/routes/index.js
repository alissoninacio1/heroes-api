const express = require('express');
const router = new express.Router();
const {
    processGetHero,
    processGetHeroById,
    processCreateHeroes,
} = require('../controllers/processHeroes');


router.get('/heroes', processGetHero);


router.get('/:id', processGetHeroById);


router.post('/heroes', processCreateHeroes);



module.exports = router;
