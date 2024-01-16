import mongoose from "mongoose";

const infoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Info = mongoose.model('Info', infoSchema)