let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

//join
router.post('/join', jsonParser, function(req,res) {
    res.json(req.body);
})


//check
router.post('/check', jsonParser, function(req,res) {

})


module.exports = router;
