//import parkings model
//const Sequelize = require('sequelize');
const sequelize = require('../models/database');
const Parking = require('../models/parkings');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({force: false})
  .then(()=>{
      console.log('SYNC MODEL');
});

const parkingController = {};

parkingController.getAll = (req,res)=>{
  Parking.findAll()
    .then(parkings => {
      const parkingsString = JSON.stringify(parkings);
      const parkingObject = JSON.parse(parkingsString);
      res.json(parkingObject);
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.getId = (req,res)=>{
  const {id} = req.params;
  Parking.findAll({ where: {id:id} })
    .then(parkings => {
      if (parkings.length>0){
          const parkingsString = JSON.stringify(parkings);
          const parkingsObject = JSON.parse(parkingsString);
          console.log(parkingsObject);
          res.json(parkingsObject);
      } else{
          res.json({status: 'Registry not exist'});
      }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Creates = (req,res)=>{
  const {lat, long, addrress, name, createAt, updateAt} = req.body;
  Parking.create({lat : lat, long : long, addrress : addrress, name : name, createAt : createAt, updateAt : updateAt })
    .then(parkings => {
        if (parkings.id){
            res.json({success: true});
        } else{
            res.json({status: 'Not create'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Updates = (req,res)=>{
  const {id} = req.params;
  const {lat, long, addrress, name, createAt, updateAt} = req.body;
  Parking.update({lat : lat, long : long, addrress : addrress, name : name, createAt : createAt, updateAt : updateAt  },
      { where: {id:id} })
    .then(parkings => {
        const parkingsString = JSON.stringify(parkings);
        const parkingsObject = JSON.parse(parkingsString);
          if (parkingsObject.length > 0){
              res.json({success: true});
          } else{
              res.json({status: 'Not update'});
          }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Delete = (req,res)=>{
  const {id} = req.params;
  Parking.destroy({ where: {id:id} })
    .then(parkings => {
      const parkingsString = JSON.stringify(parkings);
      const parkingsObject = JSON.parse(parkingsString);
        if (parkingsObject == 1){
            res.json({success: true});
        } else{
            res.json({status: 'Not delete'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

module.exports = parkingController;