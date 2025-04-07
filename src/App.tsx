// src/App.tsx
import React, { useState } from 'react';
import ResumeContainer from './components/ResumeContainer';
import { generatePDF, printResume } from './utils/pdfGenerator';

// Import data
import {
  headerData,
  summaryData,
  skillsData,
  educationData,
  workExperienceData,
  footerData
} from './data/data'

const App: React.FC = () => {
  const [useCompactSkills, setUseCompactSkills] = useState<boolean>(true);

  return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Resume Generator</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <button
                  onClick={() => generatePDF('resume-content', `${headerData.name.split(' ').join('_')}_CV.pdf`)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download as PDF
              </button>

              <button
                  onClick={() => printResume('resume-content')}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                Print Resume
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Compact Skills:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCompactSkills}
                    onChange={() => setUseCompactSkills(!useCompactSkills)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <ResumeContainer
              headerData={headerData}
              summaryData={summaryData}
              skillsData={skillsData}
              workExperienceData={workExperienceData}
              educationData={educationData}
              footerData={footerData}
              useCompactSkills={useCompactSkills}
          />

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>For the best print results, use Chrome or Edge browsers.</p>
            <p>PDF download functionality uses html2pdf.js library.</p>
          </div>
        </div>
      </div>
  );
};

export default App;
