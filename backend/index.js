const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const db = require('./connection.js');
const { isCompositeComponent } = require('react-dom/test-utils');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Routes 

app.post('/login', function (req, res) {
    // console.log('req.body :-', req.body)
    // console.log('req.body email:-', req.body.email)
    // console.log('req.body password:-', req.body.password)
    const found = db.collection('users').findOne({ "email": req.body.email })

    found.then(result => {
        console.log('found:', result)
        if (req.body.password == result.password) {
            console.log('passwords are matching!')
            res.send(result);
        } else {
            res.send('not found');
        }
    })
    found.catch(err => console.log(err))
})


app.get('/getMembers', function (req, res) {
    // console.log('req.body :', req.body)
    db.collection('members').find({}).toArray(function (err, results) {
        if (err) console.log(err)
        res.send(results)
    })
})

app.post('/addMember', function (req, res) {
    // console.log('req.body :', req.body)
    db.collection('members').insertOne(req.body);
    console.log('req.body :', req.body)
    res.send('Member data saved successfully!');
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