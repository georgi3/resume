// src/components/CompactSkills.tsx
import React from 'react';
import { SkillsData } from '../../../types/resumeTypes';

interface SkillsProps {
    data: SkillsData;
}

const CompactSkills: React.FC<SkillsProps> = ({ data }) => {
    // If categories exist, render skills grouped by category in a compact format
    if (data.categories && data.categories.length > 0) {
        return (
            <section className="mb-2">
                <h2 className="text-lg font-bold uppercase mb-2">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {data.categories.map((category) => {
                        const categorySkills = data.skills.filter(skill => skill.category === category);

                        if (categorySkills.length === 0) return null;

                        return (
                            <div key={category} className="mb-2">
                                <h3 className="text-sm font-semibold">{category}:</h3>
                                <p className="text-sm flex flex-wrap">
                                    {categorySkills.map((skill, index) => (
                                        <span key={index} className="mr-2 mb-1">
                      {skill.name}
                                            {index < categorySkills.length - 1 && <span className="ml-1 mr-1">•</span>}
                    </span>
                                    ))}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    // Otherwise, render a simple inline skill list
    return (
        <section className="mb-2">
            <h2 className="text-lg font-bold uppercase mb-2">Skills</h2>
            <div className="text-sm">
                {data.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <span className="font-medium">{skill.name}</span>
                        {index < data.skills.length - 1 && <span className="mx-2">•</span>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default CompactSkills;