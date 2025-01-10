import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import profilepicURL  from '../assets/Profile-pic.png';
import {
    FrameLayout,
    HomeProfileDisplayContainer,
    HomeProfileImage,
    HomeTextContainer,
    HomeNameText,
    HomeDescriptionText,
    HomeButtonXStack,
    MainButton,
    SocialMediaContainer,
    SocialMediaIcon
} from '../styles/PageStyle'; 

import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import instagramIcon from '../assets/instagram.png';
import spotifyIcon from '../assets/spotify.png';

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
                <FrameLayout>
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
                                <SocialMediaContainer>
                                    <SocialMediaIcon href="https://github.com/zahaale20" target="_blank">
                                        <img src={githubIcon} alt="GitHub" />
                                    </SocialMediaIcon>
                                    <SocialMediaIcon href="https://linkedin.com/in/alexczaharia" target="_blank">
                                        <img src={linkedinIcon} alt="LinkedIn" />
                                    </SocialMediaIcon>
                                </SocialMediaContainer>
                            </HomeTextContainer>
                        </HomeProfileDisplayContainer>
                </FrameLayout>
        </>
    );
}

export default HomePage;