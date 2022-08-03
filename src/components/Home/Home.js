import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { FaHtml5, FaCss3Alt, FaJs, FaReact  } from 'react-icons/fa';

const Home = () => {


    return ( 
        <main className="home" id="home" >
            <div className="home-content">
                <span className='title' >HI, I AM A FRONT END DEVELOPER</span>
                <span className='name' >Harold Aquino</span>
                <span className='interest' > I enjoy coffee, hiking, and basketball!</span>
            </div>
            <div className="skills">
                <div className="wrapper">
                    <h1>  Skills </h1>
                    <p>  <FaHtml5 className='icon' /> HTML</p>
                    <p> <FaCss3Alt className='icon' /> CSS</p>
                    <p ><FaJs className='icon' /> JavaScript</p>
                    <p > <FaReact className='icon' /> React</p>
                </div>
            </div>
        </main>
     );
}
 
export default Home;