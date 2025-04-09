// src/registry/experienceDesigns.ts
import { ComponentType } from 'react';
import { WorkExperienceData } from '../types/resumeTypes';

// Import browser display components
import StandardExperience from '../components/resume/experience/StandardExperience';

// Import PDF components
import StandardExperiencePDF from '../components/pdf/experience/StandardExperiencePDF';

// Design metadata interface
export interface DesignInfo {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
}

// Interface for a complete design with both browser and PDF components
export interface ExperienceDesign {
    info: DesignInfo;
    Component: ComponentType<{ data: WorkExperienceData }>;
    PDFComponent: ComponentType<{ data: WorkExperienceData }>;
}

// Registry of all experience designs
const experienceDesigns: ExperienceDesign[] = [
    {
        info: {
            id: 'standard',
            name: 'Standard Experience',
            description: 'Chronological work history with bulleted achievements'
        },
        Component: StandardExperience,
        PDFComponent: StandardExperiencePDF
    }
];

export default experienceDesigns;

// Helper functions
export const getExperienceDesignById = (id: string): ExperienceDesign | undefined => {
    return experienceDesigns.find(design => design.info.id === id);
};

export const getDefaultExperienceDesign = (): ExperienceDesign => {
    return experienceDesigns[0]; // Standard is default
};
