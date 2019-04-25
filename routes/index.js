const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/applicationController')
const userController = require('../controllers/userController')
const plannerController = require('../controllers/Planner/plannerController')

// Application route
router.get('/', applicationController.index)

// User routes
router.get('/users', userController.index)

router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)

router.get('/users/:userId/edit', userController.edit)

router.put('/users/:userId', userController.update)

router.delete('/users/:userId', userController.delete)

//Planner routes
router.get('/users/:userId/events', plannerController.index)

router.get('/users/:userId/events/new', plannerController.new)

router.post('/users/:userId/events', plannerController.create)

router.get('/users/:userId/events/:eventId', plannerController.show)

router.get('/users/:userId/events/:eventId/edit', plannerController.edit)

router.put('/users/:userId/events/:eventId', plannerController.update)

router.delete('/users/:userId/events/:eventId', plannerController.delete)

module.exports = router;