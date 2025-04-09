// src/registry/skillsDesigns.ts
import { ComponentType } from 'react';
import { SkillsData } from '../types/resumeTypes';

// Import browser display components
import StandardSkills from '../components/resume/skills/StandardSkills';
import CompactSkills from '../components/resume/skills/CompactSkills';

// Import PDF components
import StandardSkillsPDF from '../components/pdf/skills/StandardSkillsPDF';
import CompactSkillsPDF from '../components/pdf/skills/CompactSkillsPDF';

// Design metadata interface
export interface DesignInfo {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
}

// Interface for a complete design with both browser and PDF components
export interface SkillsDesign {
    info: DesignInfo;
    Component: ComponentType<{ data: SkillsData }>;
    PDFComponent: ComponentType<{ data: SkillsData }>;
}

// Registry of all skills designs
const skillsDesigns: SkillsDesign[] = [
    {
        info: {
            id: 'standard',
            name: 'Standard Skills',
            description: 'Detailed skills with level indicators'
        },
        Component: CompactSkills,
        PDFComponent: CompactSkillsPDF
    },
    {
        info: {
            id: 'compact',
            name: 'Compact Skills',
            description: 'Space-efficient bullet list format'
        },
        Component: StandardSkills,
        PDFComponent: StandardSkillsPDF
    }
];

export default skillsDesigns;

// Helper functions
export const getSkillsDesignById = (id: string): SkillsDesign | undefined => {
    return skillsDesigns.find(design => design.info.id === id);
};

export const getDefaultSkillsDesign = (): SkillsDesign => {
    return skillsDesigns[0]; // Standard is default
};
