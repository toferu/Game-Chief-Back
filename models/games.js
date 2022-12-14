const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
    name : "String",
    list : [{}],

})

const Games = mongoose.model('game-lists', gamesSchema)

module.exports = Games

//heroku please