const bcrypt = require("bcryptjs/dist/bcrypt");
const hash = {}

hash.hasPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        result = bcrypt.hash(password, salt)
        return result
    } catch (error) {
        
    }
}

hash.comparePasswords = async (plaintextPassword, hashedPassword) => {
    try {
      const passwordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
      return passwordMatch;
    } catch (error) {
      throw error;
    }
  };

  

module.exports = hash