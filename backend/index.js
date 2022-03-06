const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const db = require('./connection.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Routes 

app.get('/signin', function (req, res) {
    // console.log('req.body :', req.body)
    // db.collection('users').insertOne(req.body);
    res.send('User found successfully!');
})


app.post('/signup', function (req, res) {
    // console.log('req.body :', req.body)
    db.collection('users').insertOne(req.body);
    res.send('User data saved successfully!');
})

app.get('/', (req, res) => {
    res.send('hi!')
})
app.listen(3001, function () {
    console.log('listening to port :', 3001)
})