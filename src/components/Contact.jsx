import React from 'react'
import NavBar from './NavBar'

const Contact = () => {
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
        <div>contact</div>
    </div>
  )
}

export default Contact