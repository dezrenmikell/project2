
require('dotenv').config()
const mongoose = require("mongoose")

// mongoose.connect("process.env.MONGODB_URI").then(() => {
//   console.log("MONGODB is now connected")
// })

// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/eventPlanner');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

module.exports = mongoose;