const User = require('../models/User');
const { Planner } = require('../models/Planner');

const userController = {
    index: (req, res) => {
        // Show all users
        
                res.send("User Index")
            
    },
    new: (req, res) => {
        res.send("User New")
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send("User Edit")
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .populate('events')
            .then(user => {
                res.send('User Show')
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('User Delete')
        })
    }
}

module.exports = userController