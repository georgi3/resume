// src/types/resumeTypes.ts
import {ResumeDesignSelections} from "./designTypes";

interface HeaderData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

interface SummaryData {
  text: string;
}

interface Skill {
  name: string;
  level?: number; // Optional skill proficiency level (1-5)
  category?: string; // Optional category for grouping
}

interface SkillsData {
  categories?: string[]; // Optional categories array
  skills: Skill[];
}

interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
}

interface WorkExperienceData {
  experiences: WorkExperience[];
}

interface Education {
  institution: string;
  degree: string;
  field: string | null;
  location: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  achievements?: string[];
}

interface EducationData {
  education: Education[];
}

interface FooterData {
  text?: string;
  lastUpdated?: string;
}

interface ResumeI {
  id?: string;
  title: string;
  headerData: HeaderData;
  summaryData: SummaryData;
  skillsData: SkillsData;
  workExperienceData: WorkExperienceData;
  educationData: EducationData;
  footerData?: FooterData;
  designSelections: ResumeDesignSelections;
}

export type {
  HeaderData,
  SummaryData,
  Skill,
  SkillsData,
  WorkExperience,
  WorkExperienceData,
  Education,
  EducationData,
  FooterData,
  ResumeI
}