// src/types/resumeTypes.ts

// Design selections interface
interface DesignSelections {
  headerDesign: string;
  summaryDesign: string;
  skillsDesign: string;
  experienceDesign: string;
  educationDesign: string;
  footerDesign?: string;
}

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

// Updated Resume interface with design selections
interface Resume {
  id?: string;
  title: string;
  headerData: HeaderData | null;
  summaryData: SummaryData;
  skillsData: SkillsData;
  workExperienceData: WorkExperienceData;
  educationData: EducationData;
  footerData?: FooterData;
  designSelections: DesignSelections;
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
  Resume
}