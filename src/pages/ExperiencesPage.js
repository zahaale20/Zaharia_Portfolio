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
import summit from '../assets/summit.jpeg';
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
    title: 'California Polytechnic State University',
    subtitle: 'BS in Computer Science',
    dateRange: 'Sep 2020 - June 2024',
    location: 'San Luis Obispo, CA',
    imageUrl: calpoly,
  },
  {
    id: 2,
    title: 'Universidad Carlos III de Madrid',
    subtitle: 'Study Abroad',
    dateRange: 'Sep 2022 - Dec 2022',
    location: 'Madrid, Spain',
    imageUrl: uc3m,
  },
  {
    id: 3,
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
    title: 'Computer Science Tutor',
    subtitle: 'Grade Potential',
    keywords: ['Leadership', 'Adaptability', 'Java', 'Python', 'SQL', 'Educational Material Design', 'Teaching'],
    description: '● Empowered 30+ students to reach their academic computer science goals by personalizing 4 crash courses, 24 lessons, 24 assignments, and 12 mastery projects for Java, Python, SQL and Web Development',
    dateRange: 'June 2023 - Present',
    location: 'San Luis Obispo, CA',
    imageUrl: gradepotential,
  },
  {
    id: 2,
    title: 'Software Engineering Intern',
    subtitle: '206 Realty',
    keywords: ['Python','Data Structures', 'Algorithms', 'Excel', 'CSV',  'Customer Service'],
    description: '● Cut down manual data retrieval efforts by 83.3%, saving 4 hours of labor per week, by developing a pipeline using Python (Pandas) to pre-process 242,962 leads and create a MySQL database for efficient querying \n● Boosted lead conversions by 26% by coding a Lead Prioritization Tool that used correlation analysis to identify 2,388 high-priority leads for targeted outreach with Python (Pandas, Matplotlib, Seaborn)',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 3,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Haircutting', 'Business Development', 'Marketing', 'Social Media', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: '● Launched a haircutting service at Cal Poly by creating a brand identity using Adobe Illustrator and servicing 10 students per day, building a community of 500 followers on Instagram \n● Expanded client base by an average of 4 clients per post through strategic social media marketing, utilizing wireless equipment to provide haircuts and create content in over 10+ scenic locations (mountains, rivers, lakes, etc...)',
    dateRange: 'Jan 2021 - Aug 2022',
    location: 'San Luis Obispo, CA',
    imageUrl: dormcuts,
  },
  {
    id: 4,
    title: 'Salon Coordinator',
    subtitle: 'Bombaii Cutters',
    keywords: ['Management', 'Organizational Skills', 'Customer Service', 'Social Media'],
    dateRange: 'Jun 2021 - Aug 2021',
    description: '● Managed daily operations of a hair salon, including inventory and appointment scheduling, while resolving all client and staff conflicts, during which the owner, my boss, underwent and recovered from multiple surgeries \n● Eliminated 100% of error interpreting handwriting from scheduling book by switching to an online scheduling software for coordinating appointments between clients and stylists',
    location: 'Kirkland, WA',
    imageUrl: bombaiicutters,
  },
  {
    id: 5,
    title: 'Associate',
    subtitle: 'Panera',
    keywords: ['Customer Service', 'Teamwork', 'Problem-Solving', 'Cash Handling', 'Food Prep'],
    dateRange: 'Apr 2019 - Jun 2020',
    description: '● Delivered exceptional customer service, ensuring order accuracy and promptness which enhanced customer satisfaction and loyalty \n● Supported daily operations, including food preparation and maintaining cleanliness standards, contributing to a seamless and efficient dining experience',
    location: 'Issaquah, WA',
    imageUrl: panera,
  },
  {
    id: 6,
    title: 'Basketball Referee',
    subtitle: 'Issaquah Parks and Recreation',
    keywords: ['Officiating', 'Rule Enforcement', 'Conflict Resolution', 'Event Coordination', 'Scorekeeping'],
    dateRange: 'Jan 2016 - Apr 2019',
    description: '● Officiated youth and adult basketball games, ensuring fair play and adherence to game rules, fostering a positive and engaging experience for players and spectators alike \n ● Managed game situations effectively, resolving conflicts and making critical decisions under pressure to maintain the integrity and flow of matches',
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
    id: 2,
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