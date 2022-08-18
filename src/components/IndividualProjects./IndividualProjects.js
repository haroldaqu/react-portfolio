import './IndividualProjects.css'
import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

const IndividualProjects = () => {

    const projects = [
        {
            id: 1,
            src: require('./bucketlist-ss.png'),
            tech_stack: ['CSS', 'React', 'Google Maps Api', 'Firebase'],
            title: 'Food Bucketlist (Full Stack) ',
            description: 'A platform where users create a bucket list of food destinations to visit in the future',
            live: 'https://foodbucketlist.netlify.app/',
            code: 'https://github.com/haroldaqu/food-travel-bucketlist'
        },
        {
            id: 2,
            src: require('./nba-player-search-ss.png'),
            title: 'NBA Player Search', 
            tech_stack: [ 'HTML', 'CSS', 'JavaScript'],
            description: 'An application where users can search nba players by their name or team to view their seasonal stats.',
            live: 'https://searchyourplayer.netlify.app',
            code: 'https://github.com/haroldaqu/search-nba-players'
        },
        {
            id: 3,
            src: require('./phils-cuisine-ss.png'),
            tech_stack: [ 'HTML', 'CSS', 'JavaScript', 'Webpack'],
            title: 'Filipino Restaurant',
            description: 'A single page website consturcted with JavaScript, Webpack and DOM manipulation through one div in HTML.',
            live: 'https://philscuisine.netlify.app/',
            code: 'https://github.com/haroldaqu/restaurant-project',
        },

    ]

    const gitHubIcon = <FiGithub />
    const newWindowIcon = <IoOpenOutline />


    return ( 
        <main className="individual-projects" id="projects">
            {projects.map(project => 
            <div className="wrapper" key={project.id} >
                <div className="image" >
                    <img src={project.src} alt="" />
                </div>
                <div className="tech-stack-container">
                    {project.tech_stack.map((tech, i) => <p className='tech-stack' key={i+10} > {tech} </p> )}
                </div> 
                <div className='project-contents'>        
                    <h1> {project.title} </h1>
                    <p> {project.description} </p>
                    <div className="projects-button">
                        <a
                            href={project.code}
                            target="_blank"
                        > { gitHubIcon }  Code </a>
                        <a
                            href={project.live}
                            target="_blank"
                        > { newWindowIcon }  Live </a>
                    </div>
                </div>
            </div>
            )}
        </main>
     );
}
 
export default IndividualProjects;