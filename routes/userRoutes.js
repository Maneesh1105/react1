const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const { home ,createuser} = require('../controller/userController');

router.get("/",home);

router.post("/create",createuser);

module.exports = router;