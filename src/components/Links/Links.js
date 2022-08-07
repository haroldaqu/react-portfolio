import './Links.css'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { GrDocumentUser } from "react-icons/gr";
import { RiFileUserLine } from "react-icons/ri";
import { useEffect, useState } from 'react';

const Links = () => {
    const [resIcon, setResIcon] = useState(true)
    const [gitIcon, setGitIcon] = useState(true)
    const [liIcon, setLiIcon] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setResIcon(false)
            setGitIcon(false)
            setLiIcon(false)
        }, '7500')
    },[])

    const resumeIcon = <RiFileUserLine />
    const gitHubIcon = <FiGithub />
    const linkedInIcon = <AiOutlineLinkedin />
    

    return ( 
        <div className="links">
            <a
                href="https://drive.google.com/file/d/1dZ_7NMbKstRjIguFZhIg7142hl5sXQVU/view?usp=sharing"
                target="_blank"
                onMouseEnter={() => setResIcon(true)}
                onMouseLeave={() => setResIcon(false)}
            > { resumeIcon }  {resIcon ? 'Resume' : ''}</a>
            <a
                href="https://github.com/haroldaqu"
                target="_blank"
                onMouseEnter={() => setGitIcon(true)}
                onMouseLeave={() => setGitIcon(false)}
            > { gitHubIcon } {gitIcon ? 'GitHub' : ''} </a>
            <a
                href="https://linkedin.com/in/harold-aquino"
                target="_blank"
                onMouseEnter={() => setLiIcon(true)}
                onMouseLeave={() => setLiIcon(false)}
            > { linkedInIcon } {liIcon ? 'LinkedIn' : ''} </a>
        </div>
     );
}
 
export default Links;