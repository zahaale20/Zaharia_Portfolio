import React, { useEffect, useRef, useState } from 'react';
import GlobalStyle from '../styles/GlobalStyle';

import {
  MainButton,
  FrameLayout,
  VertNavContainer,
  VertNavBar,
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
  KeyWordsContainer,
  ExperienceDescriptionContainer,
  ProjectDescription,
  ProjectTitle,
  DescriptionHeaderText,
  ProjectImagesHeaderText,
  ProjectImagesContainer,
  ProjectLinksContainer,
  MoreProjectsNavItem,
  MoreProjectsText,
  AdContainer,
  AdImage
} from '../styles/PageStyle'; 

import soltix from "../assets/soltix.png";
import blog_post_generator from "../assets/blog_post_generator.png";
import directory_context_generator from '../assets/directory_context_generator.png';
import haggle from '../assets/haggle.jpg';
import pixelthugz from '../assets/pixelthugz.jpg';
import hodlrocket from '../assets/hodlrocket.png';
import jambajuice from '../assets/jambajuice.png';
import nfl from '../assets/nfl.png';
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

import real_estate_ml from '../assets/real_estate_ml.png';
import tinyfs from '../assets/tinyfs.png';



const projects = [
  {
    id: 1,
    title: 'Soltix',
    dateRange: 'Feb 2025 - Present',
    location: 'Remote',
    keywords: [
      'Full Stack Development',
      'FastAPI',
      'WebSocket',
      'Polymarket',
      'Sentiment Analysis',
      'Solana',
      'OpenAI API',
      'Python'
    ],
    description:
      'Developing a full-stack market analysis and forecasting app to improve Solana investment decision-making. Leveraged FastAPI, WebSocket, and Gamma Market API for real-time updates on Polymarket events and markets. Built a sentiment analysis tool to extract insights from social media using OpenAI API, yt dlp, moviepy, and regex. Tracking velocity indicators to identify high-value investment opportunities.',
    imageUrl: soltix
  },
  {
    id: 2,
    title: 'Blog Post Generator',
    dateRange: 'Jan 2025',
    location: 'Remote',
    keywords: [
      'Automation',
      'Python',
      'OpenAI API',
      'GPT-3.5',
      'GPT-4o',
      'Blog Post Generation'
    ],
    description:
      'Automated the blog post creation process using Python and OpenAI API (GPT-3.5) to transform user ideas into structured outlines. Utilized the GPT-4o model to expand outlines into detailed, high-quality 2,000-3,000 word blog posts. Used GPT-4o for precise paragraph edits, improving accuracy, engagement, and readability. Streamlined workflow efficiency by automating formatting and structuring, reducing manual editing time.',
    imageUrl: blog_post_generator
  },
  {
    id: 3,
    title: 'Directory Context Generator',
    dateRange: 'Jan 2025',
    location: 'Remote',
    keywords: [
      'Automation',
      'Python',
      'Documentation',
      'OpenAI API',
      'GPT-4o',
      'Directory Analysis'
    ],
    description:
      'Automates project documentation by scanning directories and extracting key context. Uses Python (OS, pathlib) to analyze file structures, dependencies, and configurations. Parses files like package.json, requirements.txt, pyproject.toml, Dockerfiles, and .env. Generates structured summaries in Markdown or JSON for easy reference. Integrates OpenAI’s GPT-4o for code and dependency summaries.',
    imageUrl: directory_context_generator
  },
  {
    id: 4,
    title: 'haggle',
    dateRange: 'Jan 2023 - June 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Full Stack Development',
      'React',
      'JavaScript',
      'HTML/CSS',
      'PostgreSQL',
      'Supabase',
      'Google Cloud',
      'AWS',
      'Git'
    ],
    description:
      'A digital marketplace, haggle helps Cal Poly students buy, sell, and trade within the San Luis Obispo community. This app not only showcases local listings across a variety of categories, but also facilitates a seamless communication stream between users, allowing them to send and receive offers directly within the platform. Moreover, users enjoy complete control over their listings, with easy-to-use tools for managing and updating offers. Whether you are decluttering your dorm, searching for textbooks, or finding unique local treasures, Haggle will help you get it done.',
    googleSlidesUrl:
      'https://docs.google.com/presentation/d/1f19od5-GycpifNpAa9nfdFo-ALLFyV4xxcYMqno31zM/edit?usp=sharing',
    imageUrl: haggle
  },
  {
    id: 5,
    title: 'Predictive Modeling Tool for Real Estate Prices (In the USA)',
    dateRange: 'June 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Machine Learning',
      'Python',
      'Data Analysis',
      'Feature Engineering',
      'Regression Models',
      'XGBoost',
      'Scikit-Learn',
      'Hugging Face'
    ],
    description:
      'The real estate valuation tool project develops a predictive modeling application to estimate U.S. home prices based on location and property features. Utilizing historical data and regression techniques, the tool refines various predictive models to enhance accuracy in home valuations. Users can input property details through an intuitive interface, which the system processes using algorithms to predict current market values. The project facilitates comparative analysis of different modeling methods, offering insights into the most effective techniques for real estate price prediction.',
    jupyterNotebookUrl:
      'https://colab.research.google.com/drive/1Ds0wuCkqvZBGuMCIfa94rwXpi48RV46R?usp=sharing',
    googleSlidesUrl:
      'https://docs.google.com/presentation/d/19IFDRqBp30ZlvmGFc0_KDfJ_FjbIDsws09gtf77d2GU/edit?usp=sharing',
    imageUrl: real_estate_ml
  },
  {
    id: 6,
    title: 'Exploratory Data Analysis',
    dateRange: 'May 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Exploratory Data Analysis',
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Statistical Analysis'
    ],
    description:
      'The project involves a detailed exploratory data analysis on an insurance company dataset to determine key attributes for policy classification. Using Python and tools like pandas, matplotlib, and seaborn, the analysis includes data preprocessing, visualization of numerical distributions, and relationship assessments between policy types and demographic variables. Statistical methods like correlation matrices and chi-square tests identify age and motor value as significant predictors. Insights derived from these analyses inform targeted marketing strategies, demonstrating the importance of tailored data analysis in policyholder segmentation.',
    jupyterNotebookUrl:
      'https://colab.research.google.com/drive/1QqOQNr1A41ghGneQpvu_3BWcypmLV-II?usp=sharing',
    imageUrl: eda
  },
  {
    id: 7,
    title: 'Information Retrieval',
    dateRange: 'April 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Information Retrieval',
      'TF-IDF',
      'Cosine Similarity',
      'Text Processing',
      'Python',
      'Natural Language Processing',
      'Document Ranking'
    ],
    description:
      'The Python program implements a document retrieval system using the TF-IDF algorithm and cosine similarity to process and retrieve highly relevant documents for specific queries. It efficiently handles text data preprocessing, including tokenization, removal of punctuation and stopwords, and normalization, to enhance the accuracy of document retrieval. The system calculates TF-IDF scores to quantify the importance of words within the document collection relative to their frequency across all documents, enabling effective information retrieval. By evaluating for cosine similarity, the program assesses the relevance of documents to a given query, ranking them to identify the most relevant documents to each query.',
    jupyterNotebookUrl:
      'https://colab.research.google.com/drive/1F9_drF88K16Ld4sI3TIZ0kHf_LhE4UZz?usp=sharing',
    imageUrl: information_retrieval
  },
  {
    id: 8,
    title: 'Tiny FS',
    dateRange: 'June 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'C Programming',
      'File System Design',
      'Linked Lists',
      'Memory Management',
      'Directory Structures',
      'Data Storage'
    ],
    description:
      'The TinyFS implementation uses linked lists to manage data efficiently, leveraging their O(1) insertion time despite the O(n) search complexity, which slows some operations. The additional features we added include timestamps, file renaming, and directory listing, enhancing user interaction and system utility. While TinyFS lacks full-scale file system features and hierarchical directories, impacting some performance aspects, it remains bug-free and reliable, effectively meeting specific operational needs and user requirements within its defined scope.',
    githubUrl: 'https://github.com/zahaale20/tinyfs',
    imageUrl: tinyfs
  },
  {
    id: 9,
    title: 'Memory Simulator',
    dateRange: 'May 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'C Programming',
      'Memory Management',
      'Page Replacement Algorithms',
      'Translation Lookaside Buffer',
      'Operating Systems'
    ],
    description:
      'The memory simulator project implements a software-based memory management unit (MMU) using Python, showcasing various page replacement algorithms including FIFO, LRU, and Optimal. The program simulates the process of translating logical to physical addresses and handles page faults with a simulated physical memory and TLB (Translation Lookaside Buffer). Users can specify the reference sequence file, the number of frames, and the page replacement algorithm via command line, allowing for dynamic testing of different memory scenarios. The project includes functionality to read a binary backing store, mimic real-world memory operations, and calculate and display memory access statistics such as page faults and TLB hits.',
    githubUrl: 'https://github.com/zahaale20/MemorySimulator',
    imageUrl: memory
  },
  {
    id: 10,
    title: 'Lightweight Processes',
    dateRange: 'April 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'C Programming',
      'Thread Management',
      'Context Switching',
      'Round-Robin Scheduling',
      'Memory Allocation'
    ],
    description:
      'The library provides a C API for creating and managing threads using a round-robin scheduler. This scheduling method employs a queue to determine the sequence in which threads are executed. The development of this threading library involved two main stages. Initially, memory was allocated for each thread’s stack, which involved setting aside and configuring a designated memory area for each thread’s operations. The second stage was managing the transition of control between threads, which required maintaining an accurate record of each thread’s state, including their registers and stack pointers.',
    githubUrl: 'https://github.com/zahaale20/Lightweight_Processes',
    imageUrl: lwp
  },
  {
    id: 11,
    title: 'Database Modeling',
    dateRange: 'Feb 2024 - April 2024',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Database Design',
      'UML Modeling',
      'Entity-Relationship Diagrams',
      'SQL',
      'Java Persistence API',
      'JSON Processing'
    ],
    description:
      "Analyzed Jamba Juice's business rules and information requirements to design a comprehensive Entity/Relationship (E/R) UML model, which was translated into SQL DDL for database schema creation. Optimized schema integrity by refining the design to eliminate anomalies and redundancies, applying lossless decomposition (verified with the chase test) to prevent information loss, and preserving constraints based on functional dependencies. Implemented object-relational mapping using Java Persistence API (JPA) to connect a Java application to a MySQL database and developed SQL queries to address predefined information needs. Designed and populated a document schema using JSON Schema and wrote JSONPath queries to meet the same information requirements as the relational schema. Refinements ensured data consistency, reduced redundancies, and improved query efficiency while aligning schema structures with business objectives.",
    DesignUrl:
      'https://drive.google.com/drive/folders/1KeN5AZsu9eIXj2_gnNaGqBdW4FrrsOSx?usp=sharing',
    ImplementationUrl: 'https://github.com/zahaale20/JambaJuice_JPA',
    imageUrl: jambajuice
  },
  {
    id: 12,
    title: 'Differential Privacy',
    dateRange: 'Jun 2023 - Aug 2023',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Data Privacy',
      'Differential Privacy',
      'Python',
      'OpenDP',
      'K-Anonymity',
      'L-Diversity',
      'Pandas'
    ],
    description:
      "Utilized a Forbes Billionaires dataset from Kaggle to implement and evaluate various privacy preservation methodologies (PPM), including k-Anonymity, l-Diversity, and differential privacy (DP) using OpenDP's Laplace Mechanism, with a focus on balancing the preservation of individual privacy and the utility of sensitive data. Adjusted the Laplace mechanism's scale parameter to analyze, illustrate, and explain the trade-offs between increasing and decreasing noise in the data, demonstrating the delicate equilibrium required to ensure both privacy protection and data usability.",
    githubUrl: 'https://github.com/zahaale20/DP_Implementation',
    imageUrl: openDP
  },
  {
    id: 13,
    title: 'NFL QB Analysis',
    dateRange: 'Jun 2023 - Aug 2023',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Apache Spark',
      'ETL Pipelines',
      'SQL',
      'Python',
      'Fantasy Football Analytics',
      'Big Data Processing'
    ],
    description:
      'Developed ETL processes using Apache Spark (specifically PySpark), Dataframes, and SQL to analyze over 114,000 lines of weekly NFL player data from 1990 to 2022. Implemented data pipelines to evaluate quarterbacks fantasy football production, individual performance considering team dynamics, and to categorize quarterbacks in a tier list in order to gain insights for the 2023 fantasy football season.',
    githubUrl:
      'https://github.com/zahaale20/NFL-Fantasy-Football-Quarterback-Analysis/blob/main/Zaharia_NFL_Quarterback_Analysis.ipynb',
    imageUrl: nfl
  },
  {
    id: 14,
    title: 'Edit Distance',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: [
      'String Matching Algorithms',
      'Levenshtein Distance',
      'Dynamic Programming',
      'Python',
      'Computational Linguistics'
    ],
    description:
      'Implemented the Levenshtein distance algorithm, a crucial metric in the field of computational linguistics and computer science for measuring the similarity between two strings. By computing the minimum number of single-character edits required to change one word into another—permitting insertions, deletions, and substitutions—this script demonstrates a fundamental approach to understanding textual data. The core of the project involves constructing a dynamic programming matrix to iteratively calculate distances, offering insights into the optimization of string comparison processes.',
    githubUrl: 'https://github.com/zahaale20/Edit-Distance',
    imageUrl: editdistance
  },
  {
    id: 15,
    title: 'Strongly Connected Components',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Graph Algorithms',
      'Depth-First Search',
      'Strongly Connected Components',
      'Python',
      'Algorithm Optimization'
    ],
    description:
      'Implemented a Python solution to identify and delineate strongly connected components within a directed graph by reading graph data from a text file, where each vertex and its directed edges are represented as pairs of integers. Leveraged a depth-first search (DFS) algorithm to explore the graph, marking pre-visit and post-visit times to detect cycles and determine strongly connected components. Organized vertices into distinct components such that all vertices within each component could reach one another, and output a sorted list of lists, with each sublist representing a strongly connected component and its vertices sorted in ascending order.',
    githubUrl: 'https://github.com/zahaale20/Strongly-Connected-Components',
    imageUrl: components
  },
  {
    id: 16,
    title: 'Divide and Conquer',
    dateRange: 'Jan 2023',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Divide and Conquer Algorithms',
      'Time Complexity Analysis',
      'Python',
      'Computational Efficiency'
    ],
    description:
      'Designed and implemented a divide-and-conquer algorithm in Python to efficiently identify the unique singleton element in a sorted sequence of integers where all other elements are duplicated. The algorithm divides the problem space into smaller sub-problems, determines the singleton by analyzing the middle element and its neighbors, and adjusts the search space based on whether the middle element and its position (odd or even) align with duplication patterns. This approach minimizes comparisons and ensures high efficiency. The program reads integers from a file, processes the sequence line by line, and outputs the singleton element to stdout.',
    githubUrl: 'https://github.com/zahaale20/Divide-and-Conquer',
    imageUrl: divideconquer
  },
  {
    id: 17,
    title: 'Secret Society of Pixel Thugs',
    dateRange: 'Apr 2021 - Aug 2021',
    location: 'San Luis Obispo, CA',
    keywords: [
      'NFT Development',
      'Blockchain',
      'Cardano',
      'JavaScript',
      'Adobe Illustrator',
      'Metadata Integration'
    ],
    description:
      'Designed 302 unique traits for the Pixel Thug NFT collection using Adobe Illustrator, randomized layers, embedded metadata, and generated 5,000 NFTs through custom JavaScript scripts, successfully selling the collection for $3,000 and demonstrating effective branding and execution.',
    googleSlidesUrl:
      'https://docs.google.com/presentation/d/1gFCEblNixQbspmDqczvLn9asbL-J0fPMgzeBW5jwcwA/edit?usp=sharing&usp=embed_facebook',
    imageUrl: pixelthugz
  },
  {
    id: 18,
    title: 'HODLRocket',
    dateRange: 'Apr 2020 - Aug 2020',
    location: 'San Luis Obispo, CA',
    keywords: [
      'Cryptocurrency',
      'BEP-20 Token',
      'Binance Smart Chain',
      'Solidity',
      'Smart Contracts',
      'Web3 Development'
    ],
    description:
      'Led a team of eight to successfully launch a BEP-20 token, achieving a market cap of over $30,000, while accumulating $100,000+ in Web 3.0 assets through strategic planning and investing. Developed a comprehensive website using GoDaddy to host all community resources, created consistent branding and social media content with Adobe Illustrator, and drove engagement in a community of over 1,000 members across Instagram, Twitter, and Discord.',
    socialmediaURL: 'https://www.instagram.com/hodlrocketofficial/',
    imageUrl: hodlrocket
  }
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
          <VertNavContainer>
            <VertNavBar>
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
            </VertNavBar>
          </VertNavContainer>
  
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
                    <KeyWordsContainer>
                      {project.keywords?.map((tech, index) => (
                        <KeyWordsText key={index}>{tech}</KeyWordsText>
                      ))}
                    </KeyWordsContainer>
  
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
            <AdImage src={adImages[adIndex]} alt="Advertisement" />
          </AdContainer>
        </FrameLayout>
    </>
  );
}

export default ProjectsPage;