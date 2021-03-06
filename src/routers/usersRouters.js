const express = require('express');
const router = express.Router();


const userController = require('../controllers/usersControllers');


//Get all
router.get('/user', userController.getAll);
//Get id
router.get('/user/:id', userController.getId);
//Create new registry
router.post('/user', userController.Creates);
//Update a registry through id
router.put('/user/:id', userController.Updates);
//Delete a registry through id
router.delete('/user/:id', userController.Delete);


module.exports = router;
