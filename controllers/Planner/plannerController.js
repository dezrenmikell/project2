const User = require('../../models/User');
const { Planner } = require('../../models/Planner');

const plannerController = {
    index: (req, res) => {
        User.findById(req.params.userId)
            .then(() => {
                res.send(user.events)
            })
    },
    new: (req, res) => {
        res.render('planner/new', {
            userId: req.params.userId
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
        .then(user =>{
            Event.create({
            content: req.body.content,
            reviews: [{content: 'This is so cool'}]
        })
        .then(newEvent => {
            user.events.push(newEvent)
            user.save()
            res.redirect(`/users/${req.params.userId}/events`)
        })
    })
    
    },

    show: (req, res) => {
        User.findById(req.params.userId)
           
            .then(user => {
                res.render('planner/show')
            })
           
    },
    edit: (req, res) => {
        Planner.Event.findById(req.params.eventId)
        .then(event => {
            res.render('planner/edit', {
                event,
                userId: req.params.userId,
                eventId: req.params.eventId
            })
        })
    },
    update: (req, res) => {
        Planner.Event.findByIdAndUpdate(req.params.eventId, {content: req.body.content}, {new: true}).then(updatedEvent => {
            res.redirect(`/users/${req.params.userId}/events`)
        })
    },

    delete: (req, res) => {
        Planner.Event.findByIdAndDelete(req.params.eventId).then(() => {
            console.log('deleted event')
            res.redirect(`/users/${req.params.userId}/events`)
        })
    }
}

module.exports = plannerController