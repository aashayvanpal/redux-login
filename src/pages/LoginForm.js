import React, { useState } from "react"

const LoginForm = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phonenumber: ""
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

    }

    return (
        <div style={{ "backgroundColor": "lightblue" }}>
            Login form
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor="name">Name</label><br />
                <input id="name" type="text" name="name" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" name="email" onChange={(e) => handleChange(e)} /><br />

                <label htmlFor="phonenumber">Phonenumber</label><br />
                <input id="phonenumber" type="number" name="phonenumber" onChange={(e) => handleChange(e)} /><br />

                <input type="submit" />
            </form>
        </div>
    )
}


export default LoginForm