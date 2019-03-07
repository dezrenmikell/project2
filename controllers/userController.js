const User = require('../models/User');
const { Event } = require('../models/Planner');

const userController = {
    index: (req, res) => {
        // Show all users
            User.find()
            .populate('events')
                res.render('users/index', {users})
            
    },
    new: (req, res) => {
        res.render('users/new')
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.redirect(`/users/${user._id}`)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                res.render('users/show', {user})
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send(`Deleted user with user id of ${req.params.userId}`)
        })
    }
}

module.exports = userController