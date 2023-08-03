const RecipeType = require('../types/RecipeType.js');
const Recipe = require('../../mongoose/models/Recipe.js');
const { GraphQLList } = require('graphql');

module.exports = findAll = {
    type: new GraphQLList(RecipeType),
    resolve() {
        return Recipe.find();
    }
}