import React from 'react'
import NavBar from './NavBar'

const Tool = () => {
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
        <div>Tool</div>
    </div>
  )
}

export default Tool