const express = require('express');
const router = new express.Router();
const {
    processGetHero,
    processGetHeroById,
    processCreateHeroes,
} = require('../controllers/processHeroes');


/**
 * @swagger
 * /heroes:
 *   get:
 *     summary: Get the list of heroes.
 *     responses:
 *       200:
 *         description: Success. Returns the list of heroes.
 */
router.get('/heroes', processGetHero);

/**
 * @swagger
 * /heroes/{id}:
 *   get:
 *     summary: Get a hero by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the hero
 *     responses:
 *       200:
 *         description: Success. Returns the hero by ID.
 *       404:
 *         description: Hero not found.
 */

router.get('/:id', processGetHeroById);

/**
 * @swagger
 * /heroes:
 *   post:
 *     summary: Create a new hero.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../models/models.js'  
 *     responses:
 *       201:
 *         description: Hero created successfully.
 *       400:
 *         description: Bad request. Invalid hero data.
 *       500:
 *         description: Internal server error.
 */
router.post('/heroes', processCreateHeroes);




module.exports = router;
