import { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [contacted, setContacted] = useState(false) 

    const contactHandle = (e) => {
        e.preventDefault()
        setContacted(true)
    }

    return ( 
        <main className="contacts"  id="contacts">
            <h1>Contact Me</h1>
            {!contacted ? <form action="https://formsubmit.co/haqu21@gmail.com" method="POST" >
                <input type="text"  placeholder="Name (optional)" />
                <input required type="email" placeholder="Email"/>
                <textarea required name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                <button onClick={(e) => contactHandle(e)} > Submit </button>
            </form> :
                <h2>Thank you for your message and for checking out my portfolio!</h2>
            }
        </main>
     );
}
 
export default Contact;