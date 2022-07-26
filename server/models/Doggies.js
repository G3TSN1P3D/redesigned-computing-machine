const { Schema, model } = require('mongoose');

const doggieSchema = new Schema(
    {
        dogName: {
            type: String,
            required: true,
        },
        ownersName: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true,
            match: [/^\d{10}$/, "Must use a valid phone number"],
        },
        room: {
            type: Number,
            required: true,
        },
        crate: {
            type: Number,
            required: true,
        },
        checkIn: {
            type: Date,
            required: true,
            default: Date.now,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

    const Doggies = model("Doggies", doggieSchema)

module.exports = Doggies;