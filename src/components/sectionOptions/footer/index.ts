// src/components/sectionOptions/footer/index.ts
import { FooterDesigns } from '../../../types/designTypes';
import Footer from './Footer';

const footerDesigns: FooterDesigns = {
    designs: [
        {
            name: 'standard',
            displayName: 'Standard Footer',
            description: 'Simple text footer with last updated date',
            component: Footer
        }
        // Additional designs would be added here
    ],
    defaultDesign: 'standard'
};

export default footerDesigns;