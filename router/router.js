const express = require('express');
const Router = express.Router;
const Book = require('../app/book');
const checkLength = require('../middleware/check-length');
const checkNull = require('../middleware/check-null');

let router = new Router();

router.get('/books', (req, res) => {
    let repository = req.app.get('books');

    repository.all().then( result => {
        res.json(result);
    });
});

router.post('/book',checkNull,checkLength, (req, res) => {
    let repository = req.app.get('books');
    let book = new Book(req.body.title, req.body.author);
    book.setPublisher(req.body.publisher);
    book.setPrice(req.body.price);
    book.setDeleted_at(req.body.deleted_at);

    repository.add(book).then( () => {
        res.status(201).json({message: 'Success...!'});
    });
});

router.put('/book/:id',checkLength, (req, res) => {
    let repository =req.app.get('books');
    let book = new Book(req.body.title, req.body.author);
    book.setPublisher(req.body.publisher);
    book.setPrice(req.body.price);
    book.setDeleted_at(req.body.deleted_at);
    book.setId(req.params.id);

    repository.edit(book).then( () => {
        res.json({message: 'Success...!'});
    });
});

router.delete('/book/:id', (req, res) => {
    let repository = req.app.get('books');

    repository.deleted_at(req.params.id).then( () => {
        res.json({message: "Success...!"});
    });
});

module.exports = router;