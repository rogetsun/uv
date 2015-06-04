/**
 * Created by uv2sun on 15/6/4.
 */

var DB = require('../db');
DB();
var util = require('../../util');

var User = require('./index');
var u = new User();
util.propertyCopy(u, {name: 'litx', age: 111}, u);
u.save();
var find = function () {
    User.find(function (err, res) {
        console.log(res);
    });
};
setTimeout(find, 2000);

