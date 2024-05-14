import React, { useState } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import {
  FrameLayout,
  OverviewContainer,
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
  ListItem
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

const education_experiences = [
  {
    id: 1,
    title: 'California Polytechnic State University',
    subtitle: 'BS in Computer Science',
    dateRange: 'Sep 2020 - Dec 2024',
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
    description: '● Demonstrating leadership, adaptability, and interpersonal skills by mentoring students to reach their academic computer science goals\n● Designing lesson plans, study materials, and hands-on projects tailored to individual students\' needs and learning styles, focusing on Java and Python, data analysis in SQL, Pandas, and R, and hardware',
    dateRange: 'June 2023 - Present',
    location: 'San Luis Obispo, CA',
    imageUrl: gradepotential,
  },
  {
    id: 2,
    title: 'Software Engineering Intern',
    subtitle: '206 Realty',
    keywords: ['Python','Data Structures', 'Algorithms', 'Excel', 'CSV',  'Customer Service'],
    description: '● Developed a Python tool with the Pandas library for effective aggregation, cleaning, and merging of client data from various sources into DataFrames, facilitating analysis ● Engineered a client lead prioritization algorithm assigning weighted values to key attributes/calculations such as frequency of property inquiries, social media engagement, and past interactions with the company, to rank leads by their conversion potential● Strategically utilized the algorithm\'s output to identify and prioritize top leads for cold calling, significantly enhancing the team\'s efficiency and focus ● Managed communications with potential clients, ensuring prompt, active, and efficient correspondence',
    dateRange: 'June 2022 - Aug 2022',
    location: 'Bellevue, WA',
    imageUrl: realty206,
  },
  {
    id: 3,
    title: 'Founder / Barber',
    subtitle: 'SLO Dorm Cuts',
    keywords: ['Haircutting', 'Business Development', 'Marketing', 'Social Media', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: '● Launched a convenient haircutting service at Cal Poly, utilizing innovative marketing strategies to quickly become a recognized name among students\n● Set up an an efficient appointment booking tool to enhance client experience and operational efficiency\n● Fostered a strong campus network through exceptional service and community engagement, significantly contributing to the business\'s growth and reputation\n● Created a brand identity by designing logos, banners, business cards, and instagram posts using Adobe Illustrator and Photoshop',
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
    description: '● Greeting clients and managing the salon\'s front desk, including answering phones, scheduling appointments, and confirming appointments\n● Maintaining accurate client records and ensuring all necessary information is collected and up to date\n● Assisting with various administrative tasks, such as billing, ordering supplies, and updating the salon\'s social media presence\n● Building relationships with clients to foster loyalty and repeat business\n● Ensuring the salon is clean, organized, and well-stocked at all times\n● Providing support to stylists and other salon staff as needed',
    location: 'Kirkland, WA',
    imageUrl: bombaiicutters,
  },
  {
    id: 5,
    title: 'Ski Instructor',
    subtitle: 'The Summit at Snoqualmie',
    keywords: ['Instruction', 'Teamwork', 'Communication', 'Risk Analysis', 'Record Keeping'],
    dateRange: 'Dec 2020 - Jan 2021',
    description: '● Provided quality ski instruction to students of all ages and skill level● Demonstrated skiing techniques and safety procedures to ensure that students learn the proper skills and safety protocols● Communicated effectively with students, parents, and other instructors to ensure a positive and safe learning environment● Maintained accurate records of student progress and attendance, including tracking their skill level and the number of lessons completed● Ensured student safety by monitoring the slopes and taking action to prevent accidents or injuries● Collaborating with other ski instructors and resort staff to ensure the smooth and efficient operation of the ski school.',
    location: 'Snoqualmie, WA',
    imageUrl: summit,
  },
  {
    id: 6,
    title: 'Associate',
    subtitle: 'Panera',
    keywords: ['Customer Service', 'Teamwork', 'Problem-Solving', 'Cash Handling', 'Food Prep'],
    dateRange: 'Apr 2019 - Jun 2020',
    description: '● Greeted customers, took orders and processed payments● Prepared food and beverages, including baking pastries and brewing coffee● Maintained a clean and organized workspace, including restocking supplies and cleaning equipment● Adhered to food safety and sanitation guidelines● Built and maintained positive relationships with customers and team members●Assisting with various tasks as assigned by management',
    location: 'Issaquah, WA',
    imageUrl: panera,
  },
  {
    id: 5,
    title: 'Basketball Referee',
    subtitle: 'Issaquah Parks and Recreation',
    keywords: ['Officiating', 'Rule Enforcement', 'Conflict Resolution', 'Event Coordination', 'Scorekeeping'],
    dateRange: 'Jan 2016 - Apr 2019',
    description: '● Officiated youth basketball games, including making calls on fouls, violations, and out-of-bounds situations● Communicated effectively with players, coaches, and parents to ensure a positive and respectful playing environment● Maintained and updated records, including keeping track of score, fouls, and timeouts● Ensured player safety by making decisions quickly and accurately, and taking appropriate action when necessary● Collaborated with other referees and league officials to ensure the smooth and efficient operation of the basketball program● Provided constructive feedback and recommendations to players and coaches to encourage growth and improvement',
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
    description: '● Started and managed a volunteering/fundraising organization to help local and international (Romanian) children in need \n● Helped raise over $25,000 and contribute a cumulative 500 volunteering hours\n● Awarded Platinum National Heritage Award by Romanian Embassy in Washington D.C. Organized and lead meetings, events, activities',
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
          <OverviewContainer>
            {renderExperiences()}
          </OverviewContainer>
        </FrameLayout>
    </>
  );
}

export default ExperiencesPage;