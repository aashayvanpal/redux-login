const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/redux-login', { useNewUrlParser: true, autoIndex: false })
    .then(() => {
        console.log('db connection successfully to redux-login ')
    })
    .catch(err => {
        console.error('Connection error :', e.message)
    })

const db = mongoose.connection

module.exports = db