import React, { useState } from "react"
import { BrowserRouter, Link } from 'react-router-dom'

import makePostRequest from '../axios-requests/signin.js'

const SigninForm = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    })



    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        console.log("current state:", state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit clicked')

        console.log("current state:", state)

        // should use get method to check if user is valid then login here ...

        // axios post request to register user - (change this for post request while signin in for user)
        makePostRequest({ "email": state.email, "password": state.password })
    }

    return (
        <div style={{ "backgroundColor": "lightblue" }}>
            Signin form
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" name="email" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="password">password</label><br />
                <input id="password" type="password" name="password" onChange={(e) => handleChange(e)} /><br />

                <input type="submit" />
            </form>

            Don't have an account ? <Link to={"/signup"}>Sign Up</Link>
        </div>
    )
}


export default SigninForm