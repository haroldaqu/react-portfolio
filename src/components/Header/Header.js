import './Header.css'
import Navbar from "../Navbar/Navbar";
import MobileNavBar from '../MobileNavbar/MobileNavbar';
import { useState } from 'react';
import Links from '../Links/Links';
import { Link } from 'react-router-dom';

const Header = () => {

    const [bgColor, setBgColor] = useState(false)
    const changeBgColor = () => {
        if (window.scrollY >= 10) {
            setBgColor(true)
        }
        else {
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', changeBgColor)

    return ( 
        <header className={bgColor ? "bgColor" : null } >
            <div className="left-container">
                <h1> HA </h1>
                <Links />
            </div>
            <Navbar />
            <MobileNavBar />
        </header>
     );
}
 
export default Header;