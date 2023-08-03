const findAll = require('../queries/FindAll.js');
const findById = require('../queries/FindById.js');
const create = require('../mutations/Create.js');
const updateById = require('../mutations/UpdateById.js');
const deleteById = require('../mutations/DeleteById.js');

const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        recipes: findAll,
        recipe: findById,
    }
});

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRecipe: create,
        updateRecipe: updateById,
        deleteRecipe: deleteById
    }
});

module.exports = new GraphQLSchema({
    query,
    mutation
});