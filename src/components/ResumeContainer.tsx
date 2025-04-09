// src/components/ResumeContainer.tsx
import React from 'react';
import { Resume } from '../types/resumeTypes';
import {
    getHeaderComponent,
    getSummaryComponent,
    getSkillsComponent,
    getExperienceComponent,
    getEducationComponent,
    getFooterComponent
} from '../registry/designRegistry';

interface ResumeContainerProps {
    resume: Resume;
}

const ResumeContainer: React.FC<ResumeContainerProps> = ({ resume }) => {
    // Use type-safe component getters
    const HeaderComponent = getHeaderComponent(resume.designSelections.headerDesign);
    const SummaryComponent = getSummaryComponent(resume.designSelections.summaryDesign);
    const SkillsComponent = getSkillsComponent(resume.designSelections.skillsDesign);
    const ExperienceComponent = getExperienceComponent(resume.designSelections.experienceDesign);
    const EducationComponent = getEducationComponent(resume.designSelections.educationDesign);

    // Footer is optional
    let FooterComponent = null;
    if (resume.footerData && resume.designSelections.footerDesign) {
        FooterComponent = getFooterComponent(resume.designSelections.footerDesign);
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
            <div className="print:shadow-none" id="resume-content">
                {HeaderComponent && resume.headerData && <HeaderComponent data={resume.headerData} />}
                {SummaryComponent && <SummaryComponent data={resume.summaryData} />}
                {SkillsComponent && <SkillsComponent data={resume.skillsData} />}
                {ExperienceComponent && <ExperienceComponent data={resume.workExperienceData} />}
                {EducationComponent && <EducationComponent data={resume.educationData} />}
                {FooterComponent && resume.footerData && <FooterComponent data={resume.footerData} />}
            </div>
        </div>
    );
};

export default ResumeContainer;