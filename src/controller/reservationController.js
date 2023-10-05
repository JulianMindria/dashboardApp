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

module.exports = ctrl 