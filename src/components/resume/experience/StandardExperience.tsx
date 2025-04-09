// src/components/WorkExperience.tsx
import React from 'react';
import { WorkExperienceData } from '../../../types/resumeTypes';

interface WorkExperienceProps {
  data: WorkExperienceData;
}

const StandardExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <section className="mb-3">
      <h2 className="text-lg font-bold uppercase mb-2">Work Experience</h2>
      
      {data.experiences.map((job, index) => (
        <div key={index} className={index !== data.experiences.length - 1 ? "mb-4" : ""}>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold">{job.position}</h3>
            <span className="text-sm">{job.startDate} - {job.endDate}</span>
          </div>
          
          <div className="flex justify-between items-baseline">
            <h4 className="text-sm italic">{job.company}</h4>
            <span className="text-sm">{job.location}</span>
          </div>
          
          <ul className="list-disc ml-5 mt-1 text-sm">
            {job.achievements.map((achievement, idx) => (
              <li key={idx} className="mt-1">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default StandardExperience;
