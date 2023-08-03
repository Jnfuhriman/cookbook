const Recipe = require('../../mongoose/models/Recipe.js');
const RecipeType = require('../types/RecipeType.js');
const RecipeInputType = require('../types/RecipeInputType.js');

const {
    GraphQLNonNull
} = require('graphql');

module.exports = create = {
    type: RecipeType,
    args: { recipeInput: { type: new GraphQLNonNull(RecipeInputType) } },
    resolve(_, { recipeInput }) {
        //create a Recipe object
        const recipe = new Recipe({
            name:           recipeInput.name,
            ingredients:    recipeInput.ingredients,
            directions:     recipeInput.directions,
            yield:          recipeInput.yield,
            credit:         recipeInput.credit,
            createdBy:      recipeInput.createdBy,
            thumbsUp:       0,
            createdOn:      new Date(),
        });

        return recipe.save();
    }
}