const User = require('../../models/User');
const { Planner } = require('../../models/Planner');

const plannerController = {
    index: (req, res) => {
        User.findById(req.params.userId)
            .then(() => {
                res.send('user.events')
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
           
            .then(user => {
                res.send('Plan Show')
            })
    },
    edit: (req, res) => {
        Planner.Event.findById(req.params.eventId)
        .then(event => {
            res.send('Plan Edit')
        })
    },
    update: (req, res) => {
        Event.findByIdAndUpdate(req.params.eventId, {content: req.body.content}, {new: true}).then(updatedEvent => {
            res.redirect(`/users/${req.params.userId}/events`)
        })
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.send('Plan Delete')
        })
    }
}

module.exports = plannerController