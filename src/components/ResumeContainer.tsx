// src/components/ResumeContainer.tsx
import React from 'react';
import { ResumeI } from '../types/resumeTypes';

import headerDesigns from './sectionOptions/header';
import summaryDesigns from './sectionOptions/summary';
import skillsDesigns from './sectionOptions/skills';
import workExperienceDesigns from './sectionOptions/experience';
import educationDesigns from './sectionOptions/education';
import footerDesigns from './sectionOptions/footer';

// Helper functions to get the right component based on the design selection
const getHeaderComponent = (designName: string) => {
  const design = headerDesigns.designs.find(d => d.name === designName);
  return design ? design.component : headerDesigns.designs[0].component;
};

const getSummaryComponent = (designName: string) => {
  const design = summaryDesigns.designs.find(d => d.name === designName);
  return design ? design.component : summaryDesigns.designs[0].component;
};

const getSkillsComponent = (designName: string) => {
  const design = skillsDesigns.designs.find(d => d.name === designName);
  return design ? design.component : skillsDesigns.designs[0].component;
};

const getWorkExperienceComponent = (designName: string) => {
  const design = workExperienceDesigns.designs.find(d => d.name === designName);
  return design ? design.component : workExperienceDesigns.designs[0].component;
};

const getEducationComponent = (designName: string) => {
  const design = educationDesigns.designs.find(d => d.name === designName);
  return design ? design.component : educationDesigns.designs[0].component;
};

const getFooterComponent = (designName: string) => {
  const design = footerDesigns.designs.find(d => d.name === designName);
  return design ? design.component : footerDesigns.designs[0].component;
};

interface ResumeContainerProps {
  resume: ResumeI;
  useCompactSkills?: boolean; // For backward compatibility - can be removed later
}

const ResumeContainer: React.FC<ResumeContainerProps> = ({
  resume,
  useCompactSkills = true // Default value for backward compatibility
}) => {
  // Get the components based on the selected designs
  const HeaderComponent = getHeaderComponent(resume.designSelections.headerDesign);
  const SummaryComponent = getSummaryComponent(resume.designSelections.summaryDesign);

  // For skills, temporarily use the useCompactSkills prop for backward compatibility
  // Later, this would use resume.designSelections.skillsDesign
  const SkillsComponent = useCompactSkills
      ? skillsDesigns.designs.find(d => d.name === 'compact')?.component
      : skillsDesigns.designs.find(d => d.name === 'detailed')?.component;

  const WorkExperienceComponent = getWorkExperienceComponent(resume.designSelections.workExperienceDesign);
  const EducationComponent = getEducationComponent(resume.designSelections.educationDesign);

  // Footer is optional
  let FooterComponent;
  if (resume.footerData && resume.designSelections.footerDesign) {
    FooterComponent = getFooterComponent(resume.designSelections.footerDesign);
  }

  return (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
        <div className="print:shadow-none" id="resume-content">
          <HeaderComponent data={resume.headerData} />
          <SummaryComponent data={resume.summaryData} />
          {SkillsComponent && <SkillsComponent data={resume.skillsData} />}
          <WorkExperienceComponent data={resume.workExperienceData} />
          <EducationComponent data={resume.educationData} />
          {FooterComponent && resume.footerData && <FooterComponent data={resume.footerData} />}
        </div>
      </div>
  );
};

export default ResumeContainer;