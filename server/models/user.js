const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
});

const userModel = mongoose.model("User", userSchema);

modules.exports = userModel;