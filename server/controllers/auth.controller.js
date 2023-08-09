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
    async loginUser(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                console.log("here we are");
                res.status(400).send({ message: "No user" });
                return;
            }
            if (!(await user.comparePassword(password))) {
                res.status(400).send({ message: "Bad password" });
                return;
            }

            const token = user.generateAuthToken();

            res.cookie("smfus-access-token", token)
                .status(200)
                .send({ user, token });
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    },
    async authTest(req, res) {
        res.json({ message: "authtest successful" });
    },
};

module.exports = authController;
