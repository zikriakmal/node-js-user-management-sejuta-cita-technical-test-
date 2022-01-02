const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config');

const adminMid = (req, res, next) =>
{
    console.log(req.user);

    if (req.user.role !== "admin") return res.status(401).json({
        status: "error",
        message: "Unauthorized"
    });
    next();
}



module.exports = adminMid;