import React from 'react';
import { Button, Container } from 'react-bootstrap';
import contactMe from '../images/contactMe.png';

export const ContactMe = () => {

    const phoneNumber = '+5491124561727'; 
    const emailAddress = 'fabiancoseglia@gmail.com'; 

    const linkedin = 'https://www.linkedin.com/in/fabicoseglia/';
  
    const handleEmailButtonClick = () => {
        const emailAddress = "fabiancoseglia@gmail.com";
        const subject = "Email Subject";
        const body = "Email Body";

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, "_blank");
    };

    return (
        <Container className='card p-3 col-11 col-lg-6' style={{ borderColor: '#537fe7' }}>
            <h2 className="text-center mb-4 mt-1"
                style={{ fontSize: "45px", color: '#537fe7' }} id='contact'>Contact Me</h2>
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <img src={contactMe} alt="Image" />
                <p>If you're interested in my profile, you can send me an email or contact me via LinkedIn:</p>
                <div>
                    <Button variant="danger" onClick={handleEmailButtonClick} className='m-2'>
                        Send Email
                    </Button>
                    <Button style={{ backgroundColor: "#537FE7" }} href={linkedin} target="_blank">
                        LinkedIn
                    </Button>
                </div>
            </Container>
        </Container>
    );
}
