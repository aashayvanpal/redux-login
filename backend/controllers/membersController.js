const db = require('../connection')
const Member = require('../modals/Member')


module.exports.getMembers = function (req, res) {
    // console.log('req.body :', req.body)
    db.collection('members').find({}).toArray(function (err, results) {
        if (err) console.log(err)
        res.send(results)
    })
}

module.exports.addMember = function (req, res) {
    // console.log('req.body :', req.body)
    console.log('inside / addmember route')
    // db.collection('members').insertOne(req.body);
    console.log('req.body :', req.body)
    const member = new Member(req.body)

    member.save()
        .then(member => res.json(member))
        .catch(err => err)
}


module.exports.deleteMember = function (req, res) {
    console.log('req.params.id :', req.params.id)

    Member.findByIdAndDelete(req.params.id)
        .then(member => {
            if (member) {
                console.log('deleted member:', member)
                res.json(member)
            }
            else {
                res.json({ 'empyty': 'dude its empty' })
            }
        })
        .then(err => res.send(err))
    // res.send(deleted);
}