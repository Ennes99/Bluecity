const express = require('express');
const router = express.Router();


const scooterController = require('../controllers/scootersControllers');


//Get all
router.get('/scooter', scooterController.getAll);
//Get id
router.get('/scooter/:id', scooterController.getId);
//Create new registry
router.post('/scooter', scooterController.Creates);
//Update a registry through id
router.put('/scooter/:id', scooterController.Updates);
//Delete a registry through id
router.delete('/scooter/:id', scooterController.Delete);


module.exports = router;