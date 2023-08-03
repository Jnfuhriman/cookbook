const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema/schema');
const connectDB = require('./config/db.js');
const colors = require('colors');

require('dotenv').config();
const port = process.env.PORT || 3003;

const app = express();

connectDB();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

app.listen(port, console.log(`Server running on port ${port}`));