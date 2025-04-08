// src/components/sidebar/SidebarSection.tsx
import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ResumeI } from '../../types/resumeTypes';
import { getAvailableDesigns } from '../designRegistry';

interface SidebarSectionProps {
    sectionId: string;
    resumes: ResumeI[];
    activeResumeIndex: number;
    onResumeSelect: (index: number) => void;
    useCompactSkills: boolean;
    onToggleCompactSkills: () => void;
    onDesignSelect?: (sectionId: string, designName: string) => void;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
                                                           sectionId,
                                                           resumes,
                                                           activeResumeIndex,
                                                           onResumeSelect,
                                                           useCompactSkills,
                                                           onToggleCompactSkills,
                                                           onDesignSelect
                                                       }) => {
    const activeResume = resumes[activeResumeIndex];

    // Special handling for resumes section
    if (sectionId === 'resumes') {
        return (
            <div className="max-h-64 overflow-y-auto pr-2">
                <div className="grid grid-cols-1 gap-4">
                    {resumes.map((resume, index) => (
                        <button
                            key={index}
                            onClick={() => onResumeSelect(index)}
                            className={`flex flex-col items-center rounded-md border p-4 transition-colors ${
                                index === activeResumeIndex
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            <div className="mb-2 h-24 w-20 overflow-hidden rounded-sm border border-gray-300 bg-white shadow-sm">
                                <div className="h-4 bg-gray-800"></div>
                                <div className="mt-2 px-1">
                                    <div className="h-1 bg-gray-200"></div>
                                    <div className="mt-1 h-1 bg-gray-200"></div>
                                    <div className="mt-1 h-1 bg-gray-200"></div>
                                </div>
                            </div>
                            <span className="mt-1 text-sm font-medium">{resume.title}</span>
                        </button>
                    ))}

                    {/* Create new resume button */}
                    <button
                        className="flex flex-col items-center rounded-md border border-dashed border-gray-300 p-4 hover:border-gray-400 hover:bg-gray-50"
                        onClick={() => console.log('Create new resume')}
                    >
                        <div className="mb-2 flex h-24 w-20 items-center justify-center rounded-sm border border-gray-300 bg-white">
                            <PlusCircleIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <span className="mt-1 text-sm font-medium text-gray-600">New Resume</span>
                    </button>
                </div>
            </div>
        );
    }

    // Special handling for skills section for backward compatibility
    if (sectionId === 'skills' && !onDesignSelect) {
        return (
            <div className="max-h-64 overflow-y-auto">
                <div className="space-y-3">
                    <button
                        onClick={onToggleCompactSkills}
                        className={`w-full rounded-md border p-2 text-left text-sm ${
                            useCompactSkills
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <span className="font-medium">Compact View</span>
                        <p className="mt-1 text-xs text-gray-500">Space-efficient bullet list</p>
                    </button>

                    <button
                        onClick={onToggleCompactSkills}
                        className={`w-full rounded-md border p-2 text-left text-sm ${
                            !useCompactSkills
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <span className="font-medium">Detailed View</span>
                        <p className="mt-1 text-xs text-gray-500">With skill level indicators</p>
                    </button>
                </div>
            </div>
        );
    }

    // Dynamic handling for all other sections based on available designs
    const availableDesigns = getAvailableDesigns(sectionId);

    if (availableDesigns.length === 0) {
        return (
            <div className="max-h-64 overflow-y-auto">
                <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
                    <p className="text-sm text-gray-600">
                        No design options available for <strong>{sectionId}</strong> section.
                    </p>
                </div>
            </div>
        );
    }

    // If we have designs and a callback to select them
    if (onDesignSelect) {
        // Type-safe way to get the current design name based on section ID
        const getCurrentDesignName = (sectionId: string) => {
            switch(sectionId) {
                case 'header':
                    return activeResume.designSelections.headerDesign;
                case 'summary':
                    return activeResume.designSelections.summaryDesign;
                case 'skills':
                    return activeResume.designSelections.skillsDesign;
                case 'experience':
                    return activeResume.designSelections.workExperienceDesign;
                case 'education':
                    return activeResume.designSelections.educationDesign;
                case 'footer':
                    return activeResume.designSelections.footerDesign;
                default:
                    return '';
            }
        };

        const currentDesignName = getCurrentDesignName(sectionId);

        return (
            <div className="max-h-64 overflow-y-auto">
                <div className="space-y-3">
                    {availableDesigns.map((design) => (
                        <button
                            key={design.name}
                            onClick={() => onDesignSelect(sectionId, design.name)}
                            className={`w-full rounded-md border p-2 text-left text-sm ${
                                currentDesignName === design.name
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <span className="font-medium">{design.displayName}</span>
                            {design.description && (
                                <p className="mt-1 text-xs text-gray-500">{design.description}</p>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Fallback for sections with designs but no onDesignSelect handler
    return (
        <div className="max-h-64 overflow-y-auto">
            <div className="space-y-3">
                {availableDesigns.map((design) => (
                    <div
                        key={design.name}
                        className="w-full rounded-md border border-gray-200 p-2 text-left text-sm"
                    >
                        <span className="font-medium">{design.displayName}</span>
                        {design.description && (
                            <p className="mt-1 text-xs text-gray-500">{design.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarSection;