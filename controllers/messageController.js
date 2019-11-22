const message = (req, res, next)=>{
    res.render('message', {});
}

module.exports = {
    message:message
};