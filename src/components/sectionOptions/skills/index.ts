// src/components/skills/index.ts
import { SkillsDesigns } from '../../../types/designTypes';
import Skills from './Skills'; // Your current detailed skills component
import CompactSkills from './CompactSkills'; // Your new compact skills component
// import { SkillsData } from '../../../types/resumeTypes';

// Component collection for Skills section
const skillsDesigns: SkillsDesigns = {
  designs: [
    {
      name: 'detailed',
      displayName: 'Detailed View',
      description: 'Shows skills with level indicators',
      component: Skills,
      thumbnail: 'detailed-skills-thumb.png' // You would need to create these thumbnails
    },
    {
      name: 'compact',
      displayName: 'Compact View',
      description: 'Space-efficient bullet list format',
      component: CompactSkills,
      thumbnail: 'compact-skills-thumb.png'
    }
    // Additional designs would be added here
  ],
  defaultDesign: 'compact'
};

export default skillsDesigns;

// Helper function to get component by name
export const getSkillsComponentByName = (name: string) => {
  const design = skillsDesigns.designs.find(d => d.name === name);
  return design ? design.component : skillsDesigns.designs[0].component;
};
