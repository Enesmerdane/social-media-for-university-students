const { User } = require("../models/user");

const authController = {
    async registerUser(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.register(email, password);
            res.status(201).send({ user });
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    },
};

module.exports = authController;
