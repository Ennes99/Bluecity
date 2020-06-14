const sequelize = require('sequelize');
const database = require('../database/databaseSequelize');

const user = require('../models/Users');

const controllerUsers = {};

controllerUsers.getAll = (req, res) => {
    user.findAll()
    .then(user =>{
        const userString = JSON.stringify(user); //Object user (not valid for console.log) to json
        const userObject = JSON.parse(userString); //json (from user) to String (object)
        console.log(userObject);
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerUsers.delete = (req, res) => {
    const{id} = req.params;
    user.destroy({where: {id:id}})
    .then(user =>{
        res.json({'status':'succeded delete'});
        console.log(user);
    })
    .catch(err =>{
        res.json({'status':'failed delete'});
        console.log(err);
    })
};


controllerUsers.getById = (req, res) => {
    const{id} = req.params;
    user.findAll({where:{id:id}})
    .then(user =>{
        if(user.lenght>0){
        const userString = JSON.stringify(user);
        const userObject = JSON.parse(userString);
        console.log(userObject);
    } else{
        res.json({'status':'the required user does not exist'});
    }
    })
    .catch(err =>{
        console.log(err);
    })
};


controllerScooters.Creates=(req,res)=>{
    const {id, password_, name_, username, isAdmin, createdAt, updatedAt}=req.body;
    console.log(id, password_, name_, username, isAdmin, createdAt, updatedAt);
    scooter.create({id:id, password_:password_, name_:name_, username:username, isAdmin:isAdmin, createdAt:createdAt, updatedAt:updatedAt})
    .then(user => {
        if (user.id){ //if exists
            res.json({'status': 'succeded creation'});
            res.json(user.id);
        } else{
            res.json({'status': 'failed creation'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}


controllerUsers.Updates=(req,res)=>{
    const {id}=req.params;
    const {password_, name_, username, isAdmin, createdAt, updatedAt}=req.body;
    console.log(id, password_, name_, username, isAdmin, createdAt, updatedAt);
    user.update({password_:password_, name_:name_, username:username, isAdmin:isAdmin, createdAt:createdAt, updatedAt:updatedAt},
        { where: {id:id} })
    .then(user => {
        const userString = JSON.stringify(user);
        const userObject = JSON.parse(userString);
        console.log(userObject);
       if (userObject.length>0){
            res.json(userObject);
            res.json({'status': 'succeded update'});
        } else{
            res.json({'status': 'failed update'});
        }

  })
    .catch(err => {
        console.log(err)
  })
}



module.exports = controllerUsers;