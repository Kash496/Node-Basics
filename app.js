const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const expressValidator = require('express-validator')
dotenv.config()

//DATABASE
mongoose.connect(process.env.MONGO_URI, 
   {
      useNewUrlParser: true
   }).then(() => console.log('DB connected'))

mongoose.connection.on('error', err => {
   console.log(`DB connection error ${err.message}`);
});
//BRING IN ROUTES
const postRoutes = require('./routes/post') 

//MIDDLE
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator());
app.use('/', postRoutes);


const port = process.env.PORT || 8080;

app.listen(port, () => {
   console.log(`Node API is listening on port: ${port}`) 
})