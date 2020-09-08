export default function (req, res, next) {
    if (req.query.show) {
        return next();
    }
    return res.send("Categories");
};