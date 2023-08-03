const RecipeType = require('../types/RecipeType.js');
const Recipe = require('../../mongoose/models/Recipe.js');
const { GraphQLID } = require('graphql');

module.exports = findById = {
    type: RecipeType,
    args: { id: { type: GraphQLID } },
    resolve(_, args) {
        return Recipe.findById(args.id);
    }
}