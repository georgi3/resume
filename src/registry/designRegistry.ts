// src/registry/designRegistry.ts
import headerDesigns, { HeaderDesign, getHeaderDesignById, getDefaultHeaderDesign } from './headerDesigns';
import summaryDesigns, { SummaryDesign, getSummaryDesignById, getDefaultSummaryDesign } from './summaryDesigns';
import skillsDesigns, { SkillsDesign, getSkillsDesignById, getDefaultSkillsDesign } from './skillsDesigns';
import experienceDesigns, { ExperienceDesign, getExperienceDesignById, getDefaultExperienceDesign } from './experienceDesigns';
import educationDesigns, { EducationDesign, getEducationDesignById, getDefaultEducationDesign } from './educationDesigns';
import footerDesigns, { FooterDesign, getFooterDesignById, getDefaultFooterDesign } from './footerDesigns';
import { ComponentType } from 'react';
import {
  HeaderData,
  SummaryData,
  SkillsData,
  WorkExperienceData,
  EducationData,
  FooterData
} from '../types/resumeTypes';

// Interface for storing design selections
export interface DesignSelections {
  headerDesign: string;
  summaryDesign: string;
  skillsDesign: string;
  experienceDesign: string;
  educationDesign: string;
  footerDesign?: string;
}

// Get default design selections
export const getDefaultDesignSelections = (): DesignSelections => {
  return {
    headerDesign: getDefaultHeaderDesign().info.id,
    summaryDesign: getDefaultSummaryDesign().info.id,
    skillsDesign: getDefaultSkillsDesign().info.id,
    experienceDesign: getDefaultExperienceDesign().info.id,
    educationDesign: getDefaultEducationDesign().info.id,
    footerDesign: getDefaultFooterDesign().info.id
  };
};

// Get available designs by section
export const getDesignsBySectionId = (sectionId: string) => {
  switch (sectionId) {
    case 'header':
      return headerDesigns.map(design => design.info);
    case 'summary':
      return summaryDesigns.map(design => design.info);
    case 'skills':
      return skillsDesigns.map(design => design.info);
    case 'experience':
      return experienceDesigns.map(design => design.info);
    case 'education':
      return educationDesigns.map(design => design.info);
    case 'footer':
      return footerDesigns.map(design => design.info);
    default:
      return [];
  }
};

// Type-safe component getters - each returns the appropriate component type
export const getHeaderComponent = (designId: string): ComponentType<{ data: HeaderData }> | null => {
  const design = getHeaderDesignById(designId);
  return design ? design.Component : null;
};

export const getSummaryComponent = (designId: string): ComponentType<{ data: SummaryData }> | null => {
  const design = getSummaryDesignById(designId);
  return design ? design.Component : null;
};

export const getSkillsComponent = (designId: string): ComponentType<{ data: SkillsData }> | null => {
  const design = getSkillsDesignById(designId);
  return design ? design.Component : null;
};

export const getExperienceComponent = (designId: string): ComponentType<{ data: WorkExperienceData }> | null => {
  const design = getExperienceDesignById(designId);
  return design ? design.Component : null;
};

export const getEducationComponent = (designId: string): ComponentType<{ data: EducationData }> | null => {
  const design = getEducationDesignById(designId);
  return design ? design.Component : null;
};

export const getFooterComponent = (designId: string): ComponentType<{ data: FooterData }> | null => {
  const design = getFooterDesignById(designId);
  return design ? design.Component : null;
};

// Type-safe PDF component getters
export const getHeaderPDFComponent = (designId: string): ComponentType<{ data: HeaderData }> | null => {
  const design = getHeaderDesignById(designId);
  return design ? design.PDFComponent : null;
};

export const getSummaryPDFComponent = (designId: string): ComponentType<{ data: SummaryData }> | null => {
  const design = getSummaryDesignById(designId);
  return design ? design.PDFComponent : null;
};

export const getSkillsPDFComponent = (designId: string): ComponentType<{ data: SkillsData }> | null => {
  const design = getSkillsDesignById(designId);
  return design ? design.PDFComponent : null;
};

export const getExperiencePDFComponent = (designId: string): ComponentType<{ data: WorkExperienceData }> | null => {
  const design = getExperienceDesignById(designId);
  return design ? design.PDFComponent : null;
};

export const getEducationPDFComponent = (designId: string): ComponentType<{ data: EducationData }> | null => {
  const design = getEducationDesignById(designId);
  return design ? design.PDFComponent : null;
};

export const getFooterPDFComponent = (designId: string): ComponentType<{ data: FooterData }> | null => {
  const design = getFooterDesignById(designId);
  return design ? design.PDFComponent : null;
};