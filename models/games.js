const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
    name: "String",
    list : [{}],

})

const Games = mongoose.model('games', gamesSchema)

module.exports = Games