import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ResumePage from './pages/ResumePage';

const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    position: relative;
    overflow: hidden;
`;

const AnimatedMeshGradient = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      let time = 0;
  
      const color = function (x, y, r, g, b) {
        context.fillStyle = `rgb(${r}, ${g}, ${b})`
        context.fillRect(x, y, 10, 10);
      };
  
      const R = function (x, y, time) {
        return (Math.floor(30 + 50 * Math.cos((x * x - y * y) / 300 + time)));
      }

      const G = function (x, y, time) {
          return (Math.floor(100 + 50 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
      }

      const B = function (x, y, time) {
          return (Math.floor(180 + 20 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
      }
  
      const startAnimation = function () {
        for (let x = 0; x <= 30; x++) {
          for (let y = 0; y <= 30; y++) {
            color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
          }
        }
        time += 0.03;
        window.requestAnimationFrame(startAnimation);
      };
  
      startAnimation();
  }, []);

  return (
      <canvas ref={canvasRef} width="32" height="32" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}></canvas>
  );
};

const BlackLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

function App() {

  return (
    <HashRouter base="/">
      <Navbar />
      <PageContainer>
        <AnimatedMeshGradient />
        <BlackLayer />
        <div style={{ zIndex: 3, position: 'relative', width: '100%', height: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencesPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </div>
      </PageContainer>
    </HashRouter>
  );
}

export default App;