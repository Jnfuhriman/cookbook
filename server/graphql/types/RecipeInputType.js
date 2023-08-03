const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

module.exports = RecipeInputType = new GraphQLInputObjectType({
    name: 'RecipeInput',
    fields: () => ({
        name:           { type: GraphQLNonNull(GraphQLString) },
        ingredients:    { type: GraphQLNonNull(new GraphQLList(GraphQLString)) },
        directions:     { type: GraphQLNonNull(GraphQLString) },
        yield:          { type: GraphQLString },
        credit:         { type: GraphQLString },
        createdBy:      { type: GraphQLNonNull(GraphQLString) },
    })
});