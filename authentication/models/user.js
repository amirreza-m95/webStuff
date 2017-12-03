var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authentication');
var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    username : {
        type: string,
        index: true
    },
    email: {
        type: string,
    },
    name:{
        type: string,
    },
    password: {
        type: string
    },
    profileimage: {
        type: string
    }

});

var user = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser , callback){
    newUser.save(callback);
}