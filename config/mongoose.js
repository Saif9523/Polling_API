const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Polling_System');
mongoose.connect('mongodb://127.0.0.1:27017/myapp')

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;