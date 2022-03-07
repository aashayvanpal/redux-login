import React from 'react'
import { Link } from 'react-router-dom'

const landingPage = () => {
    return (
        <div>
            <h1>home page</h1>
            <Link to="signup"><h2>Signup</h2></Link>
            <Link to="signin"><h2>Sign in</h2></Link>
        </div>
    )
}

export default landingPage