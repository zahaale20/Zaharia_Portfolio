import React from 'react';
import styled from 'styled-components';
import resumeURL from "../assets/Alex_Zaharia_Resume.pdf";
import GlobalStyle from '../styles/GlobalStyle';
import { FrameLayout } from '../styles/PageStyle'; 

const PDFContainer = styled.iframe`
    min-width: 100%;
    border: none;
    min-height: 70vh;
    max-height: 75vh;
    @media (min-width: 768px) {
        min-height: 80vh;
        max-height: 85vh;
        padding-top: 0px;
    }
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