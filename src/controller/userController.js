const ctrl = {}
const model = require('../models/userModel');
const response = require('../helper/respon');
const hash = require('../helper/bcrypt')
const bcrypt = require("bcryptjs/dist/bcrypt");


ctrl.getUser = async (req, res) => {
    try {
        const result = await model.fetchUser();
        if (!result) {
            return response(res, 404, { message: 'No users found' });
        }
        return response(res, 200, result);
    } catch (error) {
        console.error('Error fetching users:', error);
        return response(res, 500, { error: 'Internal Server Error' });
    }
};


ctrl.getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const result = await model.fetchUserByUsername(username);
        if (result.length === 0) {
            return response(res, 404, { message: 'User not found' });
        }
        return response(res, 200, result);
    } catch (error) {
        console.error(error);
        return response(res, 500, { error: 'Internal Server Error' });
    }
};


ctrl.createUser = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      console.log(username, password)

      const hashedPassword = await hash.hasPassword(password);
      const existingUser = await model.fetchUserByUsername(username);
  
      if (existingUser.length > 0) {
        return response(res, 401, { error: 'Username already exists' });
      }
      const newUser = await model.createUser(username, hashedPassword);
      return response(res, 200, { message: 'User created successfully', user: newUser });
    } catch (error) {
      next(error);
    }
  };


  ctrl.login = async (req, res) => {
    try {
        const { username, password } = req.body; 
        const user = await model.fetchUserByUsername(username);

        if (!user) {
            return response(res, 401, { error: 'Authentication failed' });
        }

        const passwordMatch = await bcrypt.compare(password, user[0].password_hash);;

        if (!passwordMatch) {
            return response(res, 401, { error: 'Authentication failed' });
        }

        return response(res, 200, { message: 'Authentication successful', user });
    } catch (error) {
        console.error(error);
        console.log(error)
        return response(res, 500, { error: 'Internal Server Error' });
    }
};

module.exports = ctrl
