
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Tool from "./components/Tool";
import Contact from "./components/Contact";

function App() {


  return (<>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/tool" element={<Tool/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App