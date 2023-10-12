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
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact to update.
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         description: Contact data to update.
 *         required: true
 *         schema:
 *           $ref: '../models/models.js' 
 *     responses:
 *       204:
 *         description: Contact updated successfully.
 *       404:
 *         description: Contact not found or not updated.
 *       500:
 *         description: Failed to update contact.
 */
router.put('/contacts/:id', processUpdateHero);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the contact to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully.
 *       404:
 *         description: Contact not found or not deleted.
 *       500:
 *         description: Failed to delete contact.
 */
router.delete('/contacts/:id', processDeleteHero);



module.exports = router;
