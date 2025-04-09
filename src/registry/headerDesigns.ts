// src/registry/headerDesigns.ts
import { ComponentType } from 'react';
import { HeaderData } from '../types/resumeTypes';

// Import browser display components
import StandardHeader from '../components/resume/header/StandardHeader';

// Import PDF components
import StandardHeaderPDF from '../components/pdf/header/StandardHeaderPDF';

// Design metadata interface
export interface DesignInfo {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
}

// Interface for a complete header design with both browser and PDF components
// Note the specific typings for HeaderData
export interface HeaderDesign {
  info: DesignInfo;
  Component: ComponentType<{ data: HeaderData }>;
  PDFComponent: ComponentType<{ data: HeaderData }>;
}

// Registry of all header designs
const headerDesigns: HeaderDesign[] = [
  {
    info: {
      id: 'standard',
      name: 'Standard Header',
      description: 'Classic professional header with contact information'
    },
    Component: StandardHeader,
    PDFComponent: StandardHeaderPDF
  }
];

export default headerDesigns;

// Helper functions
export const getHeaderDesignById = (id: string): HeaderDesign | undefined => {
  return headerDesigns.find(design => design.info.id === id);
};

export const getDefaultHeaderDesign = (): HeaderDesign => {
  return headerDesigns[0]; // Standard is default
};