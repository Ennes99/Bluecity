const sequelize = require('sequelize');
const database = require('../database/databaseSequelize');

const box = require('../models/Boxes');

const controllerBoxes = {};

controllerBoxes.getAll = (req, res) => {
    box.findAll()
    .then(box =>{
        const boxString = JSON.stringify(box);
        const boxObject = JSON.parse(boxString);
        console.log(boxObject);
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerBoxes.delete = (req, res) => {
    const{id} = req.params;
    box.destroy({where: {id:id}})
    .then(box =>{
        res.json({'status':'succeded delete'});
        console.log(box);
    })
    .catch(err =>{
        res.json({'status':'failed delete'});
        console.log(err);
    })
};


controllerBoxes.getById = (req, res) => {
    const{id} = req.params;
    box.findAll({where:{id:id}})
    .then(box =>{
        if(box.lenght>0){
        const boxString = JSON.stringify(box);
        const boxObject = JSON.parse(boxString);
        console.log(boxObject);
    } else{
        res.json({'status':'the required box does not exist'});
    }
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerBoxes.Creates=(req,res)=>{
    const {id, occupied, userId, parkingId, createdAt, updatedAt}=req.body;
    console.log(id, occupied, userId, parkingId, createdAt, updatedAt);
    box.create({ id:id, occupied:occupied, userId:userId, parkingId:parkingId, createdAt:createdAt, updatedAt:updatedAt})
    .then(box => {
        if (box.id){ //if exists
            res.json({'status': 'succeded creation'});
            res.json(box.id);
        } else{
            res.json({'status': 'failed creation'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}

controllerBoxes.Updates=(req,res)=>{
    const {id}=req.params;
    const {occupied, userId, parkingId, createdAt, updatedAt}=req.body;
    console.log(id, occupied, userId, parkingId, createdAt, updatedAt);
    box.update({ occupied:occupied, userId:userId, parkingId:parkingId, createdAt:createdAt, updatedAt:updatedAt }, //arreglar variables
        { where: {id:id} })
    .then(box => {
        const boxString = JSON.stringify(box);
        const boxObject = JSON.parse(boxString);
        console.log(boxObject);
       if (boxObject.length>0){
            res.json(boxObject);
            res.json({'status': 'succeded update'});
        } else{
            res.json({'status': 'failed update'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}



module.exports = controllerBoxes;