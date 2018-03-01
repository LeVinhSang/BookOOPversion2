const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('./database/config');
const router = require('./router/router');

const bodyRepository = require('./app/book-repository');

app.set('books', new bodyRepository(knex));
app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
    console.log('sever running');
});