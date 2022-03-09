import React, { useState } from "react"
import { BrowserRouter, Link } from 'react-router-dom'
import makePostRequest from '../axios-requests/signup.js'


const SignupForm = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
        userType: ''
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

        // axios post request to register user 
        makePostRequest({
            name: state.name,
            email: state.email,
            phonenumber: state.phonenumber,
            password: state.password,
            userType: state.userType,
        })
        window.location.href = 'signin'
    }

    return (
        <div style={{ "backgroundColor": "lightblue" }}>
            Signup form
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor="name">Name</label><br />
                <input id="name" type="text" name="name" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" name="email" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="phonenumber">Phonenumber</label><br />
                <input id="phonenumber" type="number" name="phonenumber" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="password">password</label><br />
                <input id="password" type="password" name="password" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="confirmpassword">Confirm password</label><br />
                <input id="confirmpassword" type="password" name="confirmpassword" onChange={(e) => handleChange(e)} /><br />

                <select name="userType" id="userType" onChange={(e) => handleChange(e)}>
                    <option value="--" defaultValue={"--"}>--</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                    <option value="Company">Company</option>
                </select>

                <input type="submit" />
            </form>

            Already have an account ? <Link to={"/signin"}>Sign in</Link>
        </div>
    )
}


export default SignupForm