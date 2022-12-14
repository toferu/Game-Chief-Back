const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema ({
<<<<<<< HEAD
    name : "String",
=======
    name: "String",
>>>>>>> 5b285602c6cec9d77fb355a27820126c0fdd4d35
    list : [{}],

})

const Games = mongoose.model('game-lists', gamesSchema)

module.exports = Games

//heroku please