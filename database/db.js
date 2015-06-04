/**
 * Created by uv2sun on 15/6/4.
 */

var mongoose = require('mongoose');
var DBConf = require('./db.conf');
var type = process.env.DBTYPE == 1 ? DBConf.PRODUCT_DB : DBConf.TEST_DB;
var dbconf = new DBConf(type);

module.exports = function () {
    console.log(dbconf.getDBUrl());
    mongoose.connect(dbconf.getDBUrl());
    console.log('connecting');
    return mongoose;
};
