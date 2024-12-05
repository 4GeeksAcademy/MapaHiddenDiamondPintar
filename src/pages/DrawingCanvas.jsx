import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintbrush,
  faBrush,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function DrawingCanvas() {
  const canvasRef = useRef("");
  const contextRef = useRef("");
  const [isDrawing, setIsDrawing] = useState("");
  const [tool, setTool] = useState("pen"); // "pen" or "rubber"
  const [drawnPaths, setDrawnPaths] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (isDrawing && tool === "pen") {
      // Guardar el camino dibujado
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      setDrawnPaths([...drawnPaths, imageData]);
    }
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || tool !== "pen") return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const erase = ({ nativeEvent }) => {
    if (!isDrawing || tool !== "rubber") return;

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.clearRect(offsetX - 10, offsetY - 10, 20, 20); // Borrar un área pequeña
  };

  const cleanCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setDrawnPaths([]);
  };

  const handleMouseMove = (e) => {
    if (tool === "pen") {
      draw(e);
    } else if (tool === "rubber") {
      erase(e);
    }
  };

  const selectPen = () => {
    setTool("pen");
    contextRef.current.strokeStyle = "black";
    contextRef.current.lineWidth = 30;
  };

  const selectRubber = () => {
    setTool("rubber");
    contextRef.current.lineWidth = 30; // Eraser size
  };

  const selectClean = () => {
    cleanCanvas();
    setTool("clean"); // Cambia a clean, pero limpia inmediatamente
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "60px",
          display: "flex",
          gap: "10px",
          zIndex: 2,
        }}
      >
        <Button
          variant="info"
          onClick={selectPen} // Cambia la herramienta a "Pen"
          style={{
            backgroundColor: tool === "pen" ? "lightblue" : "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faPaintbrush} />
        </Button>
        <Button
          variant="info"
          onClick={selectRubber} // Cambia la herramienta a "Rubber"
          style={{
            backgroundColor: tool === "rubber" ? "lightblue" : "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faEraser} />
        </Button>
        <Button
          variant="info"
          onClick={selectClean}
          style={{
            backgroundColor: tool === "clean" ? "lightblue" : "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faBrush} />
        </Button>
      </div>
      <div
        className="drawing-canvas-container"
        style={{
          backgroundImage: `url("/Photos/Europa Original Definitivo w Rusia & Kosovo.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          position: "relative", // For button positioning
        }}
      >
        <canvas
          ref={canvasRef}
          className="drawing-canvas"
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={handleMouseMove}
          onMouseLeave={finishDrawing}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </div>
    </>
  );
}

export default DrawingCanvas;
