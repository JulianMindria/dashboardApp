const ctrl = {}
const model = require('../models/ReservationModel');
const response = require('../helper/respon');


ctrl.getRes = async (req, res) => {
    try {
        const result = await model.getReservation();
        if (!result) {
            return response(res, 404, { message: 'Not Available' });
        }
        return response(res, 200, result);
    } catch (error) {
        console.error('Error fetching parking spots:', error);
        return response(res, 500, { error: 'Internal Server Error' });
    }
};

ctrl.getAllRes = async (req, res) => {
    try {
        const result = await model.getAllRes();
        if (!result) {
            return response(res, 404, { message: 'Not Available' });
        }
        return response(res, 200, result);
    } catch (error) {
        console.error('Error fetching parking spots:', error);
        return response(res, 500, { error: 'Internal Server Error' });
    }
};

ctrl.AddReservation = async (req, res, next) => {
    try {
      const { user_id, spot_id, reservation_date, reservation_time, is_paid } = req.body;
  
      const newReservation = await model.AddReservation(
        user_id,
        spot_id,
        reservation_date,
        reservation_time,
        is_paid
      );
  
      await model.UpdateReservation(spot_id);
  
      return response(res, 200, {
        message: 'Reservation created successfully',
        reservation: newReservation,
      });
    } catch (error) {
      next(error);
    }
  };
  

module.exports = ctrl 