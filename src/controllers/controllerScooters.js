const sequelize = require('sequelize');
const database = require('../database/databaseSequelize');

const parking = require('../models/Scooters');

const controllerScooters = {};

controllerScooters.getAll = (req, res) => {
    scooter.findAll()
    .then(scooter =>{
        const scooterString = JSON.stringify(scooter);
        const scooterObject = JSON.parse(scooterString);
        console.log(scooterObject);
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerScooters.delete = (req, res) => {
    const{id} = req.params;
    scooter.destroy({where: {id:id}})
    .then(scooter =>{
        res.json({'status':'succeded delete'});
        console.log(scooter);
    })
    .catch(err =>{
        res.json({'status':'failed delete'});
        console.log(err);
    })
};


controllerScooters.getById = (req, res) => {
    const{id} = req.params;
    scooter.findAll({where:{id:id}})
    .then(scooter =>{
        if(scooter.lenght>0){
        const scooterString = JSON.stringify(scooter);
        const scooterObject = JSON.parse(scooterString);
        console.log(scooterObject);
    } else{
        res.json({'status':'the required box does not exist'});
    }
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerScooters.Creates=(req,res)=>{
    const {id, userId, boxId, createdAt, updatedAt}=req.body;
    console.log(id, userId, boxId, createdAt, updatedAt);
    scooter.create({ id:id, userId:userId, boxId:boxId, createdAt:createdAt, updatedAt:updatedAt})
    .then(scooter => {
        if (scooter.id){ //if exists
            res.json({'status': 'succeded creation'});
            res.json(scooter.id);
        } else{
            res.json({'status': 'failed creation'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}


controllerScooters.Updates=(req,res)=>{
    const {id}=req.params;
    const {userId, boxId, createdAt, updatedAt}=req.body;
    console.log(id, userId, boxId, createdAt, updatedAt);
    scooter.update({userId:userId, boxId:boxId, createdAt:createdAt, updatedAt:updatedAt},
        { where: {id:id} })
    .then(scooter => {
        const scooterString = JSON.stringify(scooter);
        const scooterObject = JSON.parse(scooterString);
        console.log(scooterObject);
       if (scooterObject.length>0){
            res.json(scooterObject);
            res.json({'status': 'succeded update'});
        } else{
            res.json({'status': 'failed update'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}



module.exports = controllerScooters;