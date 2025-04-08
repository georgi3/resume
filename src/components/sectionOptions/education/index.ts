// src/components/sectionOptions/education/index.ts
import { EducationDesigns } from '../../../types/designTypes';
import Education from './Education';

const educationDesigns: EducationDesigns = {
    designs: [
        {
            name: 'standard',
            displayName: 'Standard Education',
            description: 'Chronological education history',
            component: Education
        }
        // Additional designs would be added here
    ],
    defaultDesign: 'standard'
};

export default educationDesigns;