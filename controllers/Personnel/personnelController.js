const User = require('../../models/User');
const { Personnel } = require('../../models/Personnel');

const userController = {
    index: (req, res) => {
        // Show all users
        User.find()
            .populate('events')
            .then(users => {
                res.send("Person Index")
            })
    },
    new: (req, res) => {
        res.send("Person New")
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send("Person Edit")
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .populate('events')
            .then(user => {
                res.send('Person Show')
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('Person Delete')
        })
    }
}

module.exports = userController