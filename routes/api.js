var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log(req.params)
  console.log(req.body)
  res.send(req.body);
});

module.exports = router;
