const User = require('../models/User')
const {Event} = require('../models/Planner')

//clear database so there won't be repeats
User.deleteMany()
    .then(()=>{
        return Event.deleteMany()
    })
//create first User(planner)    
    .then(()=>{
        return User.create({
            name: "B-Roc(k)",
            email: 'brock@gmail.com',
            password: 'brock',
            typez: "planner",
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/28055885_10211577792420087_7527610451970020366_n.jpg?_nc_cat=102&_nc_ht=scontent-atl3-1.xx&oh=e7c908091efb12fcfa475dfcae76d97a&oe=5D1414F2"
        })
    })
//create events for the first user ()   
    .then(brock=>{
        const event1Promise = Event.create({
            name: "Paint and Sip",
            content: "An Interactive Paint and Sip event with Poetry",
            author: brock._id,
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/43269753_10213237457350673_3484199512010915840_n.jpg?_nc_cat=107&_nc_ht=scontent-atl3-1.xx&oh=98541d2c780a727fd3c1d384c852c1f5&oe=5CDCDFE8"
        }).then(event => {
            brock.events.push(event)
         })
        const event2Promise = Event.create({
            name: 'Day Party',
            content: 'A party to promote Poetry Pins',
            author: brock._id,
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/26238998_10211253604715597_8531373911929600517_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=77e862b4063ae5a9bbf9156c5bc66bb2&oe=5D188A76"
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
        typez: "planner",
        image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/39746397_10214942642096879_24475734424682496_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=2aeb58fc4b5a327fad49ad6f4ce6603e&oe=5CDE0A93"
    })
})
//create events for second user
    .then(juice=>{
        const event1Promise = Event.create({
            
            name: "Paint and Sip",
            content: "An Interactive Paint and Sip event with Poetry",
            author: juice._id,
            image:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/43351585_10215314382270151_2009894525291462656_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=7076fdc24449f7e6cde83e0cd1ad711e&oe=5D12C57B"       
            }).then(event => {
            
            juice.events.push(event)
         })
        const event2Promise = Event.create({
            
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            author: juice._id,
            image:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/43269753_10213237457350673_3484199512010915840_n.jpg?_nc_cat=107&_nc_ht=scontent-atl3-1.xx&oh=98541d2c780a727fd3c1d384c852c1f5&oe=5CDCDFE8"

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
        typez: "planner",
        image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/14520623_10154574748274819_6845727103713799805_n.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=87eb99c693548675de8de66914c28cdc&oe=5D0EF365"
    })
})
//create events for the third user
    .then(odinero=>{
        const event1Promise = Event.create({
            
            name: "Smoke and Paint",
            content: "An Interactive Paint and performance event that includes models, singers, dancers, Hip Hop artists, and more.",
            author: odinero._id,
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/45291708_10205258469457686_7476594393596559360_n.jpg?_nc_cat=106&_nc_ht=scontent-atl3-1.xx&oh=45bd699281a78691f828e4859dd8ecb0&oe=5D2889D5"
        }).then(event => {
            odinero.events.push(event)
         })
        const event2Promise = Event.create({
            
            name: 'Dopetea and Poetry',
            content: 'A poetry event featuring Dopetea( A brand of tea by Poet-tea and Odinero that contains Kava and Kratom.',
            author: odinero._id,
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/43269753_10213237457350673_3484199512010915840_n.jpg?_nc_cat=107&_nc_ht=scontent-atl3-1.xx&oh=98541d2c780a727fd3c1d384c852c1f5&oe=5CDCDFE8"
        }).then(event=>{
            odinero.events.push(event)
        })
        return Promise.all([event1Promise, event2Promise]).then(()=> {
            odinero.save()
        })
    })
