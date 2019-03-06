const User = require('../../models/User');
const { Personnel } = require('../../models/Personnel');
const { Planner } = require('../../models/Planner');

const personnelController = {
    index: (req, res) => {
        User.findById(req.params.userId)
            .then(() => {
                res.send(user.skills)
            })
    },
    new: (req, res) => {
        res.render('personnel/new', {
            userId: req.params.userId
        })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
        .then(user =>{
            Statement.create({
            content: req.body.content,
            reviews: [{content: 'This is so cool'}]
        })
        .then(newStatement => {
            user.skills.push(newStatement)
            user.save()
            res.redirect(`/users/${req.params.userId}/events`)
        })
    })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
           
            .then(user => {
                res.render('personnel/show')
            })
    },
    edit: (req, res) => {
        Personnel.Statement.findById(req.params.statementId)
        .then(statement => {
            res.render('personnel/edit', {
                statement,
                userId: req.params.userId,
                statementId: req.params.statementId
            })
        })
    },
    update: (req, res) => {
        Personnel.Statement.findByIdAndUpdate(req.params.statementId, {content: req.body.content}, {new: true}).then(updatedStatement => {
            res.redirect(`/users/${req.params.userId}/statements/${req.params.statementId}`)
        })
    },

    delete: (req, res) => {
        Personnel.Statement.findByIdAndDelete(req.params.statementId).then(() => {
            console.log('deleted event')
            res.redirect(`/users/${req.params.userId}/statements`)
        })
    }
}

module.exports = personnelController