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
    edit: (req, res) => {
        Event.findById(req.params.eventId)
        .then(event => {
            res.render('events/edit', {
                event,
                userId: req.params.userId,
                eventId: req.params.eventId
            })
        })
    },
    update: (req, res) => {
        Event.findByIdAndUpdate(req.params.eventId, {content: req.body.content}, {new: true}).then(updatedEvent => {
            res.redirect(`/users/${req.params.userId}/events/${req.params.eventId}`)
        })
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('Spec Delete')
        })
    }
}

module.exports = userController