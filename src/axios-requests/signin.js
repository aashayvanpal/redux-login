const axios = require('axios')


const makePostRequest = async function makePostRequest(payload) {

    let res = await axios.post('http://localhost:3001/postSignin', payload)

    // let data = res.data
    console.log('res.data : ', res.data)

    // makePostRequest.then(res => console.log(res))
    // makePostRequest.catch(msg => console.log(msg))
}



export default makePostRequest