import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Button, Card, Container } from "react-bootstrap";
import drinkup from "../images/drinkup.png";
import emilia from "../images/emilia.png";
import pokedex from "../images/pokedex.png";
import tiendaFake from "../images/tiendaFake.png";

import "swiper/css/effect-fade"; // Import fade effect styles from Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const Slider = () => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Card
          style={{
            width: "18rem",
            height: "42rem",
            borderColor: "#537fe7",
            margin: "0 auto",
          }}
        >
          <Card.Img variant="top" src={drinkup} />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Drink Up</Card.Title>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Project:</span> Landing page
              where you can select a category of drinks with recipes.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Features:</span> Display
              products fetched from an external API, shopping cart with
              implemented functionalities.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Technologies:</span> React,
              Axios, user interface created with Chakra UI.
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
              <Button
                variant="primary"
                href="https://drink-up-kappa.vercel.app/"
                target="_blank"
              >
                Deployed
              </Button>
              <Button
                variant="primary"
                href="https://github.com/fabiCoseglia/Drink-Up"
                target="_blank"
              >
                GitHub
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          style={{
            width: "18rem",
            height: "42rem",
            borderColor: "#537fe7",
            margin: "0 auto",
          }}
        >
          <Card.Img variant="top" src={pokedex} />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Challenge PokeDex</Card.Title>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Project:</span> Frontend
              challenge to create a PokeDex by calling an external API using
              React.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Features:</span> Show all
              Pokemons, search for a Pokemon, display Pokemon details.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Technologies:</span> React,
              Axios, useContext for providing information.
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
              <Button
                variant="primary"
                href="https://poke-dex-react.vercel.app/"
                target="_blank"
              >
                Deployed
              </Button>
              <Button
                variant="primary"
                href="https://github.com/fabiCoseglia/pokeDexReact"
                target="_blank"
              >
                GitHub
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          style={{
            width: "18rem",
            height: "42rem",
            borderColor: "#537fe7",
            margin: "0 auto",
          }}
        >
          <Card.Img variant="top" src={emilia} />
          <Card.Body className="d-flex flex-column justify-content-between text-center">
            <Card.Title className="mb-3">Emilia Cole</Card.Title>
            <Card.Text className="mb-2">
              <span style={{ fontWeight: "bold" }}>Project:</span> Rework of a
              landing page showcasing information about an artist, initially
              built with MVC, now 100% in React.
            </Card.Text>
            <Card.Text className="mb-2">
              <span style={{ fontWeight: "bold" }}>Features:</span> Show
              information as a portfolio for a client.
            </Card.Text>
            <Card.Text className="mb-3">
              <span style={{ fontWeight: "bold" }}>Technologies:</span> Only
              React, this is a Landing page example
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
              <Button
                variant="primary"
                href="https://project-emily-react.vercel.app/"
                target="_blank"
              >
                Deployed
              </Button>
              <Button
                variant="primary"
                href="https://github.com/fabiCoseglia/ProjectEmily-React"
                target="_blank"
              >
                GitHub
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          style={{
            width: "18rem",
            height: "42rem",
            borderColor: "#537fe7",
            margin: "0 auto",
          }}
        >
          <Card.Img variant="top" src={tiendaFake} />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Tienda-Fake</Card.Title>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Project:</span> Ecommerce that consume a API, login and auth added to this project.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Features:</span> Display
              products fetched from an external API, shopping cart with
              implemented functionalities, login and auth funcionalities.
            </Card.Text>
            <Card.Text className="text-center">
              <span style={{ fontWeight: "bold" }}>Technologies:</span> React,
              Axios, React-router-dom, sessionStorage.
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
              <Button
                variant="primary"
                href="https://tienda-fake-bay.vercel.app/"
                target="_blank"
              >
                Deployed
              </Button>
              <Button
                variant="primary"
                href="https://github.com/fabiCoseglia/tiendaFake"
                target="_blank"
              >
                GitHub
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
