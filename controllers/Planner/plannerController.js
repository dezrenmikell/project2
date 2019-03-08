const { User } = require("../../models/User");
const { Event } = require("../../models/Planner");

const plannerController = {
  index: (req, res) => {
    User.findById(req.params.userId)
      .populate("events")
      .then(user => {
        res.render("planner/index", {
          userId: req.params.userId,
          eventId: req.params.eventId,
          events: user.events,
          name: user.name
        })
      });
  },
  new: (req, res) => {
    res.render("planner/new", {
      userId: req.params.userId
    });
  },
  create: (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
      Event.create(req.body)
      .then(newEvent => {
        user.events.push(newEvent);
        user.save();
        res.redirect(`/users/${req.params.userId}`);
      });

      //     .then(()=>res.redirect(`/users/${req.params.userId}/events`,{
      //     userId: req.params.userId,
      //     eventId: req.params.eventId
      //     }))
    });
  },

  show: (req, res) => {
    User.findById(req.params.userId)
    .populate('events')
    .then((event) => {
      res.render("planner/show", {
        event,
        userId: req.params.userId,
      });
    });
  },
  edit: (req, res) => {
    Event.findById(req.params.eventId).then(event => {
    
      res.render("planner/edit", {
        event,
        userId: req.params.userId,
        eventId: req.params.eventId
      });
    });
  },
  update: (req, res) => {
    Event.findByIdAndUpdate(
      req.params.eventId,
      { content: req.body.content },
      { new: true }
    ).then(updatedEvent => {
      res.redirect(`/users/${req.params.userId}/events/${req.params.eventId}`);
    });
  },

  delete: (req, res) => {
    Event.findByIdAndDelete(req.params.eventId).then(() => {
      console.log("deleted event");
      res.redirect(`/users/${req.params.userId}`);
    });
  }
};

module.exports = plannerController;
