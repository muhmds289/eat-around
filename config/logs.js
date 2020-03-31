// var passport = require('passport');
// var localStorage = require('passport-local').Strategy;
// var bcrypt = require('bcrypt');
// var db = require('../models');
// var restaurant = db.restaurant
// var Like = db.Like
// var user = db.user


// passport.use(new localStorage({
//     usernameField: 'email',
//     passwordField:'password',
//     passReqToCallback:true
// },
// (req,username,password,callback)=>{
//     user.findOne({wehere:{email:username}})
//     .then(user=>{
//         //no user found,emil or username incorrect
//         if(user)return callback(null,false ,req.flash('error_message', 'username or password entered incorrectly'))
//     })
// }
// ))