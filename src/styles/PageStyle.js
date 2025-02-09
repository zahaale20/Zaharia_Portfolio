import styled from 'styled-components';
import theme from './Theme';


//General Components

export const FrameLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 140px;
    padding: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 85vw;
    height: 75vh;
    box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    gap: 20px;
    min-height: 600px;

    @media (min-width: 768px) {
        top: 110px;
    }

    @media (min-width: 1024px) {
        top: 110px;
    }
`;

export const VertScroll = styled.div`
    overflow-y: auto;
    overflox-x: none;
`;

export const VertNavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: rgba(255, 255, 255, 0.05);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    width: 50px;
    height: 75vh;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 3;  // Allocate more space to main content
    overflow-y: auto;
    overflow-x: hidden;
    height: 75vh;
    gap: 20px;
`;

export const AdContainer = styled.div`
    display: none;

    @media (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 20px;
        overflow-y: auto;
        max-width: 350px;
        max-height: 730px;
    }
`;

export const MainButton = styled.button`
    color: ${theme.colors.nearlyWhite};
    background: transparent;
    border: 1px solid ${theme.colors.nearlyWhite};
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
    font-family: 'Futura', sans-serif;
    cursor: pointer;
    margin-right: 1vw;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.04);
        background-color: ${theme.colors.nearlyWhite};
        color: ${theme.colors.deepSpace};
    }

    @media (min-width: 768px) {
        font-size: 12px;
        padding-left: 30px;
        padding-right: 30px;
    }

    @media (min-width: 1024px) { 
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 14px;
    }
`;

//Home Components


export const HomeProfileDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.05);
    max-width: 800px;
    margin: auto;
    height: 90%;
    border-radius: 15px;
    padding: 15px;
    transition: all 0.3s ease;

    @media (min-width: 768px) { 
        width: 700px;
        flex-direction: row;
        justify-content: center;
        height: 280px;
    }

    @media (min-width: 1024px) { 
        width: 80%;
        gap: 20px;
        height: 330px;
    }
`;

export const HomeProfileImage = styled.img`
    width: 250px;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
    margin: 20px;

    @media (min-width: 768px) { 
        width: 250px;
        margin: 20px;
    }

    @media (min-width: 1200px) { 
        width: 300px;
        margin: 20px;
    }
`;

export const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 248px;

    @media (min-width: 768px) {
        align-items: flex-start;
        padding: 20px;
        width: 300px;
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
        padding: 20px;
        width: 400px;
    }
`;

export const HomeNameText = styled.p`
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

export const HomeDescriptionText = styled.p`
    text-align: center;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 20px;
    text-align: start;
    color: ${theme.colors.lightGunGray};
    margin: 0px;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 25px;
    }

    @media (min-width: 1200px) {
        font-size: 18px;
    }
`;

export const HomeButtonXStack = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    gap: 1vw;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    gap: 20px;

    @media (min-width: 768px) {
        gap: 2px;
        align-items: center;
        justify-content: flex-start;
    }

    @media (min-width: 1024px) {
        gap: 5px;
    }
`;


export const SocialMediaIcon = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.075);
    }

    img {
        width: 30px;
        height: auto;
    }

    @media (min-width: 768px) {
        img {
        width: 30px;
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

//ExperiencesPage Components
export const ExperienceImage = styled.img`
    width: 15vw;
    height: auto;
    border-radius: 12px;
    margin-right: 2vw;

    @media (min-width: 768px) {
        width: 125px;
        border-radius: 16px;
    }

    @media (min-width: 1024px) {
        width: 150px;
        border-radius: 20px;
    }
`;

export const DescriptionHeaderText = styled.p`
    font-weight: bold;
    color: ${theme.colors.vanillaMist};
    font-size: 11px;
    margin: 0px;

    @media (min-width: 768px) {
        font-size: 18px;
        color: ${theme.colors.vanillaMist};
    }

    @media (min-width: 1024px) {
        font-size: 20px;
        color: ${theme.colors.vanillaMist};
    }
`;

export const ExperienceTitle = styled.h1`
    font-size: 3.0vw;
    color: ${theme.colors.vanillaMist};
    margin: 0;
    margin-top: -1vh;

    @media (min-width: 768px) {
        font-size: 30px;
    }

    @media (min-width: 1024px) {
        font-size: 30px;
    }
`;

export const ExperienceSubtitle = styled(ExperienceTitle)`
    font-size: 2.6vw;
    font-weight: normal;
    margin-bottom: -6px;

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;

export const ExperienceDescription = styled.div`
  color: ${theme.colors.lightGunGray};
  font-size: 2.2vw;
  @media (min-width: 768px) {
    font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;


// ProjectsPage Components
export const ProjectDescImage = styled(ExperienceImage)`
    border-radius: 0px;
    width: 40%;
    margin: 0px;
`;

export const ProjectImagesContainer = styled.div`
    display: flex;
    overflow-x: auto;
    align-self: stretch;
    margin: 0px;
    margin-bottom: 20px;
`;

export const ProjectImagesHeaderText = styled(DescriptionHeaderText)`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        margin-top: 20px;
    }
`;

export const ProjectLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20px;
    gap: 0px;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

`;

export const ProjectTitle = styled(ExperienceTitle)`
    font-size: 3.4vw;
    margin-bottom: -5px;

    @media (min-width: 768px) {
        font-size: 30px;
    }

    @media (min-width: 1024px) {
        font-size: 40px;
    }
`;

export const ProjectDescription = styled.div`
    color: ${theme.colors.lightGunGray};
    font-size: 2.4vw;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const ProjectNavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 8px;
    margin-top: 1px;
    transition: transform 0.2s;
    cursor: pointer;
    position: relative;
    transform: scale(0.8);

    &:hover {
        transform: scale(1.01);
    }

    &::after {
        content: ${({ isSelected }) => (isSelected ? "''" : 'none')};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media (min-width: 768px) {
        transform: scale(1);
        margin-top: 10px;
    }
`;

export const MoreProjectsNavItem = styled(ProjectNavItem)`
    display: flex;
    justify-content: center;
    width: 50px;
    height: 45px;
    margin-bottom: 10px;
    align-items: center;
    background-color: rgba(255,255,255, 0.05);
    border-radius: 10px;
`;

export const MoreProjectsText = styled.span`
    font-size: 40px;
    color: rgba(255,255,255, 0.6);
    margin-bottom: 20px;
`;

// Unsorted Components

export const ExperienceNavItem = styled.div`
    color: ${props => props.active ? theme.colors.nearlyWhite : theme.colors.lightGunGray};
    background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)'};
    padding: 1vh;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    margin-top: 1px;
    transform: scale(0.8);
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }

    @media (min-width: 768px) {
        transform: scale(1);
        margin-top: 10px;
    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
`;

export const ExperienceHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    padding-bottom: 10px;
    margin-left: -10px;
    margin-top: -10px;

    @media (min-width: 768px) {
        margin-left: 0px;
        margin-top: 0px;
        padding: 20px;
    }
`;

export const ExperienceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DescriptionText = styled.p`
    margin-top: 5px;
    color: ${theme.colors.lightGunGray};
    font-size: 10px;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;


export const KeyWordsContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 5px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        gap: 0px 5px;
    }
`;

export const KeyWordsText = styled(DescriptionText)`
    font-weight: bold;
    font-size: 7px;
    color: ${theme.colors.deepSpace};
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;

    @media (min-width: 768px) {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (min-width: 1024px) {
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const ExperienceDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0vh 2vw;
    overflow-y: visible;
`;

export const ListItem = styled.li`
    margin-bottom: 0.5vh;
`;