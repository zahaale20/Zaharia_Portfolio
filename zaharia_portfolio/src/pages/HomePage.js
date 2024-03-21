import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';
import profilepicURL  from '../assets/Profile-pic.png';

const HomeFrameLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 160px; // Use vh for a more dynamic positioning
    left: 50%;
    transform: translate(-50%, 0);
    width: 85vw;
    height: 565px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    gap: 2vw;
    padding: 15px;

    @media (min-width: 768px) {
        top: 14vh;
        height: 615px;
    }
`;


const ProfileDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; // Ensures even spacing
    width: 80%; // Responsive width
    max-width: 1200px; // Prevents the container from becoming too wide on large screens
    margin: auto; // Centers the container
    height: auto; // Allows the container to grow with its content
    border-radius: 15px;
    padding: 20px; // Adds some padding inside the container
    transition: all 0.3s ease; // Smooth transition for resizing

    @media (min-width: 768px) { 
        width: 100%;
        flex-direction: row; // Switch to row layout for wider screens
        justify-content: center; // Adjusts content alignment
        padding: 40px; // Increased padding for larger views
    }

    @media (min-width: 1024px) { 
        width: 80%; // Adjust the width for very large screens
        gap: 20px;
    }
`;

const ProfileImage = styled.img`
    width: 250px; // Makes the image more responsive
    height: auto;
    border-radius: 15px;
    object-fit: cover; // Ensures the image covers the area
    margin: 20px;

    @media (min-width: 768px) { 
        width: 250px; // Adjusts the width on larger screens
    }

    @media (min-width: 1200px) { 
        width: 280px; // Adjusts the width on larger screens
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; // Adds space between text elements
    width: 248px; // Ensures the container uses available space
    padding: 10px; // Adds padding for text readability

    @media (min-width: 768px) {
        align-items: flex-start; // Aligns text to the start for wider screens
        padding: 20px; // More padding for larger screens
        width: 300px;
    }

    @media (min-width: 1024px) {
        align-items: flex-start; // Aligns text to the start for wider screens
        padding: 20px; // More padding for larger screens
        width: 400px;
    }
`;

const NameText = styled.p`
    font-size: 40px;
    font-family: sans-serif;
    font-weight: bold;
    color: ${theme.colors.vanillaMist};
    margin: 0px;

    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1024px) {
        font-size: 50px;
    }

    @media (min-width: 1200px) {
        font-size: 65px;
    }
`;

const DescriptionText = styled.p`
    text-align: center;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 20px;
    color: ${theme.colors.lightGunGray};
    margin: 0px;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 20px;
        text-align: start;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 25px;
        text-align: start;
    }

    @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 25px;
        text-align: start;
    }
`;

const ButtonXStack = styled.div`
    flex-direction: row;
    margin-top: 10px;
`;

const MainButton = styled.button`
    color: ${theme.colors.nearlyWhite};
    background: transparent;
    border: 1px solid ${theme.colors.nearlyWhite};
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 10px;
    font-family: 'Futura', sans-serif;
    cursor: pointer;
    margin-right: 2vw;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.04);
        background-color: ${theme.colors.nearlyWhite};
        color: ${theme.colors.deepSpace};
    }

    @media (min-width: 768px) {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 25px;
        padding-right: 25px;
        font-size: 12px;
    }

    @media (min-width: 1024px) { 
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 14px;
    }
`;

function HomePage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <GlobalStyle />
                <HomeFrameLayout>
                        <ProfileDisplayContainer>
                            <ProfileImage src={profilepicURL} alt="Profile Picture"/>
                            <TextContainer>
                                <NameText>Alex Zaharia</NameText>
                                <DescriptionText>I am an innovative problem-solver with a passion for technology and a strong commitment to making a positive impact in my community.</DescriptionText>
                                <ButtonXStack>
                                    <MainButton onClick={() => handleNavigation('/resume')}>
                                        Resume
                                    </MainButton>
                                    <MainButton onClick={() => handleNavigation('/contact')}>
                                        Contact Me
                                    </MainButton>
                                </ButtonXStack>
                            </TextContainer>
                        </ProfileDisplayContainer>
                </HomeFrameLayout>
        </>
    );
}

export default HomePage;