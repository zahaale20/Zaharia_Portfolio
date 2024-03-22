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
    height: 565px;
    box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    gap: 20px;

    @media (min-width: 768px) {
        top: 110px;
        height: 615px;
    }

    @media (min-width: 1024px) {
        top: 110px;
        height: 615px;
    }
`;

export const VertScroll = styled.div`
    overflow-y: auto;
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
    height: 565px;

    @media (min-width: 768px) {
        width: 50px;
        height: 615px;
    }

    @media (min-width: 1024px) {
        width: 50px;
        height: 615px;
    }
`;

export const OverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 85%;
    overflow: auto;
    height: 565px;
    gap: 20px;

    @media (min-width: 768px) {
        width: 900px;
        height: 615px;
    }

    @media (min-width: 1024px) {
        width: 900px;
        height: 615px;
    }
`;

export const MainButton = styled.button`
    color: ${theme.colors.nearlyWhite};
    background: transparent;
    border: 1px solid ${theme.colors.nearlyWhite};
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 8px;
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

//Home Components


export const HomeProfileDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    margin: auto;
    height: auto;
    border-radius: 15px;
    padding: 15px;
    transition: all 0.3s ease;

    @media (min-width: 768px) { 
        width: 100%;
        flex-direction: row;
        justify-content: center;
        padding: 40px;
    }

    @media (min-width: 1024px) { 
        width: 80%;
        gap: 20px;
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
    }

    @media (min-width: 1200px) { 
        width: 280px;
    }
`;

export const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 248px;
    padding: 10px;

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

export const HomeButtonXStack = styled.div`
    flex-direction: row;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
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
        width: 25px;
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

//ExperiencesPage Components
export const ExperienceImage = styled.img`
    width: 15vw;
    height: auto;
    border-radius: 2vw;
    margin-right: 2vw;

    @media (min-width: 768px) {
        width: 125px;
    }

    @media (min-width: 1024px) {
        width: 150px;
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
    font-size: 12px;
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
    font-size: 10px;
    font-weight: normal;
    margin-bottom: -5px;

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;

export const ExperienceDescription = styled.div`
  color: ${theme.colors.lightGunGray};
  font-size: 8px;

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
    font-size: 12px;
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
    font-size: 9px;

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
        transform: scale(1.1);
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
    border-radius: 2vw;
`;

export const ExperienceHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-left: -10px;
    margin-top: -10px;

    @media (min-width: 768px) {
        margin-left: 0px;
        margin-top: 0px;
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
    margin-top: -10px;
    gap: 0px 5px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        gap: 0px 10px;
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