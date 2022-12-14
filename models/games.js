const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
    list : [{}],

})

const Games = mongoose.model('game-lists', gamesSchema)

module.exports = Games

//heroku please