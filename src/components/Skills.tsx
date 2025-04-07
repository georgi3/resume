// src/components/Skills.tsx
import React from 'react';
import { SkillsData, Skill } from '../types/resumeTypes';

interface SkillsProps {
  data: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  // Function to render skill level indicators
  const renderSkillLevel = (level: number = 0) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <div 
            key={value}
            className={`w-2 h-2 rounded-full ${value <= level ? 'bg-gray-700' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    );
  };

  // If categories exist, render skills grouped by category
  if (data.categories && data.categories.length > 0) {
    return (
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.categories.map((category) => {
            const categorySkills = data.skills.filter(skill => skill.category === category);
            
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category} className="mb-2">
                <h3 className="text-sm font-semibold">{category}</h3>
                <ul className="text-sm mt-1">
                  {categorySkills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center py-1">
                      <span>{skill.name}</span>
                      {skill.level && renderSkillLevel(skill.level)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  
  // Otherwise, render a simple skill list
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded">
            <span className="text-sm">{skill.name}</span>
            {skill.level && (
              <div className="ml-2">
                {renderSkillLevel(skill.level)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
