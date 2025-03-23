import Navbar from "./assets/Components/Navbar"
import Footer from "./assets/Components/Footer"
import Home from "./assets/Components/Home"
import Teachers from "./assets/Components/Teachers"
import ContactUs from "./assets/Components/ContactUs"
import Holidays from "./assets/Components/Holidays"
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import "./App.css"
import 'animate.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Holidays" element={<Holidays />} />
        
        </Routes>
      
      </BrowserRouter>

    </>
  )
}
export default App

// export default App
// import { useState } from "react"
// const App=()=>{
//   const [show , setShow] = useState(true)
//   const hide = ()=>{
//       setShow(!show)
//   }
//   const [fontSize , setFontSize] = useState(40)
//   const size = ()=>{
//       setFontSize(fontSize === 40 ? 100 : 40)
//   }
//     return(
//       <div>
//         <h1 style={{
//           fontSize : fontSize,
//           color : show ? 'blue' : 'red'
//         }}>CodingGuru</h1>
//         {show ? <h1>Guru</h1> : <h1>Divya</h1>}
//         <button onClick={()=>{hide(); size();}}>Test</button>
//       </div>
//     )
// }
// export default App