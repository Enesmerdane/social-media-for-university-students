const passport = require("passport");

const verify = (req, res, resolve, reject) => async (error, user) => {
    console.log("verify a girdi");
    if (error || !user) {
        return reject(new Error("user not found"));
    }
    resolve();
};

const isAuth = () => async (req, res, next) => {
    console.log("isAuth a girdi");
    return new Promise((resolve, reject) => {
        passport.authenticate(
            "jwt",
            { session: false },
            verify(req, res, resolve, reject)
        )(req, res, next);
    })
        .then(() => {
            next();
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send({ message: "such user not found" });
        });
};

module.exports = { isAuth };
