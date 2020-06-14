const sequelize = require('sequelize');
const database = require('../database/databaseSequelize');

const parking = require('../models/Parkings');

const controllerParkings = {};

controllerParkings.getAll = (req, res) => {
    parking.findAll()
    .then(parking =>{
        const parkingString = JSON.stringify(parking);
        const parkingObject = JSON.parse(parkingString);
        console.log(parkingObject);
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerParkings.delete = (req, res) => {
    const{id} = req.params;
    parking.destroy({where: {id:id}})
    .then(parking =>{
        res.json({'status':'succeded delete'});
        console.log(parking);
    })
    .catch(err =>{
        res.json({'status':'failed delete'});
        console.log(err);
    })
};


controllerParkings.getById = (req, res) => {
    const{id} = req.params;
    box.findAll({where:{id:id}})
    .then(parking =>{
        if(parking.lenght>0){
        const parkingString = JSON.stringify(parking);
        const parkingObject = JSON.parse(parkingString);
        console.log(parkingObject);
    } else{
        res.json({'status':'the required parking does not exist'});
    }
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerParkings.Creates=(req,res)=>{
    const {id, lat, long_, adress, name_, createdAt, updatedAt}=req.body;
    console.log(id, lat, long_, adress, name_, createdAt, updatedAt);
    parking.create({ id:id, lat:lat, long_:long_, adress:adress, name_:name_, createdAt:createdAt, updatedAt:updatedAt})
    .then(parking => {
        if (parking.id){ //if exists
            res.json({'status': 'succeded creation'});
            res.json(parking.id);
        } else{
            res.json({'status': 'failed creation'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}

controllerParkings.Updates=(req,res)=>{
    const {id}=req.params;
    const {id, lat, long_, adress, name_, createdAt, updatedAt}=req.body;
    console.log(id, lat, long_, adress, name_, createdAt, updatedAt);
    parking.update({lat:lat, long_:long_, adress:adress, name_:name_, createdAt:createdAt, updatedAt:updatedAt},
        { where: {id:id} })
    .then(parking => {
        const parkingString = JSON.stringify(parking);
        const parkingObject = JSON.parse(parkingString);
        console.log(parkingObject);
       if (parkingObject.length>0){
            res.json(parkingObject);
            res.json({'status': 'succeded update'});
        } else{
            res.json({'status': 'failed update'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}



module.exports = controllerParkings;