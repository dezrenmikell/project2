const User = require('../../models/User');
const { Event } = require('../../models/Planner');

const userController = {
    index: (req, res) => {
        // Show all users
        User.find()
            .populate('events')
            .then(users => {
                res.send("Plan Index")
            })
    },
    new: (req, res) => {
        res.send("Plan New")
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send("Plan Edit")
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .populate('events')
            .then(user => {
                res.send('Plan Show')
            })
    },
    edit: (req, res) => {
        Chirp.findById(req.params.eventId)
        .then(event => {
            res.send('Plan Edit')
        })
    },
    update: (req, res) => {
        Event.findByIdAndUpdate(req.params.eventId, {content: req.body.content}, {new: true}).then(updatedEvent => {
            res.redirect(`/users/${req.params.userId}/events/${req.params.eventId}`)
        })
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('Plan Delete')
        })
    }
}

module.exports = userController