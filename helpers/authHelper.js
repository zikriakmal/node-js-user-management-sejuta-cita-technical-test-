const jwt = require('jsonwebtoken');
const config = require('../config/config');
const generateAccessToken = (data)=>{
    return  jwt.sign({email:data.email,id:data.id,role:data.role},config.JWT_SECRET,{expiresIn:'1h'});
}

module.exports = {
    generateAccessToken
}