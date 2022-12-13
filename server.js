//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, () => {
  console.log('connected')
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
app.use(cors())
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project


// Schema 

const Games = require('./models/games.js')
let arrSeed = []
const url = [`https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a`]
//___________________
// Routes
//___________________

// for (let i = 1; i < 6; i++){
  // axios.get(url)
  // .then({
  //   for (let i = 1; i < 6; i++ ){
  //     let resArray = response.data.results
  //     arrSeed.push(resArray[i])
  //   } 
  //   Games.create(arrSeed, () => {})
  // })



    app.post('/', (req, res) => {
        Games.create(req.body, (err, createdGames) => {
        // console.log(req.body)
        res.json(createdGames)
        })
    })
   
                             //get route grabbing all data
   app.get('/', (req, res) => {
     Games.find({}, (err, foundList) => {
       res.json(foundList)
     })
   })
   
                             //delete route..
   app.delete('/games/:id', (req, res) => {
     Games.findByIdAndRemove(req.params.id, (err, deletedGames) => {
       res.json(deletedGames)
     })
   })
   
                             //put route
   app.put('/games/:id', (req, res) => {
     Games.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGames) => {
       res.json(updatedGames)
     })
   })
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));