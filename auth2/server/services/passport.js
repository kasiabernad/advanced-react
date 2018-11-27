const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').extractJwt;

const jwtOptions = {};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

})
