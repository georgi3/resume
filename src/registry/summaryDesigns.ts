// src/registry/summaryDesigns.ts
import { ComponentType } from 'react';
import { SummaryData } from '../types/resumeTypes';

// Import browser display components
import StandardSummary from '../components/resume/summary/StandardSummary';

// Import PDF components
import StandardSummaryPDF from '../components/pdf/summary/StandardSummaryPDF';

// Design metadata interface
export interface DesignInfo {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
}

// Interface for a complete design with both browser and PDF components
export interface SummaryDesign {
    info: DesignInfo;
    Component: ComponentType<{ data: SummaryData }>;
    PDFComponent: ComponentType<{ data: SummaryData }>;
}

// Registry of all summary designs
const summaryDesigns: SummaryDesign[] = [
    {
        info: {
            id: 'standard',
            name: 'Standard Summary',
            description: 'Clean, professional paragraph format for your career summary'
        },
        Component: StandardSummary,
        PDFComponent: StandardSummaryPDF
    }
];

export default summaryDesigns;

// Helper functions
export const getSummaryDesignById = (id: string): SummaryDesign | undefined => {
    return summaryDesigns.find(design => design.info.id === id);
};

export const getDefaultSummaryDesign = (): SummaryDesign => {
    return summaryDesigns[0]; // Standard is default
};
