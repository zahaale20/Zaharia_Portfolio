import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../styles/Theme';
import logoImage from '../assets/zaharia_logo.png';

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
  padding: 20px;
  position: fixed;
  top: 16px;
  left: 50%;
  max-width: 1800px;
  transform: translateX(-50%);
  z-index: 1000;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
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


function Navbar() {
    const navigate = useNavigate();
    const emailAddress = "alex.zaharia4777@gmail.com";

    const handleNavigation = (path) => {
      navigate(path);
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
            </SectionsContainer>
            
        </Nav>
    );
}

export default Navbar;