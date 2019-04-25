const User = require('../models/User');
const { Event } = require('../models/Planner');

const userController = {
    index: (req, res) => {
        // Show all users
            User.find()
            .populate('events')
            .then((users)=>{
            res.render('users/index', {users})
            })
                
            
    },
    new: (req, res) => {
        res.render('users/new')
    },
    create: (req, res) => {
        User.create(req.body).then(user => {
            res.redirect(`/users/${user._id}`)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .populate('events')
            .then((user) => {
                res.render('users/show', {user})
            })      
    },
    edit: (req,res)=>{
        User.findById(req.params.userId).then((user)=>{
            res.render('users/edit',{user})
        })
    },
    update: (req, res)=>{
        User.findByIdAndUpdate(req.params.userId, req.body,{new:true}).then((updatedUser)=>{
            res.redirect(`/users/${req.params.userId}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = userController