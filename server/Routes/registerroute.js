const express = require('express');
const bodyParser = require('body-parser');
const { createUser, checkUser, getqurantext,getquranaudio } = require('../controller/registercontroller');
const router = express.Router();

router.post('/createUser',createUser);
router.post('/checkUser',checkUser);
router.get('/verses/indopak/:chapter_number',getqurantext);
router.get('/v4/recitations/:recitation_id/by_chapter/:chapter_number',getquranaudio);
module.exports= router;// Add registration routes for Express
// Add error handling to registration routes
// Optimize registration route performance
