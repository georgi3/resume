// src/components/sectionOptions/summary/index.ts
import { SummaryDesigns } from '../../../types/designTypes';
import ProfessionalSummary from './ProfessionSummary';

const summaryDesigns: SummaryDesigns = {
    designs: [
        {
            name: 'standard',
            displayName: 'Standard Summary',
            description: 'Professional career summary paragraph',
            component: ProfessionalSummary
        }
        // Additional designs would be added here
    ],
    defaultDesign: 'standard'
};

export default summaryDesigns;