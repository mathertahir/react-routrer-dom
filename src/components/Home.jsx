import React from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from './NavBar';

const Home = () => {
   let navigate=useNavigate();
    const c=[{
        name:"Home",
        color:"white",
        url:"/"
    },
    {
        name:"About",
        color:"white",
        url:"/about"
    },
    {
        name:"Tools",
        color:"white",
        url:"/tool"
    },
    {
        name:"Contact",
        color:"white",
        url:"/contact"
    }]
  return (
    <div>
        <NavBar b={c}/>
        <div>Home</div>
        <button onClick={()=>{
            navigate("/about")

        }}>about</button>
        </div>
  )
}

export default Home