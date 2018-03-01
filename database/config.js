const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password: '1',
        database : 'CRUDBook'
    }
});

module.exports = knex;
