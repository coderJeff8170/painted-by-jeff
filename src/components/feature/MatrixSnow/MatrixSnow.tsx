import { useEffect, useRef } from "react";
import "./MatrixSnow.css";

const MatrixSnow: React.FC = () => {
    const matrixRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const generateStreams = () => {
        const container = matrixRef.current;
        if (!container) return;
        const width = container.offsetWidth;
        const columns = Math.floor(width / 20); // Adjust based on font size
  
        for (let i = 0; i < columns; i++) {
          const stream = document.createElement("div");
          stream.className = "stream";
          stream.style.left = `${Math.random() * width}px`;
          //stream.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
          const fontSize = Math.random() * 1.5 + 0.5;
            stream.style.fontSize = `${fontSize}rem`;
  
            // Calculate opacity based on font size (smaller font size -> more transparent)
            const opacity = (fontSize) / 2;
            stream.style.opacity = opacity.toString();
          //stream.style.animationDelay = `${Math.random() * 10}s`;
          stream.style.animationDuration = `${Math.random() * 5 + 15}s`;
          stream.innerText = generateRandomStream();
          container.appendChild(stream);
        }
      };
  
      const generateRandomStream = () => {
        const length = Math.floor(Math.random() * 20) + 25;
        let stream = "";
        for (let i = 0; i < length; i++) {
          stream += Math.random() > 0.5 ? "1" : "0";
          stream += "\n";
        }
        return stream;
      };
  
      generateStreams();
    }, []);
  
    return <div className="matrix" ref={matrixRef}></div>;
  };

  export default MatrixSnow;