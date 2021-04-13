var express = require('express');
var router = express.Router();
var Qr = require('qrcode')

/* GET home page. */
router.get('/', function(req, res, next) {
  url = "htt://192.168.31.147"
  Qr.toDataURL(url, function(err, url) {
    res.render('index', { title: 'Express',qr: url});
  })
});


router.get('/game', function (req, res) {
  res.render('game');
})

module.exports = router;
