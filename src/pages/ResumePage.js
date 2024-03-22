import React from 'react';
import styled from 'styled-components';
import resumeURL from "../assets/Alex_Zaharia_Resume.pdf";
import GlobalStyle from '../styles/GlobalStyle';
import { FrameLayout } from '../styles/PageStyle'; 

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
        <FrameLayout>
            <PDFContainer src={resumeURL} />
        </FrameLayout>
        </>
    );
    }