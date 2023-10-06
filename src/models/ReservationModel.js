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

  model.getAllRes = () => {
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
    `)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      throw error;
    });
  };

  model.AddReservation = (user_id, spot_id, reservation_date, reservation_time, is_paid) => {
    return db.query(
      'INSERT INTO reservations (user_id, spot_id, reservation_date, reservation_time, is_paid) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, spot_id, reservation_date, reservation_time, is_paid]
    )
      .then((result) => {
        return result.rows[0];
      })
      .catch((error) => {
        throw error;
      });
  };

  

  model.UpdateReservation = (spot_id) => {
    const updatedData = {
      is_available: false,
    };
  
    const updateQuery = Object.keys(updatedData)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');
  
    return db.query(
      `UPDATE public.parking_spots
      SET ${updateQuery}
      WHERE spot_id = $${Object.keys(updatedData).length + 1}`,
      [...Object.values(updatedData), spot_id]
    )
      .then((result) => {
        return result.rows[0];
      })
      .catch((error) => {
        throw error;
      });
  };
  
  
  module.exports = model;