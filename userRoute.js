const express = require('express');
const router = express.Router();

const {create,updateProfile,updatePassword} = require('../controler/userContoller')
router.post('/create',create)

router.post('/updateProfile',updateProfile)
router.post('/updatePassword',updatePassword)


module.exports = router;