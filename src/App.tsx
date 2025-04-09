// src/App.tsx
import React, { useState } from 'react';
import ResumeContainer from './components/ResumeContainer';
import ResumeSidebar from './components/sidebar/ResumeSidebar';
import PDFDownloadButton from './components/PDFDownloadButton';
import { Resume } from './types/resumeTypes';
import { getDefaultDesignSelections } from './registry/designRegistry';

// Import data
import resumesArray from './data/data';

// Add design selections to each resume if not already present
const initialResumes = resumesArray.map(resume => ({
  ...resume,
  designSelections: resume.designSelections || getDefaultDesignSelections()
}));

const App: React.FC = () => {
  // Create a deep copy of resumes to modify
  const [resumes, setResumes] = useState<Resume[]>(
      JSON.parse(JSON.stringify(initialResumes))
  );

  const [activeResumeIndex, setActiveResumeIndex] = useState<number>(
      resumes.findIndex(res => res.title === 'Master') !== -1
          ? resumes.findIndex(res => res.title === 'Master')
          : 0
  );

  const activeResume = resumes[activeResumeIndex];

  const handleResumeSelect = (index: number) => {
    setActiveResumeIndex(index);
  };

  const handleDesignSelect = (sectionId: string, designName: string) => {
    // Deep clone the current resumes array
    const updatedResumes = [...resumes];
    const currentResume = {...updatedResumes[activeResumeIndex]};
    const currentDesignSelections = {...currentResume.designSelections};

    // Update the specific design selection in a type-safe way
    switch(sectionId) {
      case 'header':
        currentDesignSelections.headerDesign = designName;
        break;
      case 'summary':
        currentDesignSelections.summaryDesign = designName;
        break;
      case 'skills':
        currentDesignSelections.skillsDesign = designName;
        break;
      case 'experience':
        currentDesignSelections.experienceDesign = designName;
        break;
      case 'education':
        currentDesignSelections.educationDesign = designName;
        break;
      case 'footer':
        currentDesignSelections.footerDesign = designName;
        break;
    }

    // Update the resume with the new design selections
    currentResume.designSelections = currentDesignSelections;
    updatedResumes[activeResumeIndex] = currentResume;

    setResumes(updatedResumes);
  };

  return (
      <div className="h-screen bg-gray-50">
        {/* Sidebar */}
        <ResumeSidebar
            resumes={resumes}
            activeResumeIndex={activeResumeIndex}
            onResumeSelect={handleResumeSelect}
            onDesignSelect={handleDesignSelect}
        />

        {/* Main content */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex justify-between bg-white px-6 py-4 shadow-sm lg:hidden">
            <h1 className="text-xl font-semibold text-gray-900">Resume Builder</h1>
          </div>

          <main className="py-8">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              {/* Controls for PDF download */}
              <div className="mb-6 flex flex-wrap justify-center gap-4">
                <PDFDownloadButton resume={activeResume} />

              </div>

              {/* Current resume info */}
              <div className="mb-6 text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  <span className="text-blue-600">{activeResume.title}</span> Resume
                </h2>
              </div>

              {/* Resume container */}
              <ResumeContainer resume={activeResume} />

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