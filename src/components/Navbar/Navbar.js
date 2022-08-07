import './Navbar.css'
import { IoOpenOutline } from "react-icons/io5";

const Navbar = () => {
    const newWindowIcon = <IoOpenOutline className="window-icon" />

    return ( 
        <nav className="navbar">
            <a href="#home">Home</a>       
            <a href="#projects">Projects</a>       
            <a href="#contacts">Contact</a>      
        </nav>
     );
}
 
export default Navbar;