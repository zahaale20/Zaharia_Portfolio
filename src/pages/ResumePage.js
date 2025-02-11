import React from 'react';
import styled from 'styled-components';
import resumeURL from "../assets/Alex_Zaharia_Resume.pdf";
import GlobalStyle from '../styles/GlobalStyle';
import { FrameLayout } from '../styles/PageStyle'; 

const PDFContainer = styled.iframe`
  min-width: 100%;
  min-height: 100%;
  border: none;
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