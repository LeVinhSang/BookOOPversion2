const express        = require('express');
const bodyParser     = require('body-parser');
const knex           = require('./database/config');
const router         = require('./router/router');
const factory        = require('./app/book-factory');
const app            = express();
const BodyRepository = require('./app/book-repository');

app.set('books', new BodyRepository(knex, factory));
app.use(bodyParser.json());
app.use(router);

app.listen(3000, () => {
    console.log('sever running');
});