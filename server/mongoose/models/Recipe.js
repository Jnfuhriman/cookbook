const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    ingredients: {
        type: [String]
    },
    directions: {
        type: String,
    },
    yield: {
        type: String
    },
    credit: {
        type: String
    },
    thumbsUp: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdOn: {
        type: String
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);