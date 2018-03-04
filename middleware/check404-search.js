module.exports = (req, res, next) => {
    let repository = req.app.get('books');

    repository.search(req.params.id).then( result => {
        if(result.length === 0)
            res.status(404).json({message: 'not found data'});
    });

    next();
};