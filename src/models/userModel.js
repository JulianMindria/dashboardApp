const db = require('../config/configdb');

const model = {};


model.fetchUser = () => {
    return db.query('SELECT * FROM public.users')
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        throw error; 
      });
  };
  

  model.fetchUserByUsername = (username) => {
    return db.query('SELECT * FROM public.users WHERE username = $1', [username])
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        throw error;
      });
  };


model.createUser = (username, password_hash) => {
  return db.query(
    'INSERT INTO public.users (username, password_hash) VALUES ($1, $2) RETURNING *',
    [username, password_hash]
  )
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = model;