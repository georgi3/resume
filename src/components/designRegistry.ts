// src/components/designRegistry.ts
// This file centralizes access to all design collections
import { DesignComponent } from '../types/designTypes';
import headerDesigns from './sectionOptions/header';
import summaryDesigns from './sectionOptions/summary';
import skillsDesigns from './sectionOptions/skills';
import workExperienceDesigns from './sectionOptions/experience';
import educationDesigns from './sectionOptions/education';
import footerDesigns from './sectionOptions/footer';

// Create default design selections for new resumes
export const getDefaultDesignSelections = () => {
  return {
    headerDesign: headerDesigns.defaultDesign,
    summaryDesign: summaryDesigns.defaultDesign,
    skillsDesign: skillsDesigns.defaultDesign,
    workExperienceDesign: workExperienceDesigns.defaultDesign,
    educationDesign: educationDesigns.defaultDesign,
    footerDesign: footerDesigns.defaultDesign
  };
};

// Helper function to get all available designs for a section
// Use a type assertion to ensure consistent return type
export const getAvailableDesigns = (sectionId: string): DesignComponent<any>[] => {
  switch (sectionId) {
    case 'header':
      return headerDesigns.designs;
    case 'summary':
      return summaryDesigns.designs;
    case 'skills':
      return skillsDesigns.designs;
    case 'experience':
      return workExperienceDesigns.designs;
    case 'education':
      return educationDesigns.designs;
    case 'footer':
      return footerDesigns.designs;
    default:
      return [];
  }
};

// Helper function to get a component by section and design name
export const getComponentByDesign = (sectionId: string, designName: string) => {
  const designs = getAvailableDesigns(sectionId);
  const design = designs.find(d => d.name === designName);

  if (!design && designs.length > 0) {
    // Fallback to the first design if requested design not found
    return designs[0].component;
  }

  return design ? design.component : null;
};