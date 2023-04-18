const router = require('express').Router()
const controller = require('../controllers/userController')
const upload = require('../middlewares/uploadImgOfUser');
const userModel = require('../models/userModel');

// edit users
router.put('/:id', upload.single('avatar'), controller.editUser)

// delete users
router.delete('/:id', controller.deleteUser)

// get detail users
router.get('/:id', controller.getDetailUser)

// get all users
router.get('/', controller.getAllUser)

module.exports = router
