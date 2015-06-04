var express = require('express');
var router = express.Router();
var util = require('../util');
var User = require('../database/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.find(function (err, data) {
        res.json(data);
    })
});

router.post('/', function (req, res, next) {
    var user = new User(req.body);
    util.propertyCopy(req.body, user);
    user.save();
    res.json({retCode:0});
});

router.put('/', function (req, res) {

});



module.exports = router;
