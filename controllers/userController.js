const User = require('../models/userModel');

const bcrypt = require('bcryptjs')

exports.getAllUsers = async (req, res, next) =>
{
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            result: users.length,
            data: {
                users
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
        })
    }
}

exports.getOneUser = async (req, res, next) =>
{
    try {
        const users = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
        })
    }
}

exports.createUser = async (req, res, next) =>
{
    const { email, password, username, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    if(role !== "admin" && role !== "user") return res.status(400) .json({
        status:'fail',
        message:'role is undefined'
    })

    try {
        const users = await User.create(
            {
                email: email,
                username: username,
                password: hashPassword,
                role: role
            }
        );
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            status: 'fail',
        })
    }
}

exports.updateUser = async (req, res, next) =>
{
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            status: 'fail',
        })
    }
}

exports.deleteUser = async (req, res, next) =>
{
    try {
        const users = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
        })
    } catch (e) {
        res.status(400).json({
            status: 'fail',
        })
    }
}
