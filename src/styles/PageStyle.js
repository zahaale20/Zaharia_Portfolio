import styled from 'styled-components';
import theme from './Theme';


//General Components

export const FrameLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 160px;
    padding: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 85vw;
    height: 565px;
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

export const VertNavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: rgba(255, 255, 255, 0.05);
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    width: 70px;
    overflow: auto;
    height: 565px;

    @media (min-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
        height: 615px;
    }

    @media (min-width: 1024px) {
        padding-left: 10px;
        padding-right: 10px;
        height: 615px;
    }
`;

export const OverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 900px;
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

//Home Components

export const HomeFrameLayout = styled.div`
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


export const HomeProfileDisplayContainer = styled.div`
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

export const HomeProfileImage = styled.img`
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

export const HomeTextContainer = styled.div`
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
    margin-top: 10px;
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

//ExperiencesPage Components
export const ExperienceImage = styled.img`
    width: 100px;
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
    font-size: 16px;
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
    font-size: 20px;
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
  margin-top: 20px;
  margin-bottom: 8px;
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
  font-size: 24px;
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
  font-size: 12px;

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
    margin-top: 10px;
    transition: transform 0.2s;
    cursor: pointer;
    position: relative;

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
`;

export const MoreProjectsNavItem = styled(ProjectNavItem)`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 70px;
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
    margin-top: 10px;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
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
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

export const ExperienceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ExperienceSubtitle = styled(ExperienceTitle)`
    font-size: 16px;
    font-weight: normal;

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;

export const ExperienceDescription = styled.div`
  color: ${theme.colors.lightGunGray};
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const DescriptionText = styled.p`
    margin-top: 5px;
    color: ${theme.colors.lightGunGray};
    font-size: 14px;

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
    margin-top: 0px;
    gap: 0px 10px;
`;

export const KeyWordsText = styled(DescriptionText)`
    font-weight: bold;
    font-size: 10px;
    color: ${theme.colors.deepSpace};
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 768px) {
        font-size: 12px;
    }

    @media (min-width: 1024px) {
        font-size: 12px;
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