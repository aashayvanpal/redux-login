const axios = require('axios')


const makePostRequest = async function makePostRequest(payload) {

    let res = await axios.post('http://localhost:3001/signup', payload)

    // let data = res.data
    console.log('res.data : ', res.data)

}



export default makePostRequest