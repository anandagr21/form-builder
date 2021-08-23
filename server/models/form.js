const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const formSchema = new mongoose.Schema({
    questions: {
        type: Array,
        default: []
    },
    form_id: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },
    form_name: {
        type: String,
        trim: true,
        required: true
    },
    form_desc: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);