import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GameDescription = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <Carousel className="border-top border-info-subtle" interval={4000}>
          <Carousel.Item>
            <img
              src="Multimedia/Ilustraciones/Marca/Caja (8).png"
              className="d-block w-100"
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item interval={4500}>
            <img
              src="Multimedia/Ilustraciones/Marca/Caja (9).png"
              className="d-block w-100"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item interval={4500}>
            <img
              src="Multimedia/Ilustraciones/Marca/Caja (10).png"
              className="d-block w-100"
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row className="bg-white p-5">
          <Col xs={6} className="p-4 ms-4">
            <h2>Contexto del juego</h2>
            <p className="p-1">
              Gloria Johnson, la ladrona de diamantes más famosa del mundo, ha
              logrado robar el diamante más valioso jamás conocido: el diamante
              "Ocean". Tras su captura, los detectives de las principales
              agencias de inteligencia se apresuraron a interrogarla, buscando
              la gloria de encontrar el preciado diamante 'Océano'. Pero Gloria,
              siempre astuta, no está dispuesta a revelar su secreto tan
              fácilmente. Ella ha propuesto un desafío: solo responderá
              preguntas si los detectives están dispuestos a participar en su
              juego.
              <br />
              <br />
              <strong className="text-info">
                ¿Qué detective será lo suficientemente astuto como para
                descubrir el paradero del diamante "Ocean"?
              </strong>
            </p>
          </Col>
          <Col xs={5} className="p-2 me-4 text-center">
            <img
              src="Multimedia/Ilustraciones/Personajes color/Gloria Johnson color.png"
              className="rounded-circle ms-2"
              width="300px"
              height="300px"
              alt="Gloria Johnson"
            />
          </Col>
        </Row>

        <Row className="bg-white p-2 border-bottom border-info-subtle border-2">
          <Col xs={3} className="p-5 bg-white"></Col>
          {[...Array(8)].map((_, index) => (
            <Col xs={1} key={index} className="p-2 d-flex justify-content-end">
              <img
                src={`Multimedia/Ilustraciones/Personajes color/Personaje${index + 1}.png`}
                className="rounded-circle me-2"
                width="250px"
                height="250px"
                alt={`Personaje ${index + 1}`}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row className="bg-white p-5 border-bottom border-info-subtle border-2">
          <Col xs={5} className="p-2 d-flex justify-content-end">
            <img
              src="Multimedia/Ilustraciones/Tableros/Europa Original Inglés w Rusia & Kosovo.jpg"
              className="rounded border border-dark border-4 ms-2"
              width="350px"
              height="350px"
              alt="Tablero"
            />
          </Col>
          <Col xs={5} className="p-5">
            <h2>Objetivo</h2>
            <p className="p-1">
              Descubre en qué país europeo se oculta el diamante "Ocean"
              utilizando tus habilidades deductivas. Los jugadores deben hacer
              preguntas estratégicas para acercarse cada vez más a la ubicación
              del diamante.
              <br />
              <br />
              <strong className="text-info">
                ¿En qué país estará escondido?
              </strong>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row className="bg-white p-5 border-bottom border-info-subtle border-2">
          <Col xs={5} className="p-5">
            <h2>¡Elige sabiamente!</h2>
            <p className="p-1">
              En este juego, cada carta presenta una pregunta que te acerca al
              objetivo final, pero el éxito no depende solo de la suerte: aquí
              necesitarás planificar estratégicamente cada respuesta para
              enfrentar los desafíos y superar a tus oponentes.
              <br />
              <br />
              <strong className="text-info">
                ¡Diversión, estrategia y aprendizaje, carta a carta!
              </strong>
            </p>
          </Col>
          {[...Array(3)].map((_, index) => (
            <Col
              xs={2}
              key={index}
              className="p-4 me-3 d-flex justify-content-end"
            >
              <img
                src={`Multimedia/Ilustraciones/Preguntas/${index + 4}.png`}
                className="rounded border border-dark border-4 ms-2"
                width="200px"
                height="300px"
                alt={`Pregunta ${index + 4}`}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="row bg-info p-5 text-white">
        <Col xs={6}>
          <h1 className="mb-5">Contact</h1>
          <a
            className="nav-link active mt-2 ms-4 fs-5"
            href="mailto:hiddendiamond@gmail.com"
            role="button"
          >
            <i
              className="me-3 fa-solid fa-envelope"
              style={{ color: "#fefefe" }}
            ></i>
            hiddendiamond@gmail.com
          </a>
          <a
            className="nav-link active mt-2 ms-4 fs-5"
            href="https://twitter.com/hiddendiamond"
            role="button"
          >
            <i
              className="me-3 fa-brands fa-twitter"
              style={{ color: "#ffffff" }}
            ></i>
            @hiddendiamond
          </a>
          <a
            className="nav-link active mt-2 ms-4 fs-5"
            href="https://instagram.com/hiddendiamond"
            role="button"
          >
            <i
              className="me-3 fa-brands fa-instagram"
              style={{ color: "#ffffff" }}
            ></i>
            @hiddendiamond
          </a>
          <a
            className="nav-link active mt-2 ms-4 fs-5"
            href="https://facebook.com/hiddendiamond"
            role="button"
          >
            <i
              className="me-3 fa-brands fa-facebook"
              style={{ color: "#ffffff" }}
            ></i>
            hiddendiamond
          </a>
          <a
            className="nav-link active mt-2 ms-4 fs-5"
            href="tel:+34617029184"
            role="button"
          >
            <i
              className="me-3 fa-solid fa-phone"
              style={{ color: "#ffffff" }}
            ></i>
            +34 617029184
          </a>
          <p className="text-start">
            HIDDEN DIAMOND® | Todos los derechos reservados
          </p>
        </Col>
        <Col xs={5} className="ms-4 ps-4">
          <img
            src="Multimedia/Ilustraciones/Marca/Marca Hidden Diamond sin fondo.png"
            className="ms-2"
            width="300px"
            height="300px"
            alt="Logo"
          />
        </Col>
      </Container>
    </>
  );
};

export default GameDescription;
