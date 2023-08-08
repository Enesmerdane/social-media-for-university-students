const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { isUniversityEmail } = require("../utils");

require("dotenv").config();

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
            if (!isUniversityEmail(value)) {
                throw new Error("Has to be university email");
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
});

userSchema.statics.register = async (email, password) => {
    try {
        const user = new User({ email, password });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

userSchema.pre("save", async function (next) {
    let user = this;

    if (user.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
