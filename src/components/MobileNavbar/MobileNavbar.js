import './MobileNavbar.css'
import {  IoIosMenu } from "react-icons/io";
import { useState } from 'react';


const MobileNavBar = () => {
    const [hamMenuToggled, setHamMenuToggled] = useState(false)

    const hambMenuIcon = <IoIosMenu />

    return ( 
        <nav className="mobile-navbar" >
            <button onClick={() => setHamMenuToggled(!hamMenuToggled)} > {hambMenuIcon} </button>
            {hamMenuToggled && <ul>
                <li ><a href="#home"  onClick={() => setHamMenuToggled(false)}>Home</a></li>
                <li><a href="#projects" onClick={() => setHamMenuToggled(false)} >Projects</a></li>
                <li><a href="#contacts" onClick={() => setHamMenuToggled(false)} >Contact</a></li>
                <li><a  onClick={() => setHamMenuToggled(false)} >Resume</a></li>
            </ul>}
        </nav>
     );
}
 
export default MobileNavBar;