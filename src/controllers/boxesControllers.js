//import boxes model
//const Sequelize = require('sequelize');
const sequelize = require('../models/database');
const Box = require('../models/boxes');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({force: false})
  .then(()=>{
    console.log('SYNC MODEL');
});

const boxController = {};

boxController.getAll = (req,res)=>{
  Box.findAll()
  .then(boxes => {
    const boxesString = JSON.stringify(boxes);
    const boxesObject = JSON.parse(boxesString);
    res.json(boxesObject);
  })
  .catch(err => {
    res.json({status: err});
  })
};

boxController.getId = (req,res)=>{
  const {id} = req.params;
  Box.findAll({ where: {id:id} })
   .then(boxes => {
      if (boxes.length>0){
          const boxesString = JSON.stringify(boxes);
          const boxesObject = JSON.parse(boxesString);
          console.log(boxesObject);
          res.json(boxesObject);
      } else{
          res.json({status: 'Registry not exist'});
      }
  })
  .catch(err => {
    res.json({status: err});
  })
};

boxController.Creates = (req,res)=>{
  const {occupied, userId, parkingId, createAt, updateAt} = req.body;
  Box.create({ occupied : occupied, userId : userId, parkingId : parkingId, createAt : createAt, updateAt : updateAt })
    .then(boxes => {
      if (boxes.id){
          res.json({success: true});
      } else{
          res.json({status: 'Not create'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

boxController.Updates = (req,res)=>{
  const {id} = req.params;
  const {occupied, userId, parkingId, createAt, updateAt} = req.body;
  Box.update({ occupied : occupied, userId : userId, parkingId : parkingId, createAt : createAt, updateAt : updateAt  },
      { where: {id:id} })
    .then(boxes => {
      const boxesString = JSON.stringify(boxes);
      const boxesObject = JSON.parse(boxesString);
        if (boxesObject.length > 0){
            res.json({success: true});
        } else{
            res.json({status: 'Not update'});
        }
  })
  .catch(err => {
    res.json({status: err});
  })
};

boxController.Delete = (req,res)=>{
  const {id} = req.params;
  Box.destroy({ where: {id:id} })
    .then(boxes => {
      const boxesString = JSON.stringify(boxes);
      const boxesObject = JSON.parse(boxesString);
        if (boxesObject == 1){
            res.json({success: true});
        } else{
            res.json({status: 'Not delete'});
        }
  })
  .catch(err => {
    res.json({status: err});
  })
};

module.exports = boxController;