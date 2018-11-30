var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  data=JSON.parse(req.session.user);
  //console.log(data);
  res.render('user', { title: 'Express' ,data });

  
});

module.exports = router;
