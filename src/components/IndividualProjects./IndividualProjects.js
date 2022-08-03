// import './IndividualProjects.css'
import { FaGithubSquare } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";

const IndividualProjects = () => {
    return ( 
        <div className="individual-projects">
            <div className="image">
                {/* <img src={require("./nba-player-search-ss.png")} alt="" /> */}
            </div>
            <div className='project-contents'>
                <h1>Project Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus ad! Atque eum officia aspernatur rem eligendi quas obcaecati quae, vero non accusantium nemo dolorum totam. Modi eos reprehenderit soluta!</p>
                <div className="projects-button">
                    <div className="button-wrapper">
                        <IoIosOpen className='btn-icon'/>
                        <button> Demo </button>
                    </div>
                    <div className="button-wrapper">
                        <FaGithubSquare className='btn-icon'/>
                        <button> Code </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default IndividualProjects;