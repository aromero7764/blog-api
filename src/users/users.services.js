
const useControllers = require('./users.controllers')


const getAllUsers = (req, res) => {

  useControllers.findAllUsers()
  .then((data) => {
    res.status(200).json(data)
  } )
  .catch((err) => {
    res.status(400).json({message: err.message})
  })


}

const getUserbyId = (req, res) => {
  const id = req.params.id
  useControllers.findUserById(id)

    .then((data)=> {
        if(data) {
          res.status(200).json(data)
        } else {
          res.status(404).json({message: 'Invalid ID'})
        }
    })

    .catch((err) => {
        res.status(400).json({message: err.message})

    })

}


const postUser = (req, res) => {
  const {first_name, last_name, user_name, email, password, age,  country} = req.body

  useControllers.createUser({
    first_name, last_name, user_name, email, password, age, country
  })

      .then((data) => {
          res.status(201).json(data)
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
          fields: {
            first_name: 'string',
            last_name: 'string',
            user_name: 'string',
            email: 'string',
            password: 'string',
            age: 'number',
            country: 'MXN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         '
          }
        })
      })

}

module.exports = {
  getAllUsers,
  getUserbyId,
  postUser
}

