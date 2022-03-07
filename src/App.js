import React from 'react'
import SignupForm from './pages/SignupForm.js'
import SigninForm from './pages/SigninForm.js'
import HomePage from './pages/HomePage.js'
import LandingPage from './pages/LandingPage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Routes> */}
        Redux Application


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
