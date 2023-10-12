const express = require('express');
const router = new express.Router();
const {
    processGetHero,
    processGetHeroById,
    processCreateHeroes,
    processUpdateHero,
    processDeleteHero,
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




/**
 * @swagger
 * /heroes/{id}:
 *   put:
 *     summary: Update a hero by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the hero to update.
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         description: Updated hero data.
 *         required: true
 *         schema:
 *           $ref: '../models/models.js' 
 *     responses:
 *       204:
 *         description: Hero updated successfully.
 *       400:
 *         description: Bad request. Invalid hero data.
 *       404:
 *         description: Hero not found.
 *       500:
 *         description: Failed to update hero.
 */
router.put('/heroes/:id', processUpdateHero);





/**
 * @swagger
 * /heroes/{id}:
 *   delete:
 *     summary: Delete a hero.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the hero to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: hero deleted successfully.
 *       404:
 *         description: hero not found or not deleted.
 *       500:
 *         description: Failed to delete hero.
 */
router.delete('/heroes/:id', processDeleteHero);



module.exports = router;
