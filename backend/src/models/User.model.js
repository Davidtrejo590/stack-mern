const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        requiered: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});


module.exports = model('User', userSchema);