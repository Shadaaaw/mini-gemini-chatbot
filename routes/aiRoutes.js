const express = require("express");
const router = express.Router();

const {postMessage} = require('../controllers/aiController');

router.post('/ask', postMessage);

module.exports = router;