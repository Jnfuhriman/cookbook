const Recipe = require('../../mongoose/models/Recipe.js');
const RecipeType = require('../types/RecipeType.js');

const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

module.exports = deleteById = {
    type: RecipeType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(_, args) {
        return Recipe.findByIdAndRemove(args.id);
    }
}