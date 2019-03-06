const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/applicationController')
const userController = require('../controllers/userController')
const personnelController = require('../controllers/Personnel/personnelController')
const plannerController = require('../controllers/Planner/plannerController')
const spectatorController = require('../controllers/Spectator/spectatorController')

// Application route
router.get('/', applicationController.index)

// User routes
router.get('/users', userController.index)

router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)

router.delete('/users/:userId', userController.delete)

//Planner routes
router.get('/users/:userId/events', plannerController.index)

router.get('/users/:userId/events/new', plannerController.new)

router.post('/users/:userId/events', plannerController.create)

router.get('/users/:userId/events/:eventId', plannerController.show)

router.get('/users/:userId/events/:eventId/edit', plannerController.edit)

router.put('/users/:userId/events/:eventId', plannerController.update)

router.delete('/users/:userId/events/:eventId', plannerController.delete)

//Personnel routes
router.get('/users/:userId/statements', personnelController.index)

router.get('/users/:userId/statements/new', personnelController.new)

router.post('/users/:userId/statements', personnelController.create)

router.get('/users/:userId/statements/:statementId', personnelController.show)

router.get('/users/:userId/statement/:statementId/edit', personnelController.edit)

router.put('/users/:userId/statement/:statementId', personnelController.update)

router.delete('/users/:userId/statement/:statementId', personnelController.delete)

//Spectator routes
router.get('/users/:userId/events/:eventId/spectators', spectatorController.index)

router.get('/users/:userId/events/:eventId/spectators/new', spectatorController.new)

router.post('/users/:userId/events/:eventId/spectators', spectatorController.create)

router.get('/users/:userId/events/:eventId/spectators/:spectatorId', spectatorController.show)

router.get("/users/:userId/events/:eventId/spectators/edit", spectatorController.edit)

router.put('/users/:userId/events/:eventId/spectators/:spectatorId', spectatorController.update)

router.delete('/users/:userId/events/:eventId/spectators/:spectatorId', spectatorController.delete)

module.exports = router;