import React, { useState } from "react"
import { BrowserRouter, Link } from 'react-router-dom'

const SignupForm = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
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

                <input type="submit" />
            </form>

            Already have an account ? <Link to={"/signin"}>Sign in</Link>
        </div>
    )
}


export default SignupForm