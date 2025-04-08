// src/components/sectionOptions/experience/index.ts
import { WorkExperienceDesigns } from '../../../types/designTypes';
import WorkExperience from './WorkExperience';

const workExperienceDesigns: WorkExperienceDesigns = {
    designs: [
        {
            name: 'standard',
            displayName: 'Standard Experience',
            description: 'Chronological work history with achievements',
            component: WorkExperience
        }
        // Additional designs would be added here
    ],
    defaultDesign: 'standard'
};

export default workExperienceDesigns;