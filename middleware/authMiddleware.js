const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config');

const protect = (req, res, next) =>
{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    console.log(token);
    if (token == null) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized"
        });
    }

    jwt.verify(token, JWT_SECRET, (err, user) =>
    {
        if(err) return res.status(403).json({
            status:"error",
            message:"Bad Signature"
        })
        req.user = user
        next()
    })
}



module.exports = protect;