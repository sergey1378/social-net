import React from 'react';
import { NavLink } from 'react-router-dom';
import n from'./Navbar.module.css'; 

const Navbar = () => {
    return(
        <nav className= {n.nav}>
            
               <div ClassName= {`${n.nav} ${n.active}`}><NavLink to="/profile">Profile</NavLink></div>
               <div><NavLink to="/dialogs">Dialogs</NavLink></div>
               <div><NavLink to="/news">News</NavLink></div>
               <div><NavLink to="/music">Music</NavLink></div>
        </nav>
    )
        
            
        

    
}
export default Navbar;