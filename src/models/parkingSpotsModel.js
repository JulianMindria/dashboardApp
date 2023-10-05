const db = require('../config/configdb');

const model = {};


model.getParkingSpots = () => {
    return db.query('SELECT * FROM public.parking_spots')
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        throw error; 
      });
  };

  module.exports = model;