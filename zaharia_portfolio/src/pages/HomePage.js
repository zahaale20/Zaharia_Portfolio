import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import profilepicURL  from '../assets/Profile-pic.png';
import {
    HomeFrameLayout,
    HomeProfileDisplayContainer,
    HomeProfileImage,
    HomeTextContainer,
    HomeNameText,
    HomeDescriptionText,
    HomeButtonXStack,
    MainButton,
  } from '../styles/PageStyle'; 

function HomePage() {
    const navigate = useNavigate();
    const emailAddress = "alex.zaharia4777@gmail.com";

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleEmailOpen = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <>
            <GlobalStyle />
                <HomeFrameLayout>
                        <HomeProfileDisplayContainer>
                            <HomeProfileImage src={profilepicURL} alt="Profile Picture"/>
                            <HomeTextContainer>
                                <HomeNameText>Alex Zaharia</HomeNameText>
                                <HomeDescriptionText>I am an innovative problem-solver with a passion for technology and a strong commitment to making a positive impact in my community.</HomeDescriptionText>
                                <HomeButtonXStack>
                                    <MainButton onClick={() => handleNavigation('/resume')}>
                                        Resume
                                    </MainButton>
                                    <MainButton onClick={handleEmailOpen}>
                                        Contact Me
                                    </MainButton>
                                </HomeButtonXStack>
                            </HomeTextContainer>
                        </HomeProfileDisplayContainer>
                </HomeFrameLayout>
        </>
    );
}

export default HomePage;