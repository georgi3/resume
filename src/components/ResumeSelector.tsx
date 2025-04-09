// src/components/ResumeSelector.tsx
import React from 'react';
import { Resume } from '../types/resumeTypes';

interface ResumeSelectorProps {
  resumes: Resume[];
  activeResumeIndex: number;
  onResumeSelect: (index: number) => void;
}

const ResumeSelector: React.FC<ResumeSelectorProps> = ({ 
  resumes, 
  activeResumeIndex, 
  onResumeSelect 
}) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Select Resume</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {resumes.map((resume, index) => (
          <button
            key={index}
            onClick={() => onResumeSelect(index)}
            className={`px-4 py-2 rounded transition ${
              index === activeResumeIndex
                ? 'bg-blue-600 text-white font-medium'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {resume.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResumeSelector;
