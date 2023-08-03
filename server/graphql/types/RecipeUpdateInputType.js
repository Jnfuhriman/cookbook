const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');



module.exports = RecipeUpdateInputType = new GraphQLInputObjectType({
    name: 'RecipeUpdateInput',
    fields: () => ({
        id:             { type: GraphQLNonNull(GraphQLID) },
        name:           { type: GraphQLNonNull(GraphQLString) },
        ingredients:    { type: GraphQLNonNull(new GraphQLList(GraphQLString)) },
        directions:     { type: GraphQLNonNull(GraphQLString) },
        yield:          { type: GraphQLString },
        credit:         { type: GraphQLString }
    })
});