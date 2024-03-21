import React from 'react';
import styled from 'styled-components';
import resumeURL from "../assets/Alex_Zaharia_Resume.pdf";
import GlobalStyle from '../styles/GlobalStyle';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100vw;
  height: calc(100vh - 145px);
  position: relative;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 78vh;
  margin-top: 15vh;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 20px;
  padding-left: 19vw;
  padding-right: 19vw;
`;

const PDFContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none; /* Adjust as needed */
`;

export default function ResumePage() {
    return (
        <>
        <GlobalStyle />
        <MainContainer>
            <ResumeContainer>
            <PDFContainer src={resumeURL} />
            </ResumeContainer>
        </MainContainer>
        </>
    );
    }