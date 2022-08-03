import './Navbar.css'
// import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        // <nav>
        //     <Link to="/" > Home </Link>
        //     <Link to="/projects"> Projects </Link>
        //     <Link to="contact"> Contact </Link>
        // </nav>
        <nav >
            <a href="#home">Home</a>       
            <a href="#projects">Projects</a>       
            <a href="#contacts">Contact</a>       
        </nav>
     );
}
 
export default Navbar;