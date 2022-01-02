const bcrypt = require('bcryptjs/dist/bcrypt');
const { generateAccessToken } = require('../helpers/authHelper');
const User = require('../models/userModel');

exports.login = async (req, res) =>
{
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Email not found"
            })
        }

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {

            return res.status(401).json({
                status: "fail",
                message: "Wrong Email or Password"
            })
        }

        const emailAuth = user.email;
        const idAuth =  user._id.toString();
        const role = user.role;
        const token = generateAccessToken({ email: emailAuth, id: idAuth,role:role });
        return res.status(200).json({
            status: "success",
            message: "successfully login",
            data: {
                access_token: token
            }
        })

    } catch (e) {
        console.log(e);
        res.status(400).json({
            status: 'fail'
        });
    }
}


exports.getInfo = async (req, res) =>
{
    console.log(req.user);
    return res.status(200).json({
        status: "success",
        message: "successfully login",
        data: req.user 
    });

}