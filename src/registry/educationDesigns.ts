// src/registry/educationDesigns.ts
import { ComponentType } from 'react';
import { EducationData } from '../types/resumeTypes';

// Import browser display components
import StandardEducation  from '../components/resume/education/StandardEducation';

// Import PDF components
import StandardEducationPDF from '../components/pdf/education/StandardEducationPDF';

// Design metadata interface
export interface DesignInfo {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
}

// Interface for a complete design with both browser and PDF components
export interface EducationDesign {
    info: DesignInfo;
    Component: ComponentType<{ data: EducationData }>;
    PDFComponent: ComponentType<{ data: EducationData }>;
}

// Registry of all education designs
const educationDesigns: EducationDesign[] = [
    {
        info: {
            id: 'standard',
            name: 'Standard Education',
            description: 'Chronological education history with achievements'
        },
        Component: StandardEducation,
        PDFComponent: StandardEducationPDF
    }
];

export default educationDesigns;

// Helper functions
export const getEducationDesignById = (id: string): EducationDesign | undefined => {
    return educationDesigns.find(design => design.info.id === id);
};

export const getDefaultEducationDesign = (): EducationDesign => {
    return educationDesigns[0]; // Standard is default
};
