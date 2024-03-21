import styled from 'styled-components';
import theme from './Theme';


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

export const NavBar = styled.div`
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

export const ExperienceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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