const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    dui: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
