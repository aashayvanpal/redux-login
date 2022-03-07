const axios = require('axios')


const makeLoginRequest = async function makeGetRequest(payload) {
    // get all users collections 
    // find if credentials match with user data entered
    console.log('request payload', payload)
    let res = await axios.post('http://localhost:3001/login', payload)

    // let data = res.data
    console.log('res.data : ', res.data)
    window.location.href = "/home"

}



export default makeLoginRequest