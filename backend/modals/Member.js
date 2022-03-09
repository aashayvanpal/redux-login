const mongoose = require('mongoose')

const Schema = mongoose.Schema

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
})


const Member = mongoose.model('members', memberSchema)

module.exports = Member