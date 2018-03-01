module.exports = (req, res, next) =>{
    if(!req.body.title) {
        return res.json({message: 'title must not null'});
    }

    if(!req.body.author) {
        return res.json({message: 'author must not null'});
    }

    if(!req.body.price) {
        req.body.price = 0;
    }

    if(!req.body.deleted_at) {
        req.body.deleted_at = 0;
    }

    next();
};