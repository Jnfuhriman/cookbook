const Recipe = require('../../mongoose/models/Recipe.js');
const RecipeType = require('../types/RecipeType.js');
const RecipeUpdateInputType = require('../types/RecipeUpdateInputType.js');

const {
    GraphQLNonNull
} = require('graphql');

module.exports = updateById = {
    type: RecipeType,
    args: { recipeUpdateInput: { type: new GraphQLNonNull(RecipeUpdateInputType) } },
    resolve(_,{ recipeUpdateInput }) {
        return Recipe.findByIdAndUpdate(
            recipeUpdateInput.id, 
            {
                $set: {
                    name:           recipeUpdateInput.name,
                    ingredients:    recipeUpdateInput.ingredients,
                    directions:     recipeUpdateInput.directions,
                    yield:          recipeUpdateInput.yield,
                    credit:         recipeUpdateInput.credit
                },
            },
            { new: true }
        );
    }
}