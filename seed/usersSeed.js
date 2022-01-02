const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('../config/config');
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("successfully connected to db"))
    .catch((e) =>
    {
        console.log(e);
        setTimeout(connectWithRetry, 5000);
    });



const userSeed = async () =>
{
    const admin = await User.create(
        {
            email: "admin@sejutacita.com",
            username: "admin",
            password: await bcrypt.hash("admin", 12),
            role: "admin"
        }
    );
    const user = await User.create(
        {
            email: "user1@sejutacita.com",
            username: "user",
            password: await bcrypt.hash("user", 12),
            role: "user"
        }
    );
    console.log(admin);
    console.log(user);
    process.exit(0);
}

userSeed();
// const user =  User.create(
//     {
//         email: "user1@sejutacita.com",
//         username: "user",
//         password: await bcrypt.hash("admin", 12),
//         role: "user"
//     }
// );
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash);
//     });
// });
