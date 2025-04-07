// src/App.tsx
import React from 'react';
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
  return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Resume Generator</h1>
          </div>

          <div className="flex justify-center mb-6 space-x-4">
            <button
                onClick={() => generatePDF('resume-content', `${headerData.name} Resume.pdf`)}
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

          <ResumeContainer
              headerData={headerData}
              summaryData={summaryData}
              skillsData={skillsData}
              workExperienceData={workExperienceData}
              educationData={educationData}
              footerData={footerData}
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