/**
 * Created by uv2sun on 15/6/4.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {
    collection: 'user'
});

var UserModel = mongoose.model('user', UserSchema);

UserModel.getAll = function () {

};

module.exports = UserModel;