class Book {

    /**
     *
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        this.title = title;
        this.author = author
    }

    /**
     *
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     *
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {int}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} publisher
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     *
     * @return {string}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     *
     * @param {float} price
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     *
     * @return  {float}
     */
    getPrice() {
        return this.price;
    }

    /**
     *
     * @param {string} deleted_at
     */
    setDeleted_at(deleted_at) {
        this.delete_at = deleted_at;
    }

    /**
     *
     * @return {string}
     */
    getDeleted_at() {
        return this.delete_at;
    }
}

module.exports = Book;