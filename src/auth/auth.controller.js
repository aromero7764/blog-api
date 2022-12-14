// email 
// password
const { findUserByemail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

// esta funcion va a validar si los datos pertenecn o no a un usuario


const checkUserCredential = async(email, password) => {

    try {
        const user = await findUserByemail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword) {
            return user
        }
        return null
        
    } catch (error) {
        return null
    }
    
}

module.exports = checkUserCredential


