import { groupCollapsed } from 'console';
import express from 'express';
import { connect } from './configs/database.js';
import graphql from './configs/graphql.js';

const app = express();
const port = 3333;
const host = '0.0.0.0';

app.use(express.json());

connect();

graphql(app);

app.listen({ port, host }, () => {
    console.log('🚀 Server ready');
});
