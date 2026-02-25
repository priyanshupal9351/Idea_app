const express = require('express');
const idea_controller = require('../controllers/user.controller');
const router = express.Router();

/**
 * Start defining all routes here
 */
// First get route
router.get('/ideas', idea_controller.getAllIdeas);

router.get('/ideas/:id',idea_controller.getIdeaBasedOnId);

router.post('/ideas', idea_controller.createIdea);

router.put('/ideas/:id', idea_controller.updateIdea);

router.delete('/ideas/:id', idea_controller.deleteIdea);



module.exports = router;