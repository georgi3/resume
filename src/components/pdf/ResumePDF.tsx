// src/components/pdf/ResumePDF.tsx
import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { Resume } from '../../types/resumeTypes';
import {
  getHeaderPDFComponent,
  getSummaryPDFComponent,
  getSkillsPDFComponent,
  getExperiencePDFComponent,
  getEducationPDFComponent,
  getFooterPDFComponent
} from '../../registry/designRegistry';

// Create styles for the page
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12
  }
});

interface ResumePDFProps {
  resume: Resume;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ resume }) => {
  // Use type-safe PDF component getters
  const HeaderComponent = getHeaderPDFComponent(resume.designSelections.headerDesign);
  const SummaryComponent = getSummaryPDFComponent(resume.designSelections.summaryDesign);
  const SkillsComponent = getSkillsPDFComponent(resume.designSelections.skillsDesign);
  const ExperienceComponent = getExperiencePDFComponent(resume.designSelections.experienceDesign);
  const EducationComponent = getEducationPDFComponent(resume.designSelections.educationDesign);

  // Footer is optional
  let FooterComponent = null;
  if (resume.footerData && resume.designSelections.footerDesign) {
    FooterComponent = getFooterPDFComponent(resume.designSelections.footerDesign);
  }

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          {HeaderComponent && resume.headerData && <HeaderComponent data={resume.headerData} />}
          {SummaryComponent && <SummaryComponent data={resume.summaryData} />}
          {SkillsComponent && <SkillsComponent data={resume.skillsData} />}
          {ExperienceComponent && <ExperienceComponent data={resume.workExperienceData} />}
          {EducationComponent && <EducationComponent data={resume.educationData} />}
          {FooterComponent && resume.footerData && <FooterComponent data={resume.footerData} />}
        </Page>
      </Document>
  );
};

export default ResumePDF;