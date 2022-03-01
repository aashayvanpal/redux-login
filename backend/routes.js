const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const db = require('../backend/index.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Routes 


app.post('/postSignin', function (req, res) {
    // console.log('req.body :', req.body)
    // res.send('post request sent successfully routes!')
    db.collection('users').insertOne(req.body);
    res.send('Data received:');
})

app.get('/', (req, res) => {
    res.send('hi!')
})
app.listen(3001, function () {
    console.log('listening to port :', 3001)
})