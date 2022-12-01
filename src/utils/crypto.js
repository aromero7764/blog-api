const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    //PlainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}

/* console.log(hashPassword('root')) */

const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}