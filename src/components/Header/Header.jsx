import React from 'react';
import h from './Header.module.css';
import logo1 from './logo1.png';

const Header = () => {
    return(
        <header className= {h.header}>
            <div>
               <img src={logo1}></img>
               SOCIAL NETWORK
            </div>
            </header>
    )
        
            
        

    
}
export default Header;