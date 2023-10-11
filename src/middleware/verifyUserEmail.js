const model =  require('../model/users')

const validate = async (req, res, next) =>{
  try {
    const {username, email} = req.body
    const result = await model.readByUser(username, email)

    if(result == ''){
      return next()
    }
    
    if(username === result[0].username){
      return res.send("USERNAME HAS BEEN REGISTERED")
    }

    if(email_user == result[0].email){
      return res.send("EMAIL HAS BEEN REGISTERED")
    }


  } catch (error) {
   return res.send(error)
  }
}

module.exports = validate