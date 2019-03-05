const User = require('../../models/User');
const { Event } = require('../../models/Spectator');

const userController = {
    index: (req, res) => {
        // Show all users
        User.find()
            .populate('events')
            .then(users => {
                res.send("Spec Index")
            })
    },
    new: (req, res) => {
        res.send("Spec New")
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send("Spec Edit")
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .populate('events')
            .then(user => {
                res.send('Spec Show')
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('Spec Delete')
        })
    }
}

module.exports = userController