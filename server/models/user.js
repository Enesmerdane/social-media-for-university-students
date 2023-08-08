const mongoose = require("mongoose");
const validator = require("validator");

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

const User = mongoose.model("User", userSchema);
module.exports = { User };
