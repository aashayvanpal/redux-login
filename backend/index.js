const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
var bodyParser = require('body-parser');
const db = require('./connection.js');
const loginController = require('./routes')
const membersController = require('./controllers/membersController')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Routes 

// Members routes
app.delete(`/deleteMember/:id`, membersController.deleteMember)
app.post('/addMember', membersController.addMember)
app.get('/getMembers', membersController.getMembers)


app.post('/login', loginController.login)
app.post('/signup', loginController.signup)


app.get('/', (req, res) => {
    res.send('hi!')
})
app.listen(3001, function () {
    console.log('listening to port :', 3001)
})