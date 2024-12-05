import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomePage from "./pages/HomePage";
import DrawingCanvas from "./pages/DrawingCanvas";
import NavBar from "./componentes/NavBar";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<DrawingCanvas />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
