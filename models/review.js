const mongoose = require('mongoose')



const reviewSchema = new mongoose.Schema ({
    name : "String",
    image : "String",
    genre : "String", 
    platform : "String"

})

const Review = mongoose.model('reviews', reviewSchema)

module.exports = Review