const jwt = require("jsonwebtoken");

function jwtAuth(req, res, next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).send("NO TOKEN");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).send("TOKEN ERROR");
        }
        req.user = user;
        next();
    });
}

module.exports = jwtAuth;