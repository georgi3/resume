// src/components/PDFDownloadButton.tsx
import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from './pdf/ResumePDF';
import { Resume } from '../types/resumeTypes';

interface PDFDownloadButtonProps {
    resume: Resume;
    filename?: string;
    className?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
    resume,
    filename,
    className = "inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    // Generate default filename based on resume name
    const defaultFilename = resume.headerData ? `${resume.headerData.name.split(' ').join('_')}_CV.pdf` : 'my-resume.pdf';

    const handleDownload = async () => {
        try {
            setIsGenerating(true);

            // Generate the PDF blob
            const blob = await pdf(<ResumePDF resume={resume} />).toBlob();

            // Create a URL for the blob
            const url = URL.createObjectURL(blob);

            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = filename || defaultFilename;
            link.click();

            // Clean up
            URL.revokeObjectURL(url);
            setIsGenerating(false);
        } catch (error) {
            console.error('Error generating PDF:', error);
            setIsGenerating(false);
        }
    };

    return (
        <button
            className={className}
            onClick={handleDownload}
            disabled={isGenerating}
        >
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </button>
    );
};

export default PDFDownloadButton;