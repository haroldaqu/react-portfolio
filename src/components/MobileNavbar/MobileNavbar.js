import './MobileNavbar.css'
import { useState } from 'react';
import {  IoIosMenu } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";


const MobileNavBar = () => {
    const [hamMenuToggled, setHamMenuToggled] = useState(false)

    const hambMenuIcon = <IoIosMenu />
    const newWindowIcon = <IoOpenOutline />

    return ( 
        <nav className="mobile-navbar" >
            <button onClick={() => setHamMenuToggled(!hamMenuToggled)} > {hambMenuIcon} </button>
            {hamMenuToggled && <ul>
                <li ><a href="#home"  onClick={() => setHamMenuToggled(false)}>Home</a></li>
                <li><a href="#projects" onClick={() => setHamMenuToggled(false)} >Projects</a></li>
                <li><a href="#contacts" onClick={() => setHamMenuToggled(false)} >Contact</a></li>
            </ul>}
        </nav>
     );
}
 
export default MobileNavBar;