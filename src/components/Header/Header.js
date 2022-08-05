import './Header.css'
import Navbar from "../Navbar/Navbar";
import MobileNavBar from '../MobileNavbar/MobileNavbar';
import { useState } from 'react';

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
            <h1>HA</h1>
            <Navbar />
            <MobileNavBar />
        </header>
     );
}
 
export default Header;