const mongoose = require('mongoose');

//Our Schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISH'],
        default: 'DRAFT'
    }
}, {
    timestamps: true
});

module.exports = mongoose.modul('Blog', BlogSchema);