module.exports = (req, res, next) => {
    let repository = req.app.get('books');

    repository.all().then( result => {
        if(result.length === 0)
        res.status(404).json({message: 'not found data'});
    });

    next();
};