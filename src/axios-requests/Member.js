const axios = require('axios')

export const addMember = async function addMember(payload) {
    // post request to add new member
    console.log('request payload', payload)
    let res = await axios.post('http://localhost:3001/addMember', payload)

    // let data = res.data
    console.log('res.data : ', res.data)
    return (res.data)
}

export const getMembers = async function getMember() {
    // get request to fetch all members
    let res = await axios.get('http://localhost:3001/getMembers')

    // let data = res.data
    // console.log('res.data : ', res.data)
    return (res.data)
}

