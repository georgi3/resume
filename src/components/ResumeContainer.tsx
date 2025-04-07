// src/components/ResumeContainer.tsx
import React from 'react';
import Header from './Header';
import ProfessionalSummary from './ProfessionSummary';
import Skills from './Skills';
import CompactSkills from './CompactSkills';
import WorkExperience from './WorkExperience';
import Education from './Education';
// import Footer from './Footer';

import {
  HeaderData,
  SummaryData,
  SkillsData,
  WorkExperienceData,
  EducationData,
  FooterData
} from '../types/resumeTypes';

interface ResumeContainerProps {
  headerData: HeaderData;
  summaryData: SummaryData;
  skillsData: SkillsData;
  workExperienceData: WorkExperienceData;
  educationData: EducationData;
  footerData: FooterData;
  useCompactSkills?: boolean;
}

const ResumeContainer: React.FC<ResumeContainerProps> = ({
  headerData,
  summaryData,
  skillsData,
  workExperienceData,
  educationData,
  footerData,
  useCompactSkills = true
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="print:shadow-none" id="resume-content">
        <Header data={headerData} />
        <ProfessionalSummary data={summaryData} />
        {useCompactSkills ? (
            <CompactSkills data={skillsData} />
        ) : (
            <Skills data={skillsData} />
        )}
        <WorkExperience data={workExperienceData} />
        <Education data={educationData} />
        {/*<Footer data={footerData} />*/}
      </div>
    </div>
  );
};

export default ResumeContainer;
