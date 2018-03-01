class bookRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     * return {promise <void>}
     * @param {Book} book
     */
    add(book) {
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher: book.getPublisher(),
            price: book.getPrice(),
            deleted_at: book.getDeleted_at()
        });
    }

    /**
     *
     * @param book
     * @return {promise <void>}
     */
    edit(book) {
        return this.connection('books').update({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher: book.getPublisher(),
            price: book.getPrice()
        }).where({id: book.getId()});
    }

    /**
     *
     * @return {promise <Book[]>}
     */
    all() {
        return this.connection.select('id','title', 'author', 'publisher', 'price').from('books')
            .where({deleted_at: 0});
    }

    /**
     *
     * @param {int} id
     * @return {promise <void>}
     */
    deleted_at(id) {
        return this.connection('books').update({deleted_at: new Date()}).where({id: id});
    }
}

module.exports = bookRepository;