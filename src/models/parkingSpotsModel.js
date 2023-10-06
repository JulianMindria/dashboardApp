const db = require('../config/configdb');

const model = {};


model.getParkingSpots = () => {
    return db.query('select * from public.parking_spots ps where is_available = true')
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        throw error; 
      });
  };

  module.exports = model;