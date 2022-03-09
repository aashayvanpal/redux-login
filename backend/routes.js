
const db = require('./connection.js');
const User = require('./modals/User')

module.exports.login = function (req, res) {
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
}

module.exports.signup = function (req, res) {
    // console.log('req.body :', req.body)
    const user = new User(req.body)
    user.save(function (err, member) {
        if (err) res.json(err)
        else res.json(member)
    })
}