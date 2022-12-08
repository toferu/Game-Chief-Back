const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
    name : "String",
    image : "String",
    relDate : "String",
    genre : "String",
    platform : "String"
})

const Games = mongoose.model('games', gamesSchema)

module.exports = Games