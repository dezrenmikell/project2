const User = require('../models/User')
const Personnel = require('../models/Personnel')
const Planner = require('../models/Planner')
const Spectator = require('../models/Spectator')
// const {Event} = require('../models/Event')
//clear database so there won't be repeats
User.deleteMany()
    .then(()=>{
        return Planner.Event.deleteMany()
    })
//create first User(planner)    
    .then(()=>{
        return User.create({
            name: "B-Roc(k)",
            email: 'brock@gmail.com',
            password: 'brock',
            typez: "planner"
        })
    })
//create events for the first user ()   
    .then(brock=>{
        const event1Promise = Planner.Event.create({
            eventId: _id,
            name: "Paint and Sip",
            content: "An Interactive Paint and Sip event with Poetry",
            author: User._id
        }).then(event => {
            brock.events.push(event)
         })
        const event2Promise = Planner.Event.create({
            eventId: _id,
            name: 'Day Party',
            content: 'A party to promote Poetry Pins',
            author: User._id
        }).then(event=>{
            brock.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise]).then(()=> {
            brock.save()
        })
    })
//create the second user (planner)   
.then(()=>{
    return User.create({
        name:"Juice Leroy",
        email: 'juice@gmail.com',
        password: 'juice',
        typez: "planner"
    })
})
//create events for second user
    .then(juice=>{
        const event1Promise = Planner.Event.create({
            eventId: _id,
            name: "Paint and Sip",
            content: "An Interactive Paint and Sip event with Poetry",
            author: User._id        }).then(event => {
            juice.events.push(event)
         })
        const event2Promise = Planner.Event.create({
            eventId: _id,
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            author: User._id
        }).then(event=>{
            juice.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise]).then(()=> {
            juice.save()
        })
    })
//create third user(planner)
.then(()=>{
    return User.create({
        name:"Odinero",
        email: 'odinero@gmail.com',
        password: 'odinero',
        typez: "planner"
    })
})
//create events for the third user
    .then(odinero=>{
        const event1Promise = Planner.Event.create({
            eventId: _id,
            name: "Smoke and Paint",
            content: "An Interactive Paint and performance event that includes models, singers, dancers, Hip Hop artists, and more.",
            author: User._id
        }).then(event => {
            odinero.events.push(event)
         })
        const event2Promise = Planner.Event.create({
            eventId: _id,
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            author: User._id
        }).then(event=>{
            odinero.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise]).then(()=> {
            odinero.save()
        })
    })
//create fourth user (personnel)
.then(()=>{
    return User.create({
        name: "Jade Muse",
        email: 'jadeMuse@gmail.com',
        password: 'jade',
        typez: "personnel"
    })
})
//create events for fourth user (personnel)
    .then(jadeMuse=>{
        const event1Promise = Planner.Event.create({
            eventId: _id,
            name: "Smoke and Paint",
            content: "An Interactive Paint and performance event that includes models, singers, dancers, Hip Hop artists, and more.",
            
        }).then(event => {
            jadeMuse.events.push(event)
         })
        const event2Promise = Planner.Event.create({
            eventId: _id,
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            
        }).then(event=>{
            jadeMuse.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise]).then(()=> {
            jadeMuse.save()
        })
    })
//create fourth user
.then(()=>{
    return User.create({
        name: "Hi I'm Gaia",
        email: 'gaia@gmail.com',
        password: 'gaia',
        typez: "spectator"
    })
})
    .then(gaia=>{
        const event1Promise = Planner.Event.create({
            eventId: _id,
            name: "Paint and Sip",
            content: "An Interactive Paint and Sip event with Poetry",
                   }).then(event => {
            gaia.events.push(event)
         })
        const event2Promise = Planner.Event.create({
            eventId: _id,
            name: 'Day Party',
            content: 'A party to promote Poetry Pins',
                    }).then(event=>{
            gaia.events.push(event)
        })
        const event3Promise = Planner.Event.create({
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            
        }).then(event=>{
            gaia.events.push(event)
        })
        const event4Promise = Planner.Event.create({
            name: "Smoke and Paint",
            content: "An Interactive Paint and performance event that includes models, singers, dancers, Hip Hop artists, and more.",
            
        }).then(event=>{
            gaia.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise, event3Promise, event4Promise]).then(()=> {
            gaia.save()
        })
    })