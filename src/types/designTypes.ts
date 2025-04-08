// src/types/designTypes.ts
import { ComponentType } from 'react';
import { 
  HeaderData, 
  SummaryData, 
  SkillsData, 
  WorkExperienceData, 
  EducationData, 
  FooterData 
} from './resumeTypes';

// Design component definitions
export interface DesignComponent<T> {
  name: string;
  displayName: string;
  description?: string;
  component: ComponentType<{ data: T }>;
  thumbnail?: string;
}

// Component collections by section
export interface HeaderDesigns {
  designs: DesignComponent<HeaderData>[];
  defaultDesign: string;
}

export interface SummaryDesigns {
  designs: DesignComponent<SummaryData>[];
  defaultDesign: string;
}

export interface SkillsDesigns {
  designs: DesignComponent<SkillsData>[];
  defaultDesign: string;
}

export interface WorkExperienceDesigns {
  designs: DesignComponent<WorkExperienceData>[];
  defaultDesign: string;
}

export interface EducationDesigns {
  designs: DesignComponent<EducationData>[];
  defaultDesign: string;
}

export interface FooterDesigns {
  designs: DesignComponent<FooterData>[];
  defaultDesign: string;
}

// Updated Resume type with selected design information
export interface ResumeDesignSelections {
  headerDesign: string;
  summaryDesign: string;
  skillsDesign: string;
  workExperienceDesign: string;
  educationDesign: string;
  footerDesign?: string;
}
