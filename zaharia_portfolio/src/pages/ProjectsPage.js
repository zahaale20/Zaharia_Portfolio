import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

import {
  FrameLayout,
  OverviewContainer,
  ExperienceContainer,
  DescriptionText,
  DescriptionHeaderText,
  NavBar,
  ProjectNavItem,
  KeyWordsContent,
  KeyWordsText,
  ExperienceHeaderContainer,
  ExperienceImage,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceDescription,
  ExperienceDescriptionContainer,
} from '../styles/PageStyle'; 

import haggle from '../assets/haggle.jpg';
import gridirongpt from '../assets/gridirongpt.png';
import pixelthugz from '../assets/pixelthugz.jpg';
import hodlrocket from '../assets/hodlrocket.png';
import jambajuice from '../assets/jambajuice.png';
import apachespark from '../assets/spark.png';
import divideconquer from '../assets/divideconquer.png';
import openDP from '../assets/opendp.png';
import components from '../assets/components.png';
import editdistance from '../assets/editdistance.png';

import thug1 from '../assets/Don1.jpg';
import thug2 from '../assets/Don2.jpg';
import thug3 from '../assets/Don3.jpg';
import thug4 from '../assets/Don4.jpg';
import thug5 from '../assets/1.png';
import thug6 from '../assets/2.png';
import thug7 from '../assets/3.png';
import thug8 from '../assets/4.png';
import thug9 from '../assets/5.png';
import thug10 from '../assets/6.png';
import thug11 from '../assets/7.png';
import thug12 from '../assets/8.png';
import thug13 from '../assets/9.png';

import theme from '../styles/Theme';

const DescImage = styled(ExperienceImage)`
  border-radius: 0px;
  width: 40%;
  margin: 0px;
`;

const ProjectImagesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  align-self: stretch;
  margin: 0px;
  margin-bottom: 20px;
`;

const ImagesHeaderText = styled(DescriptionHeaderText)`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  gap: 0px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

`;

const ProjectTitle = styled(ExperienceTitle)`
  font-size: 24px;
  margin-bottom: -5px;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
      font-size: 40px;
  }
`;

const ProjectDescription = styled.div`
  color: ${theme.colors.lightGunGray};
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
      font-size: 16px;
  }
`;

const projects = [
  {
    id: 1,
    title: 'Database Modeling',
    dateRange: 'February 2024 - Present',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend','UML','E/R', 'SQL', 'JPA', 'JSON', 'JSONPath'],
    description: 'Outlined Jamba Juice\'s business rules and information needs, designed an Entity/Relationship UML model, and transformed it into SQL DDL for database schema creation. Improved schema integrity by refining to eliminate anomalies and redundancies, conducted lossless decomposition (including chase test) to prevent information loss, and ensured preservation of constraints based on functional dependencies. Implemented object-relational mapping in Java using Java Persistence API (JPA) to connect to a MySQL database, and developed queries for previously defined information needs. Added a document schema using JSON Schema, populated it, and wrote JSONPath queries to address the same information needs.',
    DesignUrl: 'https://drive.google.com/drive/folders/1KeN5AZsu9eIXj2_gnNaGqBdW4FrrsOSx?usp=sharing',
    ImplementationUrl: 'https://github.com/zahaale20/JambaJuice_JPA',
    imageUrl: jambajuice,
  },
  {
    id: 2,
    title: 'haggle',
    dateRange: 'January 2023 - Present',
    location: 'San Luis Obispo, CA',
    keywords: ['Full Stack', 'React','Javascript', 'HTML/CSS', 'MySQL', 'PostgreSQL', 'Supabase', 'Git'],
    description: 'A digital marketplace, haggle helps Cal Poly students buy, sell, and trade within the San Luis Obispo community. This app not only showcases local listings across a variety of categories, but also facilitates a seamless communication stream between users, allowing them to send and receive offers directly within the platform.  Moreover, users enjoy complete control over their listings, with easy-to-use tools for managing and updating offers. Whether you are decluttering your dorm, searching for textbooks, or finding unique local treasures, Haggle will help you get it done.',
    githubUrl: 'https://github.com/Velevynn/haggle',
    imageUrl: haggle,
  },
  {
    id: 3,
    title: 'GridIron GPT',
    dateRange: 'September 2023 - Present',
    location: 'San Luis Obispo, CA',
    keywords: ['Full Stack', 'Swift', 'Python', 'OpenAI', 'SQL', 'Firebase', 'Xcode','Adobe Illustrator'],
    description: 'A hub for NFL and Fantasy Football insights, GridIron GPT features a dynamic search engine utilizing the OpenAI API to transform user input such as "Who are the top 10 wide receivers of 2023 by receiving yards?" into SQL queries within an extensive player database. It not only uses prompt engineering and caching to help generate search recommendations, but also integrates with ESPN Fantasy Football to provide personalized lineup optimizations, trade advice, league insights, and accurate projections. This seamless blend of technology and sports analytics offers users an unparalleled strategy tool for the season. ',
    githubUrl: 'https://github.com/zahaale20/GridIronGPT',
    imageUrl: gridirongpt,
  },
  {
    id: 4,
    title: 'Differential Privacy',
    dateRange: 'June 2023 - August 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend', 'OpenDP', 'Python', 'Pandas'],
    description: 'In this project, I used a Forbes Billionaires dataset from Kaggle to implement and evaluate various privacy perservation methodologies (PPM) including k-Anonymity, l-Diversity, and differential privacy (DP) using OpenDP\'s Laplace Mechanism, focusing on the delicate balance between preserving individual privacy and maintaining the utility of sensitive data. By adjusting the Laplace mechanism\'s scale parameter, I analyzed, illustrated, and explained the trade-offs involved in increasing and decreasing noise of data.',
    githubUrl: 'https://github.com/zahaale20/DP_Implementation',
    imageUrl: openDP,
  },
  {
    id: 5,
    title: 'NFL QB Analysis',
    dateRange: 'June 2023 - August 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend', 'Apache Spark', 'Dataframes', 'SQL', 'Python', 'ETL', 'Data Pipelines'],
    description: 'Developed ETL processes using Apache Spark (specifically PySpark), Dataframes, and SQL to analyze over 114,000 lines of weekly NFL player data from 1990 to 2022. Implemented data pipelines to evaluate quarterbacks fantasy football production, individual performance considering team dynamics, and to categorize quarterbacks in a tier list in order to gain insights for the 2023 fantasy football season.',
    githubUrl: 'https://github.com/zahaale20/NFL-Fantasy-Football-Quarterback-Analysis/blob/main/Zaharia_NFL_Quarterback_Analysis.ipynb',
    imageUrl: apachespark,
  },
  {
    id: 6,
    title: 'Edit Distance',
    dateRange: 'January 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend', 'Levenshtein distance', 'Python', 'Matrix'],
    description: 'Implemented the Levenshtein distance algorithm, a crucial metric in the field of computational linguistics and computer science for measuring the similarity between two strings. By computing the minimum number of single-character edits required to change one word into another—permitting insertions, deletions, and substitutions—this script demonstrates a fundamental approach to understanding textual data. The core of the project involves constructing a dynamic programming matrix to iteratively calculate distances, offering insights into the optimization of string comparison processes. ',
    githubUrl: 'https://github.com/zahaale20/Edit-Distance',
    imageUrl: editdistance,
  },
  {
    id: 7,
    title: 'Strongly Connected Components',
    dateRange: 'January 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend', 'Python', 'Graph Theory', 'Depth-First Search (DFS)', 'Time Complexity'],
    description: 'Identified and delineated strongly connected components within a directed graph. Using Python, I implemented a solution that reads a directed graph from a text file, with each vertex and its directed edges represented as pairs of integers. Using an algorithm that employs depth-first search (DFS) techniques to explore the graph, I marked pre-visit and post-visit times to help identify cycles and, subsequently, strongly connected components. The algorithm effectively organizes vertices into distinct components based on their connectivity, ensuring that each set of vertices within a component can reach every other vertex in the same component. The output is a sorted list of lists, with each sublist representing a strongly connected component containing vertices sorted in ascending order.',
    githubUrl: 'https://github.com/zahaale20/Strongly-Connected-Components',
    imageUrl: components,
  },
  {
    id: 8,
    title: 'Divide and Conquer',
    dateRange: 'January 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Backend', 'Divide and Conquer', 'Python', 'Time Complexity'],
    description: 'In this project, I designed and implemented a divide-and-conquer algorithm in Python to solve a specific problem: identifying the unique, singleton element in a sorted sequence of integers, where all elements except one are duplicated. My program efficiently manages this task by dividing the problem space into smaller sub-problems, then combining their solutions to find the singleton element. The algorithm performs this by checking the middle element of the sequence and its neighbors; depending on whether these elements are duplicates and the position (odd or even) of the middle element, the search space is halved accordingly. This method ensures a highly efficient search, minimizing the number of comparisons needed to find the singleton. The program reads integers from a file, where each line contains a single integer from the sequence, and outputs the singleton element to stdout.',
    githubUrl: 'https://github.com/zahaale20/Divide-and-Conquer',
    imageUrl: divideconquer,
  },
  {
    id: 9,
    title: 'Secret Society of Pixel Thugs',
    dateRange: 'April 2021 - August 2021',
    location: 'San Luis Obispo, CA',
    keywords: ['Frontend', 'Cardano NFT', 'Javascript', 'Adobe Illustrator', 'Haskell'],
    description: 'The Secret Society of Pixel Thugz (SSPT) is my solo endeavor into the NFT world on the Cardano blockchain, showcasing a blend of digital artistry and technical skill. I designed its visual identity, created 302 unique traits, and used JavaScript to generate 5,000 unique NFTs. While I delved into tokenomics, worked on developing a smart contract with Haskell, and was working to finish the remaining tasks to prepare for deployment, I discovered that the startup cost and time it would take to launch and keep the project afloat were too high. Thus I decided against launching the project on the blockchain.',
    githubUrl: 'https://github.com/zahaale20/Pixel-Thugz-NFT',
    imageUrl: pixelthugz,
    imageUrls: [thug1, thug2, thug3, thug4, thug5, thug6, thug7, thug8, thug9, thug10, thug11, thug12, thug13]
  },
  {
    id: 10,
    title: 'HODLRocket',
    dateRange: 'April 2020 - August 2020',
    location: 'San Luis Obispo, CA',
    keywords: ['Web 3.0', 'Binance Smart Chain', 'Adobe Illustrator', 'Solidity'],
    description: 'Helped orchestrate the successful launch of a BEP-20 token on Binance Smart Chain. Worked and grew with a team of six members in a fast-paced work environment, fostering a culture of engineering excellence by persisting through various challenges and failures. Wrote code in Solidity to develop HODLRockets smart contract. Designed engaging logos, advertisements, social media posts, and a website.',
    socialmediaURL: 'https://www.instagram.com/hodlrocketofficial/',
    imageUrl: hodlrocket,
  },

];

const renderLinkButtons = (project) => {
  const linkTypes = [
    { key: 'DesignUrl', text: 'Design Docs' },
    { key: 'ImplementationUrl', text: 'Implementation' },
    { key: 'githubUrl', text: 'GitHub Repo' },
    { key: 'socialmediaURL', text: 'Social Media' },
    { key: 'jupyterNotebookUrl', text: 'Jupyter Notebook' },
  ];

  // Filter out the link types that are not available for this project
  const availableLinks = linkTypes.filter(linkType => project[linkType.key]);

  return availableLinks.map(linkType => (
    <a key={linkType.key} href={project[linkType.key]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '10px' }}>
      <MainButton>{linkType.text}</MainButton>
    </a>
  ));
};

const MoreProjectsNavItem = styled(ProjectNavItem)`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 70px;
  margin-bottom: 10px;
  align-items: center;
  background-color: rgba(255,255,255, 0.05);
  border-radius: 10px;
`;

const MoreProjectsText = styled.span`
  font-size: 40px;
  color: rgba(255,255,255, 0.6);
  margin-bottom: 20px;
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


function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const projectRefs = useRef(new Array());

  const handleGitHubClick = () => {
    window.open('https://github.com/zahaale20', '_blank');
  };
  

  useEffect(() => {
    // Scroll to the selected project
    const selectedProjectIndex = projects.findIndex(project => project.id === selectedProjectId);
    if (projectRefs.current[selectedProjectIndex]) {
      projectRefs.current[selectedProjectIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProjectId]);

  return (
    <>
      <GlobalStyle />
        <FrameLayout>
          <NavBar>
            {projects.map((project, index) => (
              <ProjectNavItem
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                isSelected={selectedProjectId === project.id}
              >
                <ProjectImage src={project.imageUrl} alt={project.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </ProjectNavItem>
            ))}
            <MoreProjectsNavItem onClick={handleGitHubClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MoreProjectsText style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.6)' }}>...</MoreProjectsText>
            </MoreProjectsNavItem>
          </NavBar>
  
          <OverviewContainer>
            {projects.map((project, index) => (
              <div ref={(el) => (projectRefs.current[index] = el)} key={project.id}>
                <ExperienceContainer>
                  <ExperienceHeaderContainer>
                    <ExperienceImage src={project.imageUrl} alt={project.title} />
                    <ExperienceInfo>
                      <ProjectDescription>{project.dateRange}</ProjectDescription>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.location}</ProjectDescription>
                    </ExperienceInfo>
                  </ExperienceHeaderContainer>
  
                  <ExperienceDescriptionContainer>
                    <KeyWordsContent>
                      {project.keywords?.map((tech, index) => (
                        <KeyWordsText key={index}>{tech}</KeyWordsText>
                      ))}
                    </KeyWordsContent>
  
                    <DescriptionHeaderText>Description</DescriptionHeaderText>
                    <DescriptionText>{project.description}</DescriptionText>
  
                    {project.imageUrls && project.imageUrls.length > 0 && (
                      <>
                        <ImagesHeaderText>Images</ImagesHeaderText>
                        <ProjectImagesContainer>
                          {project.imageUrls.map((url, index) => (
                            <DescImage key={index} src={url} alt={`Project Image ${index + 1}`} />
                          ))}
                        </ProjectImagesContainer>
                      </>
                    )}
  
                    <LinksContainer>
                      {renderLinkButtons(project)}
                    </LinksContainer>
                  </ExperienceDescriptionContainer>
                </ExperienceContainer>
              </div>
            ))}
          </OverviewContainer>
        </FrameLayout>
    </>
  );
}

export default ProjectsPage;