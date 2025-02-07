import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import {
  FrameLayout,
  MainContainer,
  ExperienceContainer,
  DescriptionText,
  DescriptionHeaderText,
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
  AdContainer
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
    dateRange: 'Sep 2020 - June 2024',
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
    title: 'Founder/Computer Science Tutor',
    subtitle: 'Logic Lab',
    keywords: ['Business Development', 'React', 'Social Media Management', 'System Design', 'Tutoring'],
    description: 
      '● Compiling a suite of APIs and automated pipelines that leverage LLMs and prompt engineering to streamline full-stack development workflows\n' +
      '● Leveraging FAISS and OpenAI to embed, index, and retrieve coding contexts\n' +
      '● Testing accuracy, runtime metrics, and resource usage across models from OpenAI, Deepseek, and Claude\n' +
      '● Researching LLM memory systems, abstraction techniques, continual learning, and deep research',
    dateRange: 'January 2025 - Present',
    location: 'Sammamish, WA',
    imageUrl: logiclab,
  },
  {
    id: 2,
    title: 'Front Desk',
    subtitle: 'Columbia Athletic Club - Pine Lake',
    keywords: ['Organization', 'Time-Managment', 'Habit Development', 'Relationship Development'],
    description: '● Maintaining a clean and organized facility by performing building upkeep, including folding and restocking 100s of towels \n● Fostering positive relationships with 100s of members and staff, supporting habit development and building genuine connections',
    dateRange: 'December 2025 - Present',
    location: 'Sammamish, WA',
    imageUrl: cac,
  },
  {
    id: 3,
    title: 'Computer Science Tutor',
    subtitle: 'Grade Potential',
    keywords: ['Leadership', 'Adaptability', 'Tutoring', 'Computer Science'],
    description: '● Empowered 30+ students to reach their academic computer science goals by personalizing 4 crash courses, 24 lessons, 24 assignments, and 12 mastery projects for Java, Python, SQL and Web Development',
    dateRange: 'June 2023 - January 2025',
    location: 'San Luis Obispo, CA',
    imageUrl: gradepotential,
  },
  {
    id: 4,
    title: 'Software Engineering Intern',
    subtitle: '206 Realty',
    keywords: ['Python', 'Databases', 'Data Collection', 'Client Acquisition', 'Real Estate'],
    description: '● Collaborated with my manager to fully redesign the internal database schema and data collection processes \n●  Analyzed historical conversion trends to identify key factors for successful client acquisition \n● Developed a lead prioritization tool in Python, boosting lead conversion rate by 28% \n● Executed 2,000+ cold calls, strategically identifying and setting up high-priority leads for further engagement',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 5,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Haircutting', 'Business Development', 'Networking', 'Social Media', 'Graphic ', 'Adobe Photoshop'],
    description: '● Bought trimmers, scissors, and a mirror to learn how to cut my own hair. \n● Gave free haircuts to the 12 people living on my dorm floor  \n● Made an Instagram, posting every haircut  \n● Grew my business exponentially networking through the greek life system until I was doing 10-12 haircuts per day ',
    dateRange: 'Jan 2021 - Aug 2022',
    location: 'San Luis Obispo, CA',
    imageUrl: dormcuts,
  },
  {
    id: 6,
    title: 'Salon Coordinator',
    subtitle: 'Bombaii Cutters',
    keywords: ['Management', 'Organizational Skills', 'Customer Service'],
    dateRange: 'Jun 2021 - Aug 2021',
    description: '● Managed daily operations of a hair salon, including inventory and appointment scheduling \n● Resolved all client and staff conflicts  \n● Grew my haircutting skills\n',
    location: 'Kirkland, WA',
    imageUrl: bombaiicutters,
  },
  {
    id: 7,
    title: 'Associate',
    subtitle: 'Panera',
    keywords: ['Customer Service', 'Teamwork', 'Problem-Solving', 'Cash Handling', 'Food Prep'],
    dateRange: 'Apr 2019 - Jun 2020',
    description: '● Supported daily operations, including food preparation and maintaining cleanliness standards \n● Delivered exceptional customer service',
    location: 'Issaquah, WA',
    imageUrl: panera,
  },
  {
    id: 8,
    title: 'Basketball Referee',
    subtitle: 'Issaquah Parks and Recreation',
    keywords: ['Officiating', 'Rule Enforcement', 'Conflict Resolution', 'Event Coordination', 'Scorekeeping'],
    dateRange: 'Jan 2016 - Apr 2019',
    description: '● Officiated youth basketball games \n ● Ensured fair play and adherence to game rules  \n ● Fostered a positive and engaging experience for players and parents \n ● Learned to make critical, time-sensitive decisions under pressure',
    location: 'Issaquah, WA',
    imageUrl: issaquah,
  },
];

const volunteering_experiences = [
  {
    id: 1,
    title: 'Athletes For Kids',
    subtitle: 'Mentor',
    keywords: ['Leadership', 'Mentoring', 'Problem-Solving', 'Organizational Skills'],
    description: '● In the AFK program, I became a mentor for a buddy with social and learning disabilities. I found ways to help my buddy overcome challenges that were prevalent in his day to day life, which in the end created a tight knit bond between us that allowed us both to grow in our separate ways',
    link: 'https://athletesforkids.org/',
    dateRange: 'Sep 2018 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: athletesforkids,
  },
  {
    id: 2,
    title: 'Forgotten Faces Foundation',
    subtitle: 'Founder / Volunteer',
    keywords: ['Leadership', 'Adaptability', 'Collaboration', 'Organizational Skills', 'Management'],
    description: '● Helped raise over $25,000 and contribute a cumulative 500 volunteering hours by founding a volunteering and fundraising organization to help local and international (Romanian) children in need \n● Awarded Platinum National Heritage Award by Romanian Embassy in Washington D.C.',
    link: 'https://www.facebook.com/ForgottenFacesFoundation',
    dateRange: 'Sep 2016 - Jun 2020',
    location: 'Sammamish, WA',
    imageUrl: forgottenfaces,
  },
  {
    id: 3,
    title: 'Skyline High School Holiday Bazaar',
    subtitle: 'Volunteer',
    keywords: ['Adobe Illustrator', 'Collaboration', 'Marketing'],
    description: '● Designed posters that were prominently displayed throughout Sammamish, driving community attendance to our holiday bazaar● Contributed over 30 hours towards setting up, managing, and cleaning up the event, ensuring its smooth execution from start to finish',
    link: 'https://www.facebook.com/ForgottenFacesFoundation',
    dateRange: 'September 2016 - Jun 2020',
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
          <MainContainer>
            {renderExperiences()}
          </MainContainer>
          <AdContainer>
            <img src={adImages[adIndex]} alt="Advertisement" style={{ width: 'auto', height: '1080px', borderRadius: '15px' }} />
          </AdContainer>
        </FrameLayout>
    </>
  );
}

export default ExperiencesPage;