import { useState } from "react";
import {NavLink} from "react-router-dom";
import bxMenu from "../static/icons/bx-menu.svg";
import "./style.css";

function NavBar(props) {
  const [toggle,setToggle]=useState(true );
  let setclasses=(n)=>{
    if(toggle){
    return n=n+" hidden"
    }
    else{
      return n;
    }
  }
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">Logo</div>
          <div className={setclasses("menu-area ")}>
            <ul className="nav-list">
              {props.b.map((n) => (
                <li className="nav-link" key={n.color}>
                  <NavLink to={n.url} >
                    {n.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-icon" onClick={()=>{
            
            setToggle(!toggle)
          }}>
            <img src={bxMenu} alt="" srcset="" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
