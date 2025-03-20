import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import {
  FrameLayout,
  MainContainer,
  ExperienceContainer,
  DescriptionText,
  DescriptionHeaderText,
  VertNavContainer,
  VertNavBar,
  ExperienceNavItem,
  KeyWordsContainer,
  KeyWordsText,
  ExperienceHeaderContainer,
  ExperienceImage,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceSubtitle,
  ExperienceDescription,
  ExperienceDescriptionContainer,
  ListItem,
  AdContainer,
  AdImage,
  MainButton,
  ProjectLinksContainer
} from '../styles/PageStyle'; 

import seattleu from '../assets/seattleu.jpg';
import calpoly from '../assets/calpoly.png';
import uc3m from '../assets/uc3m.png';
import skyline from '../assets/skyline.png';

import logiclab from '../assets/logiclab.png';
import cac from '../assets/cac.png';
import revere from '../assets/revere.png';
import gradepotential from '../assets/gradepotential.png';
import realty206 from '../assets/realty206.png';
import bombaiicutters from '../assets/bombaiicutters.png'
import dormcuts from '../assets/dormcuts.jpg';
import athletesforkids from '../assets/athletesforkids.png';
import forgottenfaces from '../assets/forgottenfaces.jpeg';
import panera from '../assets/panera.png';
import issaquah from '../assets/issaquah.png';

import ib from '../assets/ib.png';
import arcs from '../assets/arcs.png'

import education from '../assets/education.png';
import work from '../assets/work.png';
import volunteering from '../assets/volunteering.png';
import achievements from '../assets/achievements.png';

import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';

const education_experiences = [
  {
    id: 1,
    title: 'Seattle University',
    subtitle: 'MS in Computer Science, Data Science ',
    dateRange: 'March 2025 - March 2027',
    location: 'Seattle, WA',
    imageUrl: seattleu,
  },
  {
    id: 2,
    title: 'California Polytechnic State University',
    subtitle: 'BS in Computer Science',
    dateRange: 'Sep 2020 - June 2024',
    location: 'San Luis Obispo, CA',
    imageUrl: calpoly,
  },
  {
    id: 3,
    title: 'Universidad Carlos III de Madrid',
    subtitle: 'Study Abroad',
    dateRange: 'Sep 2022 - Dec 2022',
    location: 'Madrid, Spain',
    imageUrl: uc3m,
  },
  {
    id: 4,
    title: 'Skyline High School',
    subtitle: 'International Baccalaureate Diploma',
    dateRange: 'Sep 2016 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: skyline,
  },
];

const work_experiences = [
  {
    id: 1,
    title: 'Front Desk',
    subtitle: 'Columbia Athletic Club - Pine Lake',
    keywords: ['Organization', 'Time Management', 'Customer Relations', 'Facility Maintenance'],
    description: 
      '● Supporting habit development and building positive relationships with 100s of members and staff \n' +
      '● Performing building upkeep, maintaining a clean and organized facility',
    dateRange: 'December 2025 - Present',
    location: 'Sammamish, WA',
    imageUrl: cac,
  },
  {
    id: 2,
    title: 'Computer Science Tutor',
    subtitle: 'Logic Lab',
    keywords: ['Tutoring', 'Computer Science', 'Student Development', 'Educational Content'],
    description: 
    '● Empowered 30+ students to reach their academic computer science goals through personalized tutoring',
    dateRange: 'August 2023 - Present',
    location: 'Sammamish, WA - Hybrid',
    imageUrl: logiclab,
  },
  {
    id: 3,
    title: 'Hackathon Participant',
    subtitle: 'RevereXR',
    keywords: ['VR','OpenAI', 'Python', 'React'],
    description: 
    '● Storyboarded a VR game on Google Slides to bring Lewis Rudd\’s story of Ezelle\’s Famous Chicken\’s to life\n' +
    '● Prototyped an AI MVP to break down narratives into social media captions and images using GPT-4 and DALL-E',
    dateRange: 'February 2025',
    location: 'Seattle, WA',
    imageUrl: revere,
  },
  {
    id: 4,
    title: 'Real Estate Intern',
    subtitle: '206 Realty',
    keywords: ['Python', 'Databases', 'Data Analytics', 'Lead Conversion', 'Real Estate'],
    description: 
      '● Optimized database schemas and data pipelines, improving reporting efficiency\n' +
      '● Analyzed client data and built a Python lead prioritization tool, increasing conversion rates by 28%\n' +
      '● Executed 2,000+ cold calls',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 5,
    title: 'Computer Science Tutor',
    subtitle: 'Grade Potential',
    keywords: ['Tutoring', 'Computer Science', 'Student Development', 'Educational Content'],
    description: 
      '● Empowered 5 students to reach their academic computer science goals through personalized tutoring',
    dateRange: 'August 2023 - Present',
    location: 'Sammamish, WA - Hybrid',
    imageUrl: gradepotential,
  },
  {
    id: 6,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Entrepreneurship', 'Marketing', 'Customer Retention', 'Networking'],
    description: 
      '● Learned and mastered haircutting skills by practicing on myself and dorm residents\n' +
      '● Provided free haircuts to the 12 people on my dorm floor to build a portfolio\n' +
      '● Launched an Instagram page showcasing haircuts, leading to rapid word-of-mouth marketing\n' +
      '● Expanded business through Greek life networking, performing 10-12 haircuts per day',
    dateRange: 'Dec 2020 - Jun 2023',
    location: 'San Luis Obispo, CA',
    imageUrl: dormcuts,
    socialmediaURL:
      'https://www.instagram.com/haircuts.alex/',

  },
  {
    id: 7,
    title: 'Salon Coordinator',
    subtitle: 'Bombaii Cutters',
    keywords: ['Salon Management', 'Customer Service', 'Scheduling', 'Inventory Control'],
    description: 
      '● Managed daily operations of a hair salon, including inventory and appointment scheduling\n' +
      '● Resolved all client and staff conflicts, ensuring smooth operations\n' +
      '● Expanded personal haircutting skills through hands-on salon experience',
    dateRange: 'Jun 2021 - Aug 2021',
    location: 'Kirkland, WA',
    imageUrl: bombaiicutters,
  },
  {
    id: 8,
    title: 'Associate',
    subtitle: 'Panera',
    keywords: ['Customer Service', 'Food Handling', 'Cash Register', 'Teamwork'],
    description: 
      '● Assisted with food preparation and maintained cleanliness standards\n' +
      '● Provided excellent customer service to ensure a positive dining experience',
    dateRange: 'Apr 2019 - Jun 2020',
    location: 'Issaquah, WA',
    imageUrl: panera,
  },
  {
    id: 9,
    title: 'Basketball Referee',
    subtitle: 'Issaquah Parks and Recreation',
    keywords: ['Sports Officiating', 'Decision-Making', 'Conflict Resolution', 'Youth Engagement'],
    description: 
      '● Officiated youth basketball games, ensuring fair play and adherence to game rules\n' +
      '● Fostered a positive and engaging experience for players and parents\n' +
      '● Developed the ability to make quick, confident, and fair decisions under pressure',
    dateRange: 'Jan 2016 - Apr 2019',
    location: 'Issaquah, WA',
    imageUrl: issaquah,
  },
];


const volunteering_experiences = [
  {
    id: 1,
    title: 'Athletes For Kids',
    subtitle: 'Mentor',
    keywords: ['Leadership', 'Mentoring', 'Problem-Solving', 'Youth Development'],
    description: 
      '● Mentored a buddy with social and learning disabilities, providing guidance and support.\n' +
      '● Developed strategies to help my buddy overcome daily challenges and build confidence.\n' +
      '● Formed a strong, supportive bond, allowing both of us to grow in our unique ways.',
    link: 'https://athletesforkids.org/',
    dateRange: 'Sep 2018 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: athletesforkids,
  },
  {
    id: 2,
    title: 'Forgotten Faces Foundation',
    subtitle: 'Founder / Volunteer',
    keywords: ['Leadership', 'Fundraising', 'Nonprofit Management', 'Community Engagement'],
    description: 
      '● Founded and managed a volunteer organization dedicated to supporting underprivileged children locally and in Romania.\n' +
      '● Raised over $25,000 and contributed 500+ volunteer hours towards fundraising and community service efforts.\n' +
      '● Awarded the Platinum National Heritage Award by the Romanian Embassy in Washington D.C. for outstanding contributions.',
    link: 'https://www.facebook.com/ForgottenFacesFoundation',
    dateRange: 'Sep 2016 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: forgottenfaces,
  },
  {
    id: 3,
    title: 'Skyline High School Holiday Bazaar',
    subtitle: 'Volunteer',
    keywords: ['Graphic Design', 'Community Outreach', 'Event Coordination'],
    description: 
      '● Designed and distributed promotional posters throughout Sammamish, increasing event attendance.\n' +
      '● Contributed 30+ hours to setting up, managing, and cleaning up the event, ensuring smooth execution.\n' +
      '● Collaborated with vendors and community members to create an engaging and successful holiday bazaar.',
    link: 'https://www.facebook.com/ForgottenFacesFoundation',
    dateRange: 'Sep 2016 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: skyline,
  },
];


const achievements_experiences = [
  {
    id: 1,
    title: 'International Baccalaureate Diploma',
    subtitle: 'International Baccalaureate',
    dateRange: 'Issued Jul 2020',
    location: 'Sammamish, WA',
    imageUrl: ib,
  },
  {
    id: 2,
    title: 'Romanian National Heritage Platinum Award',
    subtitle: 'ARCS, Embassy of Romania (D.C.), Alianta',
    dateRange: 'Issued Jun 2019',
    location: 'Washington, D.C.',
    imageUrl: arcs,
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
    { key: 'poocoinUrl', text: 'Poo Coin BSC Charts' },
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



function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState('education');

  const experiences = {
    education: education_experiences,
    work: work_experiences,
    volunteering: volunteering_experiences,
    achievements: achievements_experiences
  };

  const renderExperiences = () => (
    experiences[activeCategory].map((experience, index) => (
      <ExperienceContainer key={index}>
        <ExperienceHeaderContainer>
          <ExperienceImage src={experience.imageUrl} alt={experience.title} />
          <ExperienceInfo>
            <ExperienceDescription>{experience.dateRange}</ExperienceDescription>
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceSubtitle>{experience.subtitle}</ExperienceSubtitle>
            <ExperienceDescription>{experience.location}</ExperienceDescription>
          </ExperienceInfo>
        </ExperienceHeaderContainer>

        {['work', 'volunteering'].includes(activeCategory) && (
          <ExperienceDescriptionContainer>
            <KeyWordsContainer>
              {experience.keywords?.map((tech, index) => (
                <KeyWordsText key={index}>{tech}</KeyWordsText>
              ))}
            </KeyWordsContainer>
            <DescriptionHeaderText>Responsibilities</DescriptionHeaderText>
            <DescriptionText>
              <ul>
                {experience.description.split('●').slice(1).map((item, index) => (
                  <ListItem key={index}>{item.trim()}</ListItem>
                ))}
              </ul>
            </DescriptionText>
            <ProjectLinksContainer>
              {renderLinkButtons(experience)}
            </ProjectLinksContainer>
          </ExperienceDescriptionContainer>
        )}
      </ExperienceContainer>
    ))
  );

  const [adIndex, setAdIndex] = useState(0);
  const adImages = [ad1, ad2, ad3];

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
              <ExperienceNavItem
                onClick={() => setActiveCategory('education')}
                active={activeCategory === 'education'}>
                <img src={education} alt="Education" style={{width: '35px', height: '35px'}} />
              </ExperienceNavItem>
              <ExperienceNavItem
                onClick={() => setActiveCategory('work')}
                active={activeCategory === 'work'}>
                <img src={work} alt="Work" style={{width: '35px', height: '35px'}} />
              </ExperienceNavItem>
              <ExperienceNavItem
                onClick={() => setActiveCategory('volunteering')}
                active={activeCategory === 'volunteering'}>
                <img src={volunteering} alt="Volunteering" style={{width: '35px', height: '35px'}} />
              </ExperienceNavItem>
              <ExperienceNavItem
                onClick={() => setActiveCategory('achievements')}
                active={activeCategory === 'achievements'}>
                <img src={achievements} alt="Achievements" style={{width: '35px', height: '35px'}} />
              </ExperienceNavItem>
            </VertNavBar>
          </VertNavContainer>
          <MainContainer>
            {renderExperiences()}
          </MainContainer>
          <AdContainer>
            <AdImage src={adImages[adIndex]} alt="Advertisement" />
          </AdContainer>
        </FrameLayout>
    </>
  );
}

export default ExperiencesPage;