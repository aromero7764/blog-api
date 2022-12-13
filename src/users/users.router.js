const router = require('express').Router()


const userServices = require('./users.services')

router.get("/", userServices.getAllUsers)
router.post('/', userServices.postUser)
router.get("/:id", userServices.getUserbyId)
/* 

router.delete("/:id", )
router.put("/:id", )
router.patch("/:id", )

app.use('/api/v1/users', userRouter)
 
*/

module.exports = router