const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
    list : [{}],

})

const Games = mongoose.model('games', gamesSchema)

module.exports = Games