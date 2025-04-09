// src/components/resume/education/StandardEducation.tsx
import React from 'react';
import { EducationData } from '../../../types/resumeTypes';

interface EducationProps {
    data: EducationData;
}

const StandardEducation: React.FC<EducationProps> = ({ data }) => {
    return (
        <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-2">Education</h2>

            {data.education.map((edu, index) => (
                <div key={index} className={index !== data.education.length - 1 ? "mb-4" : ""}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-base font-semibold">{edu.institution}</h3>
                        <span className="text-sm">{edu.startDate} - {edu.endDate}</span>
                    </div>

                    <div className="flex justify-between items-baseline">
                        <h4 className="text-sm italic">
                            {edu.degree} {edu.field && `in ${edu.field}`}
                        </h4>
                        <span className="text-sm">{edu.location}</span>
                    </div>

                    {edu.gpa && (
                        <p className="text-sm mt-1">GPA: {edu.gpa}</p>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                        <ul className="list-disc ml-5 mt-1 text-sm">
                            {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="mt-1">{achievement}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    );
};

export default StandardEducation;