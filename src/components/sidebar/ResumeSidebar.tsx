// src/components/sidebar/ResumeSidebar.tsx
import React, { useState } from 'react';
import { 
  DocumentIcon, 
  DocumentTextIcon, 
  UserIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  WrenchIcon,
  XMarkIcon, 
  Bars3Icon
} from '@heroicons/react/24/outline';
import SidebarSection from './SidebarSection';
import { ResumeI } from '../../types/resumeTypes';

// This will be replaced with actual imports from section design files
const sectionTypes = [
  { id: 'resumes', name: 'Resumes', icon: DocumentIcon },
  { id: 'header', name: 'Header', icon: UserIcon },
  { id: 'summary', name: 'Summary', icon: DocumentTextIcon },
  { id: 'skills', name: 'Skills', icon: WrenchIcon },
  { id: 'experience', name: 'Experience', icon: BriefcaseIcon },
  { id: 'education', name: 'Education', icon: AcademicCapIcon },
];

interface ResumeSidebarProps {
  resumes: ResumeI[];
  activeResumeIndex: number;
  onResumeSelect: (index: number) => void;
  useCompactSkills: boolean;
  onToggleCompactSkills: () => void;
  onDesignSelect?: (sectionId: string, designName: string) => void; // New prop
}


const ResumeSidebar: React.FC<ResumeSidebarProps> = ({ 
  resumes, 
  activeResumeIndex, 
  onResumeSelect,
  useCompactSkills,
  onToggleCompactSkills,
  onDesignSelect
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSectionId(activeSectionId === sectionId ? null : sectionId);
  };

  // Helper function to determine if a section is active
  const isSectionActive = (sectionId: string) => activeSectionId === sectionId;

  return (
    <>
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-100 px-4 py-4 shadow-xs sm:px-6">
          <button 
            type="button" 
            onClick={() => setSidebarOpen(true)} 
            className="-m-2.5 p-2.5 text-gray-700"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold text-gray-900">
            Resume: {resumes[activeResumeIndex].title}
          </div>
        </div>

        {/* Mobile dialog */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />

            <div className="fixed inset-0 flex">
              {/* Panel */}
              <div className="relative mr-16 flex w-full max-w-xs flex-1 flex-col bg-white">
                {/* Close button */}
                <div className="absolute top-0 right-0 -mr-12 pt-4">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>

                {/* Sidebar content */}
                <div className="flex flex-col overflow-y-auto bg-white py-6 px-4">
                  <div className="flex h-12 shrink-0 items-center">
                    <h2 className="text-lg font-semibold">Resume Options</h2>
                  </div>
                  <nav className="mt-6 flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-4">
                      {sectionTypes.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => toggleSection(section.id)}
                            className={`flex w-full items-center rounded-md p-2 text-left text-sm font-medium ${
                              isSectionActive(section.id) 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <section.icon className="mr-3 h-5 w-5" />
                            {section.name}
                          </button>
                          
                          {/* Section specific content */}
                          {isSectionActive(section.id) && (
                            <div className="mt-2 pl-7">
                              <SidebarSection
                                sectionId={section.id}
                                resumes={resumes}
                                activeResumeIndex={activeResumeIndex}
                                onResumeSelect={onResumeSelect}
                                useCompactSkills={useCompactSkills}
                                onToggleCompactSkills={onToggleCompactSkills}
                              />
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Static sidebar for desktop */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-lg font-semibold">Resume Builder</h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-4">
              {sectionTypes.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`flex w-full items-center rounded-md p-2 text-left text-sm font-medium ${
                      isSectionActive(section.id) 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <section.icon className="mr-3 h-5 w-5" />
                    {section.name}
                  </button>
                  
                  {/* Section specific content */}
                  {isSectionActive(section.id) && (
                    <div className="mt-2 pl-7">
                      <SidebarSection
                        sectionId={section.id}
                        resumes={resumes}
                        activeResumeIndex={activeResumeIndex}
                        onResumeSelect={onResumeSelect}
                        useCompactSkills={useCompactSkills}
                        onToggleCompactSkills={onToggleCompactSkills}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResumeSidebar;
