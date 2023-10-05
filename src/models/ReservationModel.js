const db = require('../config/configdb');

const model = {};


model.getReservation = () => {
    return db.query('SELECT * FROM public.reservations')
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        throw error; 
      });
  };

  model.getAllRes = (username) => {
    return db.query(`
            SELECT
            r.reservation_id,
            u.username,
            ps.spot_name,
            r.reservation_date,
            r.reservation_time,
            r.is_paid
        FROM
            reservations r
        INNER JOIN
            users u ON r.user_id = u.user_id
        INNER JOIN
            parking_spots ps ON r.spot_id = ps.spot_id
        WHERE
            u.username = $1;

    `, [username])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      throw error;
    });
  };
  
  module.exports = model;