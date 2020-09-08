export default function (req, res, next) {
    if (!req.query.close) {
        return next();   
    }
    res.send("is Closed");
};