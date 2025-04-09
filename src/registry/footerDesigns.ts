// src/registry/footerDesigns.ts
import { ComponentType } from 'react';
import { FooterData } from '../types/resumeTypes';

// Import browser display components
import StandardFooter from '../components/resume/footer/StandardFooter';

// Import PDF components
import StandardFooterPDF from '../components/pdf/footer/StandardFooterPDF';

// Design metadata interface
export interface DesignInfo {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
}

// Interface for a complete design with both browser and PDF components
export interface FooterDesign {
    info: DesignInfo;
    Component: ComponentType<{ data: FooterData }>;
    PDFComponent: ComponentType<{ data: FooterData }>;
}

// Registry of all footer designs
const footerDesigns: FooterDesign[] = [
    {
        info: {
            id: 'standard',
            name: 'Standard Footer',
            description: 'Simple centered footer with optional text and last updated date'
        },
        Component: StandardFooter,
        PDFComponent: StandardFooterPDF
    }
];

export default footerDesigns;

// Helper functions
export const getFooterDesignById = (id: string): FooterDesign | undefined => {
    return footerDesigns.find(design => design.info.id === id);
};

export const getDefaultFooterDesign = (): FooterDesign => {
    return footerDesigns[0]; // Standard is default
};
