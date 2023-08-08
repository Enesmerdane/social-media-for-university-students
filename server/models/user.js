const mongoose = require("mongoose");
const validator = require("validator");

const { isUniversityEmail } = require("../utils");

require("dotenv").config();

const userScheme = mongoose.Schema({
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
