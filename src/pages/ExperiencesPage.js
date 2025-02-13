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
  KeyWordsContent,
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
  AdImage
} from '../styles/PageStyle'; 

import calpoly from '../assets/calpoly.png';
import uc3m from '../assets/uc3m.png';
import skyline from '../assets/skyline.png';
import gradepotential from '../assets/gradepotential.png';
import realty206 from '../assets/realty206.png';
import bombaiicutters from '../assets/bombaiicutters.png'
import dormcuts from '../assets/dormcuts.jpg';
import athletesforkids from '../assets/athletesforkids.png';
import forgottenfaces from '../assets/forgottenfaces.jpeg';
import logiclab from '../assets/logiclab.png';
import cac from '../assets/cac.png';
import seattleu from '../assets/seattleu.jpg';
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
    title: 'AI Researcher',
    subtitle: 'Logic Lab',
    keywords: ['AI Research', 'LLMs', 'Multi-Agent Networks', 'System Design', 'Prompt Engineering'],
    description: 
      '● Compiling a suite of APIs and automating pipelines that leverage LLMs and prompt engineering to streamline workflows in full-stack development\n' +
      '● Leveraging FAISS and OpenAI to embed, index, and retrieve coding contexts\n' +
      '● Testing accuracy, runtime metrics, and resource usage across models from OpenAI, Deepseek, and Claude\n' +
      '● Researching LLM memory systems, multi-agent networks, abstraction techniques, continual learning, deep research, hallucinations, and scheming',
    dateRange: 'January 2025 - Present',
    location: 'Sammamish, WA',
    imageUrl: logiclab,
  },
  {
    id: 2,
    title: 'Front Desk',
    subtitle: 'Columbia Athletic Club - Pine Lake',
    keywords: ['Organization', 'Time Management', 'Customer Relations', 'Facility Maintenance'],
    description: 
      '● Maintained a clean and organized facility by performing building upkeep, including folding and restocking 100s of towels\n' +
      '● Fostered positive relationships with 100s of members and staff, supporting habit development and building genuine connections',
    dateRange: 'December 2025 - Present',
    location: 'Sammamish, WA',
    imageUrl: cac,
  },
  {
    id: 3,
    title: 'Computer Science Tutor',
    subtitle: 'Grade Potential',
    keywords: ['Tutoring', 'Computer Science', 'Student Development', 'Educational Content'],
    description: 
      '● Empowered 30+ students to reach their academic computer science goals\n' +
      '● Designed and personalized 4 crash courses, 24 lessons, 24 assignments, and 12 mastery projects for Java, Python, SQL, and Web Development',
    dateRange: 'June 2023 - January 2025',
    location: 'San Luis Obispo, CA',
    imageUrl: gradepotential,
  },
  {
    id: 4,
    title: 'Software Engineering Intern',
    subtitle: '206 Realty',
    keywords: ['Python', 'Databases', 'Data Analytics', 'Lead Conversion', 'Real Estate'],
    description: 
      '● Collaborated with my manager to fully redesign the internal database schema and data collection processes\n' +
      '● Analyzed historical conversion trends to identify key factors for successful client acquisition\n' +
      '● Developed a lead prioritization tool in Python, boosting lead conversion rate by 28%\n' +
      '● Executed 2,000+ cold calls, strategically identifying and setting up high-priority leads for further engagement',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 5,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Entrepreneurship', 'Marketing', 'Customer Retention', 'Networking'],
    description: 
      '● Learned and mastered haircutting skills by practicing on myself and dorm residents\n' +
      '● Provided free haircuts to the 12 people on my dorm floor to build a portfolio\n' +
      '● Launched an Instagram page showcasing haircuts, leading to rapid word-of-mouth marketing\n' +
      '● Expanded business through Greek life networking, performing 10-12 haircuts per day',
    dateRange: 'Jan 2021 - Aug 2022',
    location: 'San Luis Obispo, CA',
    imageUrl: dormcuts,
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
            <KeyWordsContent>
              {experience.keywords?.map((tech, index) => (
                <KeyWordsText key={index}>{tech}</KeyWordsText>
              ))}
            </KeyWordsContent>
            <DescriptionHeaderText>Responsibilities</DescriptionHeaderText>
            <DescriptionText>
              <ul>
                {experience.description.split('●').slice(1).map((item, index) => (
                  <ListItem key={index}>{item.trim()}</ListItem>
                ))}
              </ul>
            </DescriptionText>
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