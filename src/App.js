import React from 'react'
import SignupForm from './pages/SignupForm.js'
import SigninForm from './pages/SigninForm.js'
import Home from './pages/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Routes> */}
        Redux Application


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
