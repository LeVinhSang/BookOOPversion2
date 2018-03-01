module.exports = (req, res, next) => {
    if(req.body.title) {
        if(req.body.title.length > 39) {
            return res.json({message: 'title must < 40 character'});
        }
    }

    if(req.body.author) {
        if(req.body.author.length > 99) {
            return res.json({message: 'author must < 100 character'});
        }
    }

    next();
};