import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../styles/Theme';
import logoImage from '../assets/zaharia_logo.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import instagramIcon from '../assets/instagram.png';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  height: 75px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (min-width: 768px) { /* Adjust for tablets */
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    height: 75px;
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  padding: 0.5vw;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 1000px) {
    justify-content: flex-start;
    width: auto;
  }
`;

const ContactMeButton = styled.button`
    background-color: transparent;
    color: ${theme.colors.nearlyWhite};
    border: 1px solid ${theme.colors.nearlyWhite};
    border-radius: 0.5vw;
    width: 115px;
    padding: 0.5vw 1vw;
    font-size: 11px;
    font-family: 'Futura', sans-serif;
    cursor: pointer;
    margin: 0 1vw;
    margin-left: 2vw;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.025);
        background-color: ${theme.colors.nearlyWhite};
        color: ${theme.colors.deepSpace};
    }
`;

const Separator = styled.span`
  font-size: 11px;
  color: ${theme.colors.nearlyWhite};
  padding: 0 1vw;
`;

const Dropbtn = styled.button`
  color: ${theme.colors.nearlyWhite};
  padding: 0.5vw 1vw;
  font-size: 11px;
  font-family: 'Futura', sans-serif;
  cursor: pointer;
  background: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.075);
  }
`;

const LogoImage = styled.img`
  display: block;
  height: auto;
  width: 110px;
  margin: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.075);
  }

  @media (min-width: 768px) {
    width: 110px;
  }

  @media (min-width: 1024px) {
    width: 110px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  @media (min-width: 768px) {
    gap: 2px;
  }

  @media (min-width: 1024px) {
    gap: 5px;
  }

`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.075);
  }

  img {
    width: 20px;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      width: 25px;
      height: auto;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 30px;
      height: auto;
    }
  }
`;


function Navbar() {
    const navigate = useNavigate();
    const emailAddress = "alex.zaharia4777@gmail.com";

    const handleNavigation = (path) => {
      navigate(path);
    };

    const handleEmailOpen = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    

    return (
        <Nav>
            <Link to="/">
              <LogoImage src={logoImage} alt="Alex Zaharia Logo" />
            </Link>
            <SectionsContainer>
              <Dropbtn onClick={() => handleNavigation('/')}>HOME</Dropbtn>
              <Separator>|</Separator>
              
              <Dropbtn onClick={() => handleNavigation('/projects')}>PROJECTS</Dropbtn>
              <Separator>|</Separator>
              
              <Dropbtn onClick={() => handleNavigation('/experience')}>EXPERIENCE</Dropbtn>
              <Separator>|</Separator>
              
              <Dropbtn onClick={() => handleNavigation('/resume')}>RESUME</Dropbtn>
              <Separator></Separator>

              <SocialMediaContainer>
                <SocialMediaIcon href="https://github.com/zahaale20" target="_blank">
                    <img src={githubIcon} alt="GitHub" />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://linkedin.com/in/alexczaharia" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://instagram.com/alex.z4777" target="_blank">
                    <img src={instagramIcon} alt="Instagram" />
                </SocialMediaIcon>
              </SocialMediaContainer>

              <ContactMeButton onClick={handleEmailOpen}>
                  CONTACT ME
              </ContactMeButton>
            </SectionsContainer>
        </Nav>
    );
}

export default Navbar;