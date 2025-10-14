import React from "react";
import styled from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ResumePage from "./pages/ResumePage";

const PageContainer = styled.div`
  position: fixed;   /* fixes it to the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;  /* hides any overflowing content */
  margin: 0;
  padding: 0;
`;

const WhiteOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  z-index: 1;
`;

function App() {
  const handleSceneLoad = () => {
    console.log("✅ Unicorn scene loaded successfully");
  };

  return (
    <HashRouter base="/">
      <Background theme="dark" handleSceneLoad={handleSceneLoad} />
      <WhiteOverlay />
      <Navbar />
      <PageContainer style={{ position: "relative", zIndex: 2 }}>
        <div style={{ width: "100%", height: "100%" }}>
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
