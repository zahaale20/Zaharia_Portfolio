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

import cavostudio from '../assets/cavostudio.png';
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

import aws from '../assets/aws.jpg';
import google from '../assets/google.jpg';
import snowflake from '../assets/snowflake.png';

const education_experiences = [
  {
    id: 1,
    title: 'Seattle University',
    subtitle: 'MS in Computer Science, Software Engineering ',
    dateRange: 'March 2025 - June 2027',
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
    title: 'Software Consultant',
    subtitle: 'Cavo Studio',
    keywords: ['Computer Vision', 'Vessel Detection', 'Research Design', 'Project Planning', 'Interdisciplinary Collaboration'],
    description:
      '● Gathering requirements and collaborating with key stakeholders to modernize the Puget Sound Plumbing & Heating website.\n' +
      '● Leveraging React, FastAPI, and AWS to build a scalable, high-performance static site focused on improving user engagement. \n' +
      '● Presenting weekly progress reports using Google Slides to stakeholders, ensuring project alignment and full transparency.',
    dateRange: 'September 2025 – Present',
    location: 'Seattle, WA',
    imageUrl: cavostudio,
  },  
  {
    id: 1,
    title: 'Computer Vision Research Assistant',
    subtitle: 'Seattle University',
    keywords: ['Computer Vision', 'Vessel Detection', 'Research Design', 'Project Planning', 'Interdisciplinary Collaboration'],
    description:
      '● Led a 3-person research team to design and develop a vision-based pre-collision avoidance system for sailboats and bridges.\n' +
      '● Defined system requirements, site geometry, and implementation strategies to guide the project\'s technical execution.\n' +
      '● Compiled a tailored dataset for model training by collecting and labeling 1,500 images (bounding boxes and mast-tip points).\n'  +
      '● Evaluated three mast-tip detection methods using YOLO object detection, reducing mast-tip localization error by 15%.',
    dateRange: 'June 2025 – September 2025',
    location: 'Seattle, WA',
    imageUrl: seattleu,
  },  
  {
    id: 1,
    title: 'Membership Representative',
    subtitle: 'Columbia Athletic Club - Pine Lake',
    keywords: ['Lead Generation', 'Customer Consultation', 'Sales Operations', 'Automation Tools', 'Cloud/AI'],
    description: 
      '● Temporarily filled in for a membership representative on medical leave, handling sales, tours, and account management.\n' +  
      '● Analyzed 673,000+ sales records to identify top products, uncover trends, and forecast sales using pandas, matplotlib, and RNN.\n' +
      '● Devised a React QR‑based form system, reducing prospect onboarding time by 50% and eliminating the need for paper storage.\n' +
      '● Engineered a supervised solution for automating email responses using Jupyter, Python, and cloud APIs (OpenAI, Gmail).',
    dateRange: 'April 2025 – Present',
    location: 'Sammamish, WA',
    imageUrl: cac,
  },
  {
    id: 2,
    title: 'Front Desk Attendant',
    subtitle: 'Columbia Athletic Club - Pine Lake',
    keywords: ['Early Morning Operations', 'Customer Service', 'Facility Management', 'Team Support'],
    description: 
      '● Wake as early as 3:30 AM to prepare the facility for a smooth 5:00 AM opening, ensuring readiness before members arrive.\n' +
      '● Greet and assist 100+ members daily, fostering a welcoming environment and promoting long-term habit formation.\n' +
      '● Maintain cleanliness and organization of the gym, performing regular upkeep to exceed member expectations.\n' +
      '● Support coworkers and management with opening procedures, troubleshooting, and daily operational needs.',
    dateRange: 'December 2025 – Present',
    location: 'Sammamish, WA',
    imageUrl: cac,
  },
  {
    id: 3,
    title: 'Computer Science Tutor',
    subtitle: 'Logic Lab',
    keywords: ['Tutoring', 'Computer Science', 'Student Development', 'Educational Content'],
    description: 
    '● Launched a tutoring service that helped 30+ K–12 and undergraduate students achieve their academic computer science goals.\n' +
    '● Developed a client management application with React, FastAPI, and Supabase to track lessons, progress, and payments.',
    dateRange: 'August 2023 - March 2025',
    location: 'Greater Seattle Area',
    imageUrl: logiclab,
  },
  {
    id: 5,
    title: 'Real Estate Intern',
    subtitle: '206 Realty',
    keywords: ['Python', 'Databases', 'Data Analytics', 'Lead Conversion', 'Real Estate'],
    description: 
      '● Migrated 10 Excel files into a PostgreSQL database and developed FastAPI endpoints for efficient and accurate querying.\n' +
      '● Oversaw a lead generation pipeline, executed 2,000+ cold calls and qualified 300+ prospects, resulting in $2,500,000+ in sales.',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 7,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Entrepreneurship', 'Marketing', 'Customer Retention', 'Networking'],
    description: 
      '● Self-taught professional haircutting through YouTube tutorials and hands-on practice with dorm residents and undergrad peers.\n' +
      '● Built an initial portfolio on Instagram by offering free haircuts to 12 dorm members, establishing credibility and client trust.\n' +
      '● Gained over 1000 clients by designing business cards, using creative social media marketing, and leveraging Greek Life networks.',
    dateRange: 'Dec 2020 - Jun 2023',
    location: 'San Luis Obispo, CA',
    imageUrl: dormcuts,
    socialmediaURL:
      'https://www.instagram.com/haircuts.alex/',

  },
  {
    id: 8,
    title: 'Salon Coordinator',
    subtitle: 'Bombaii Cutters',
    keywords: ['Salon Management', 'Customer Service', 'Scheduling', 'Inventory Control'],
    description: 
      '● Took over managerial duties during owner’s medical leave, including inventory, scheduling, finances, and conflict resolution.\n' +
      '● Improved haircutting skills through hands-on experience and mentoring from professionals in a fast-paced salon environment.',
    dateRange: 'Jun 2021 - Aug 2021',
    location: 'Kirkland, WA',
    imageUrl: bombaiicutters,
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
      '● Raised over $15,000 and contributed 100+ volunteer hours towards fundraising and community service efforts.\n' +
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
    title: 'AWS Academy Cloud Foundations',
    subtitle: 'Seattle University',
    dateRange: 'Issued Jun 2024',
    location: 'Seattle, WA',
    imageUrl: aws,
    websiteUrl: 'https://www.credly.com/badges/4e2f4b93-a559-40eb-bcbb-a78c53f6e8b4/linked_in_profile'
  },
  {
    id: 2,
    title: 'Google Project Management',
    subtitle: 'Coursera',
    dateRange: 'Issued May 2024',
    location: 'Remote',
    imageUrl: google,
    websiteUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/8H882POCEF95'
  },
  {
    id: 3,
    title: 'Snowflake Hands-On Essentials',
    subtitle: 'Snowflake University',
    dateRange: 'Issued May 2024',
    location: 'Remote',
    imageUrl: snowflake,
    certificates: [
      'https://achieve.snowflake.com/b39b4f0c-77cf-4de2-a4e2-9116f2ed530e#acc.iyfF1Wlu',
      'https://achieve.snowflake.com/d471b520-35a2-4e8b-99f6-6efc2b9cd317#acc.QvFcKOW0',
      'https://achieve.snowflake.com/ff522eec-5dee-496c-8fda-d8d74ea9787f#acc.oLGQfYWT',
      'https://achieve.snowflake.com/e765d7cf-cefc-40b7-936d-c385141ee830#acc.k1Onl30K',
      'https://achieve.snowflake.com/dbc7d808-bb30-452b-959c-06fee4b32b00#acc.I0J5oDzT'
    ]
  },
  {
    id: 4,
    title: 'International Baccalaureate Diploma',
    subtitle: 'International Baccalaureate',
    dateRange: 'Issued Jul 2020',
    location: 'Sammamish, WA',
    imageUrl: ib,
  },
  {
    id: 5,
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

  const availableLinks = linkTypes.filter(linkType => project[linkType.key]);

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '12px',
        paddingBottom: '10px',
        marginTop: '12px',
        scrollSnapType: 'x mandatory'
      }}
    >
      {availableLinks.map(linkType => (
        <a
          key={linkType.key}
          href={project[linkType.key]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', flex: '0 0 auto', scrollSnapAlign: 'start' }}
        >
          <MainButton>{linkType.text}</MainButton>
        </a>
      ))}

      {project.certificates?.map((url, idx) => (
        <a
          key={`cert-${idx}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', flex: '0 0 auto', scrollSnapAlign: 'start' }}
        >
          <MainButton>{`Certificate ${idx + 1}`}</MainButton>
        </a>
      ))}
    </div>
  );
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