import { Button, Container, Image } from 'react-bootstrap';
import image from '../images/developer.jpg';
import './HeroSection.css' 

export const HeroSection = () => {
  return (
    <Container className="HeroSection d-lg-flex">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Image
          src={image}
          roundedCircle
          style={{ border: "4px solid #537FE7",width:'15rem' }}
        />
        <h2 className="mt-2 writing-animation text-center text-muted d-lg-none fabiH2">
          Hi!, I'm Fabi{" "}
        </h2>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1
          style={{ fontSize: "30px", fontWeight: "bold", color: "#537FE7" }}
          className="mt-3"
        >
          FULL STACK WEB DEVELOPER JR
        </h1>
        <Container>
          <p
            style={{ textAlign: "justify", fontWeight: "bold" }}
            className="font-weight-bold text-muted"
          >
            I am seeking job opportunities that will allow me to grow as a full stack developer and continue my professional development within the IT field. My goal is to grow in experience and knowledge.
          </p>
        </Container>

        <Container className="d-flex gap-2 mt-2">
          <Button href='https://drive.google.com/file/d/1E2G7TGGEdYIzgzHmIfzqzO8qQ_dCZ9_s/view?usp=drive_link' target='_blank' style={{ backgroundColor: "#537FE7" }}>Download CV</Button>
          <Button style={{ backgroundColor: "#537FE7" }} href='https://github.com/fabiCoseglia' target="_blank">My Github</Button>
        </Container>
      </Container>
    </Container>
  );
}
