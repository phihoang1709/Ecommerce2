const router = require('express').Router();
let UserController = require('../controller/user.controller');

router.route('/').get(UserController.getAllUsers);

router.route('/:id').get(UserController.getUser);

router.route('/').post(UserController.createUser);

router.route('/:id').put(UserController.updateUser);

router.route('/:id').delete(UserController.deleteUser);


module.exports = router;