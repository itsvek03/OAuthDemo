const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String
    }
})
const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel