const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');

module.exports = RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        id:             { type: GraphQLID },
        name:           { type: GraphQLString },
        ingredients:    { type: new GraphQLList(GraphQLString) },
        directions:     { type: GraphQLString },
        yield:          { type: GraphQLString },
        credit:         { type: GraphQLString },
        thumbsUp:       { type: GraphQLString },
        createdBy:      { type: GraphQLString },
        createdOn:      { type: GraphQLString }
    }),
});