const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    username:{
        type:String,
        required:[true,"username is required"]
    },
    role:{
        type:String,
        required:[true,"role is required"]
    }
});

const User = mongoose.model("User", userSchema)

module.exports= User;