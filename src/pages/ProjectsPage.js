import React, { useEffect, useRef, useState } from 'react';
import GlobalStyle from '../styles/GlobalStyle';

import {
  MainButton,
  FrameLayout,
  VertNavBar,
  VertScroll,
  ProjectNavItem,
  MainContainer,
  ExperienceContainer,
  ExperienceHeaderContainer,
  ExperienceImage,
  ProjectImage,
  ExperienceInfo,
  ProjectDescImage,
  DescriptionText,
  KeyWordsText,
  KeyWordsContent,
  ExperienceDescriptionContainer,
  ProjectDescription,
  ProjectTitle,
  DescriptionHeaderText,
  ProjectImagesHeaderText,
  ProjectImagesContainer,
  ProjectLinksContainer,
  MoreProjectsNavItem,
  MoreProjectsText,
  AdContainer
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
import information_retrieval from '../assets/information-retrieval.png';
import memory from '../assets/memory.png';
import lwp from '../assets/lwp.png';
import eda from '../assets/eda.png';

import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';

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

import real_estate_ml from '../assets/real_estate_ml.png';
import tinyfs from '../assets/tinyfs.png';



const projects = [
  {
    id: 0,
    title: 'GridIron GPT',
    dateRange: 'April 2023 - Present',
    location: 'San Luis Obispo, CA',
    keywords: ['Full Stack', 'React', 'Python', 'OpenAI', 'SQL', 'Supabase', 'Google Cloud', 'Adobe Illustrator'],
    description: 'Gridiron GPT is a hub for NFL and Fantasy Football insights built with React. The web app assists users by providing tools to generate drafting strategies, analyze trades, and optimize weekly lineups. It provides weekly player and team rankings as well as team and positional matchup analysis, empowering users to make informed decisions throughout the fantasy football season. ',
    githubUrl: 'https://github.com/zahaale20/GridIronGPT_React',
    imageUrl: gridirongpt,
  },
  {
    id: 1,
    title: 'haggle',
    dateRange: 'Jan 2023 - June 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['Full Stack', 'React','Javascript', 'HTML/CSS', 'MySQL', 'PostgreSQL', 'Supabase', 'Google Cloud', 'AWS', 'Git'],
    description: 'A digital marketplace, haggle helps Cal Poly students buy, sell, and trade within the San Luis Obispo community. This app not only showcases local listings across a variety of categories, but also facilitates a seamless communication stream between users, allowing them to send and receive offers directly within the platform.  Moreover, users enjoy complete control over their listings, with easy-to-use tools for managing and updating offers. Whether you are decluttering your dorm, searching for textbooks, or finding unique local treasures, Haggle will help you get it done.',
    githubUrl: 'https://github.com/Velevynn/haggle',
    imageUrl: haggle,
  },
  {
    id: 2,
    title: 'Predictive Modeling Tool for Real Estate Prices (In the USA)',
    dateRange: 'June 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['Python', 'Machine Learning', 'Exploratory Data Analysis', 'Preprocessing', 'Linear Regression', 'Decision Tree', 'Random Forest', 'Gradient Boosting', 'XGBoost'],
    description: 'The real estate valuation tool project develops a predictive modeling application to estimate U.S. home prices based on location and property features. Utilizing historical data and regression techniques, the tool refines various predictive models to enhance accuracy in home valuations. Users can input property details through an intuitive interface, which the system processes using algorithms to predict current market values. The project facilitates comparative analysis of different modeling methods, offering insights into the most effective techniques for real estate price prediction.',
    jupyterNotebookUrl: 'https://colab.research.google.com/drive/1Ds0wuCkqvZBGuMCIfa94rwXpi48RV46R?usp=sharing',
    predictionToolUrl: 'https://huggingface.co/spaces/malona/Real-Estate-Data-Analysis',
    googleSlidesUrl: 'https://docs.google.com/presentation/d/19IFDRqBp30ZlvmGFc0_KDfJ_FjbIDsws09gtf77d2GU/edit?usp=sharing',
    imageUrl: real_estate_ml,
  },
  {
    id: 3,
    title: 'Exploratory Data Analysis',
    dateRange: 'May 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['Python', 'EDA','Pandas', 'Numpy', 'Matplotlib'],
    description: 'The project involves a detailed exploratory data analysis on an insurance company dataset to determine key attributes for policy classification. Using Python and tools like pandas, matplotlib, and seaborn, the analysis includes data preprocessing, visualization of numerical distributions, and relationship assessments between policy types and demographic variables. Statistical methods like correlation matrices and chi-square tests identify age and motor value as significant predictors. Insights derived from these analyses inform targeted marketing strategies, demonstrating the importance of tailored data analysis in policyholder segmentation.',
    jupyterNotebookUrl: 'https://colab.research.google.com/drive/1QqOQNr1A41ghGneQpvu_3BWcypmLV-II?usp=sharing',
    imageUrl: eda,
  },
  {
    id: 4,
    title: 'Information Retrieval',
    dateRange: 'April 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['Python', 'Text Preprocessing','TF-IDF', 'Cosine Similarity', 'Document Ranking', 'Normalization'],
    description: 'The Python program implements a document retrieval system using the TF-IDF algorithm and cosine similarity to process and retrieve highly relevant documents for specific queries. It efficiently handles text data preprocessing, including tokenization, removal of punctuation and stopwords, and normalization, to enhance the accuracy of document retrieval. The system calculates TF-IDF scores to quantify the importance of words within the document collection relative to their frequency across all documents, enabling effective information retrieval. By evaluating for cosine similarity, the program assesses the relevance of documents to a given query, ranking them to identify the most relevant documents to each query.',
    jupyterNotebookUrl: 'https://colab.research.google.com/drive/1F9_drF88K16Ld4sI3TIZ0kHf_LhE4UZz?usp=sharing',
    imageUrl: information_retrieval,
  },
  {
    id: 5,
    title: 'Tiny FS',
    dateRange: 'June 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['C', 'File System', 'Linked Lists', 'Timestamps', 'File Renaming', 'Directory Listing', 'Data Management'],
    description: 'The TinyFS implementation uses linked lists to manage data efficiently, leveraging their O(1) insertion time despite the O(n) search complexity, which slows some operations. The additional features we added include timestamps , file renaming, and directory listing, enhancing user interaction and system utility. While TinyFS lacks full-scale file system features and hierarchical directories, impacting some performance aspects, it remains bug-free and reliable, effectively meeting specific operational needs and user requirements within its defined scope.',
    githubUrl: 'https://github.com/zahaale20/tinyfs',
    imageUrl: tinyfs,
  },
  {
    id: 6,
    title: 'Memory Simulator',
    dateRange: 'May 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['C', 'Memory Management', 'Python', 'TLB', 'Page Table', 'Backing Store', 'Physical Memory', 'PRAs'],
    description: 'The memory simulator project implements a software-based memory management unit (MMU) using Python, showcasing various page replacement algorithms including FIFO, LRU, and Optimal. The program simulates the process of translating logical to physical addresses and handles page faults with a simulated physical memory and TLB (Translation Lookaside Buffer). Users can specify the reference sequence file, the number of frames, and the page replacement algorithm via command line, allowing for dynamic testing of different memory scenarios. The project includes functionality to read a binary backing store, mimic real-world memory operations, and calculate and display memory access statistics such as page faults and TLB hits.',
    githubUrl: 'https://github.com/zahaale20/MemorySimulator',
    imageUrl: memory,
  },
  {
    id: 7,
    title: 'Lightweight Processes',
    dateRange: 'April 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['C', 'LWP', 'Thread Management', 'Round Robin Scheduling', 'Memory Allocation', 'Context Switching', 'Stack Configuration'],
    description: 'The library provides a C API for creating and managing threads using a round-robin scheduler. This scheduling method employs a queue to determine the sequence in which threads are executed. The development of this threading library involved two main stages. Initially, memory was allocated for each threads stack, which involved setting aside and configuring a designated memory area for each threads operations. The second stage was managing the transition of control between threads, which required maintaining an accurate record of each threads state, including their registers and stack pointers.',
    githubUrl: 'https://github.com/zahaale20/Lightweight_Processes',
    imageUrl: lwp,
  },
  {
    id: 8,
    title: 'Database Modeling',
    dateRange: 'Feb 2024 - April 2024',
    location: 'San Luis Obispo, CA',
    keywords: ['UML','E/R', 'SQL', 'JPA', 'JSON', 'JSONPath'],
    description: 'Outlined Jamba Juice\'s business rules and information needs, designed an Entity/Relationship UML model, and transformed it into SQL DDL for database schema creation. Improved schema integrity by refining to eliminate anomalies and redundancies, conducted lossless decomposition (including chase test) to prevent information loss, and ensured preservation of constraints based on functional dependencies. Implemented object-relational mapping in Java using Java Persistence API (JPA) to connect to a MySQL database, and developed queries for previously defined information needs. Added a document schema using JSON Schema, populated it, and wrote JSONPath queries to address the same information needs.',
    DesignUrl: 'https://drive.google.com/drive/folders/1KeN5AZsu9eIXj2_gnNaGqBdW4FrrsOSx?usp=sharing',
    ImplementationUrl: 'https://github.com/zahaale20/JambaJuice_JPA',
    imageUrl: jambajuice,
  },
  {
    id: 9,
    title: 'Differential Privacy',
    dateRange: 'Jun 2023 - Aug 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['OpenDP', 'Python', 'Pandas'],
    description: 'In this project, I used a Forbes Billionaires dataset from Kaggle to implement and evaluate various privacy perservation methodologies (PPM) including k-Anonymity, l-Diversity, and differential privacy (DP) using OpenDP\'s Laplace Mechanism, focusing on the delicate balance between preserving individual privacy and maintaining the utility of sensitive data. By adjusting the Laplace mechanism\'s scale parameter, I analyzed, illustrated, and explained the trade-offs involved in increasing and decreasing noise of data.',
    githubUrl: 'https://github.com/zahaale20/DP_Implementation',
    imageUrl: openDP,
  },
  {
    id: 10,
    title: 'NFL QB Analysis',
    dateRange: 'Jun 2023 - Aug 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Apache Spark', 'Dataframes', 'SQL', 'Python', 'ETL', 'Data Pipelines'],
    description: 'Developed ETL processes using Apache Spark (specifically PySpark), Dataframes, and SQL to analyze over 114,000 lines of weekly NFL player data from 1990 to 2022. Implemented data pipelines to evaluate quarterbacks fantasy football production, individual performance considering team dynamics, and to categorize quarterbacks in a tier list in order to gain insights for the 2023 fantasy football season.',
    githubUrl: 'https://github.com/zahaale20/NFL-Fantasy-Football-Quarterback-Analysis/blob/main/Zaharia_NFL_Quarterback_Analysis.ipynb',
    imageUrl: apachespark,
  },
  {
    id: 11,
    title: 'Edit Distance',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Levenshtein distance', 'Python', 'Matrix'],
    description: 'Implemented the Levenshtein distance algorithm, a crucial metric in the field of computational linguistics and computer science for measuring the similarity between two strings. By computing the minimum number of single-character edits required to change one word into another—permitting insertions, deletions, and substitutions—this script demonstrates a fundamental approach to understanding textual data. The core of the project involves constructing a dynamic programming matrix to iteratively calculate distances, offering insights into the optimization of string comparison processes. ',
    githubUrl: 'https://github.com/zahaale20/Edit-Distance',
    imageUrl: editdistance,
  },
  {
    id: 12,
    title: 'Strongly Connected Components',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Python', 'Graph Theory', 'Depth-First Search (DFS)', 'Time Complexity'],
    description: 'Identified and delineated strongly connected components within a directed graph. Using Python, I implemented a solution that reads a directed graph from a text file, with each vertex and its directed edges represented as pairs of integers. Using an algorithm that employs depth-first search (DFS) techniques to explore the graph, I marked pre-visit and post-visit times to help identify cycles and, subsequently, strongly connected components. The algorithm effectively organizes vertices into distinct components based on their connectivity, ensuring that each set of vertices within a component can reach every other vertex in the same component. The output is a sorted list of lists, with each sublist representing a strongly connected component containing vertices sorted in ascending order.',
    githubUrl: 'https://github.com/zahaale20/Strongly-Connected-Components',
    imageUrl: components,
  },
  {
    id: 13,
    title: 'Divide and Conquer',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: ['Divide and Conquer', 'Python', 'Time Complexity'],
    description: 'In this project, I designed and implemented a divide-and-conquer algorithm in Python to solve a specific problem: identifying the unique, singleton element in a sorted sequence of integers, where all elements except one are duplicated. My program efficiently manages this task by dividing the problem space into smaller sub-problems, then combining their solutions to find the singleton element. The algorithm performs this by checking the middle element of the sequence and its neighbors; depending on whether these elements are duplicates and the position (odd or even) of the middle element, the search space is halved accordingly. This method ensures a highly efficient search, minimizing the number of comparisons needed to find the singleton. The program reads integers from a file, where each line contains a single integer from the sequence, and outputs the singleton element to stdout.',
    githubUrl: 'https://github.com/zahaale20/Divide-and-Conquer',
    imageUrl: divideconquer,
  },
  {
    id: 14,
    title: 'Secret Society of Pixel Thugs',
    dateRange: 'Apr 2021 - Aug 2021',
    location: 'San Luis Obispo, CA',
    keywords: ['NFT', 'Cardano', 'Blockchain', 'Javascript', 'Adobe Illustrator', 'Haskell'],
    description: 'The Secret Society of Pixel Thugz (SSPT) is my solo endeavor into the NFT world on the Cardano blockchain, showcasing a blend of digital artistry and technical skill. I designed its visual identity, created 302 unique traits, and used JavaScript to generate 5,000 unique NFTs. While I delved into tokenomics, worked on developing a smart contract with Haskell, and was working to finish the remaining tasks to prepare for deployment, I discovered that the startup cost and time it would take to launch and keep the project afloat were too high. Thus I decided against launching the project on the blockchain.',
    githubUrl: 'https://github.com/zahaale20/Pixel-Thugz-NFT',
    imageUrl: pixelthugz,
    imageUrls: [thug1, thug2, thug3, thug4, thug5, thug6, thug7, thug8, thug9, thug10, thug11, thug12, thug13]
  },
  {
    id: 15,
    title: 'HODLRocket',
    dateRange: 'Apr 2020 - Aug 2020',
    location: 'San Luis Obispo, CA',
    keywords: ['Cryptocurrency', 'BEP-20 Token', 'Binance Smart Chain', 'Blockchain', 'Adobe Illustrator', 'Solidity'],
    description: 'Orchestrated the successful launch of a BEP-20 token on Binance Smart Chain. Worked and grew with a team of eight members in a fast-paced work environment, fostering a culture of engineering excellence by persisting through various challenges and failures. Wrote code in Solidity to develop HODLRockets smart contract. Designed engaging logos, advertisements, social media posts, and a website.',
    socialmediaURL: 'https://www.instagram.com/hodlrocketofficial/',
    imageUrl: hodlrocket,
  },

];

const renderLinkButtons = (project) => {
  const linkTypes = [
    { key: 'DesignUrl', text: 'Files' },
    { key: 'ImplementationUrl', text: 'Implementation' },
    { key: 'githubUrl', text: 'GitHub Repo' },
    { key: 'socialmediaURL', text: 'Social Media' },
    { key: 'jupyterNotebookUrl', text: 'Jupyter Notebook' },
    { key: 'predictionToolUrl', text: 'Prediction Tool' },
    { key: 'googleSlidesUrl', text: 'Google Slides' },
    { key: 'websiteUrl', text: 'Website' },
  ];

  // Filter out the link types that are not available for this project
  const availableLinks = linkTypes.filter(linkType => project[linkType.key]);

  return availableLinks.map(linkType => (
    <a key={linkType.key} href={project[linkType.key]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '0px' }}>
      <MainButton>{linkType.text}</MainButton>
    </a>
  ));
};


function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const projectRefs = useRef(new Array());
  const [adIndex, setAdIndex] = useState(0);
  const adImages = [ad1, ad2, ad3];

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

  useEffect(() => {
    // Change ad image every 3 seconds
    const intervalId = setInterval(() => {
      setAdIndex((prevAdIndex) => (prevAdIndex + 1) % adImages.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <GlobalStyle />
        <FrameLayout>
          <VertNavBar>
            <VertScroll>
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
            </VertScroll>
          </VertNavBar>
  
          <MainContainer>
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
                        <ProjectImagesHeaderText>Images</ProjectImagesHeaderText>
                        <ProjectImagesContainer>
                          {project.imageUrls.map((url, index) => (
                            <ProjectDescImage key={index} src={url} alt={`Project Image ${index + 1}`} />
                          ))}
                        </ProjectImagesContainer>
                      </>
                    )}
  
                    <ProjectLinksContainer>
                      {renderLinkButtons(project)}
                    </ProjectLinksContainer>
                  </ExperienceDescriptionContainer>
                </ExperienceContainer>
              </div>
            ))}
          </MainContainer>
          <AdContainer>
            <img src={adImages[adIndex]} alt="Advertisement" style={{ width: 'auto', height: '1080px', borderRadius: '15px' }} />
          </AdContainer>
        </FrameLayout>
    </>
  );
}

export default ProjectsPage;