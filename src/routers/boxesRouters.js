const express = require('express');
const router = express.Router();


const boxController = require('../controllers/boxesControllers');


//Get all
router.get('/box', boxController.getAll);
//Get id
router.get('/box/:id', boxController.getId);
//Create new registry
router.post('/box', boxController.Creates);
//Update a registry through id
router.put('/box/:id', boxController.Updates);
//Delete a registry through id
router.delete('/box/:id', boxController.Delete);

module.exports = router;