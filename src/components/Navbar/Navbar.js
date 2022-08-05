import './Navbar.css'
// import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <a href="#home">Home</a>       
            <a href="#projects">Projects</a>       
            <a href="#contacts">Contact</a>      
            <a> Resume </a>      
        </nav>
     );
}
 
export default Navbar;