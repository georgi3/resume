// src/components/sectionOptions/header/index.ts
import { HeaderDesigns } from '../../../types/designTypes';
import Header from './Header';

const headerDesigns: HeaderDesigns = {
    designs: [
        {
            name: 'standard',
            displayName: 'Standard Header',
            description: 'Clean professional header with contact information',
            component: Header
        }
        // Additional designs would be added here as they're created
    ],
    defaultDesign: 'standard'
};

export default headerDesigns;