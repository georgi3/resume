// src/App.tsx
import React, { useState } from 'react';
import ResumeContainer from './components/ResumeContainer';
import ResumeSidebar from './components/sidebar/ResumeSidebar';
import { generatePDF } from './utils/pdfGenerator';
import { ResumeI } from './types/resumeTypes';

// Import data
import resumesArray from './data/data';

const App: React.FC = () => {
  const [useCompactSkills, setUseCompactSkills] = useState<boolean>(true);
  const [activeResumeIndex, setActiveResumeIndex] = useState<number>(
      resumesArray.findIndex(res => res.title === 'Master') !== -1
          ? resumesArray.findIndex(res => res.title === 'Master')
          : 0
  );

  // Create a deep copy of resumes to modify
  const [resumes, setResumes] = useState<ResumeI[]>(
      JSON.parse(JSON.stringify(resumesArray))
  );

  const activeResume = resumes[activeResumeIndex];

  const handleResumeSelect = (index: number) => {
    setActiveResumeIndex(index);
  };

  const toggleCompactSkills = () => {
    setUseCompactSkills(!useCompactSkills);

    // Update the resume's skill design selection based on the toggle
    // This is for backward compatibility until the design system is fully implemented
    const updatedResumes = [...resumes];
    updatedResumes[activeResumeIndex] = {
      ...updatedResumes[activeResumeIndex],
      designSelections: {
        ...updatedResumes[activeResumeIndex].designSelections,
        skillsDesign: !useCompactSkills ? 'compact' : 'detailed'
      }
    };

    setResumes(updatedResumes);
  };

  const handleDesignSelect = (sectionId: string, designName: string) => {
    const designKey = `${sectionId}Design`;

    // Deep clone the current resumes array
    const updatedResumes = [...resumes];

    // Update the design selection for the active resume
    updatedResumes[activeResumeIndex] = {
      ...updatedResumes[activeResumeIndex],
      designSelections: {
        ...updatedResumes[activeResumeIndex].designSelections,
        [designKey]: designName
      }
    };

    setResumes(updatedResumes);

    // Also update the compact skills toggle if changing skills design
    if (sectionId === 'skills') {
      setUseCompactSkills(designName === 'compact');
    }
  };

  return (
      <div className="h-screen bg-gray-50">
        {/* Sidebar */}
        <ResumeSidebar
            resumes={resumes}
            activeResumeIndex={activeResumeIndex}
            onResumeSelect={handleResumeSelect}
            useCompactSkills={useCompactSkills}
            onToggleCompactSkills={toggleCompactSkills}
            onDesignSelect={handleDesignSelect}
        />

        {/* Main content */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex justify-between bg-white px-6 py-4 shadow-sm lg:hidden">
            <h1 className="text-xl font-semibold text-gray-900">Resume Builder</h1>
          </div>

          <main className="py-8">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              {/* Controls for PDF download and printing */}
              <div className="mb-6 flex flex-wrap justify-center gap-4">
                <button
                    onClick={() => generatePDF('resume-content', `${activeResume.headerData.name.split(' ').join('_')}_CV.pdf`)}
                    // onClick={() => generatePDF('resume-content', `Headless_CV.pdf`)}
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Download as PDF
                </button>
              </div>

              {/* Current resume info */}
              <div className="mb-6 text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  <span className="text-blue-600">{activeResume.title}</span> Resume
                </h2>
              </div>

              {/* Resume container */}
              <ResumeContainer
                  resume={activeResume}
                  useCompactSkills={useCompactSkills}
              />

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>For the best print results, use Chrome or Edge browsers.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
};

export default App;