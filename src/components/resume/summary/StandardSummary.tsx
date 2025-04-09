// src/components/resume/summary/StandardSummary.tsx
import React from 'react';
import { SummaryData } from '../../../types/resumeTypes';

interface SummaryProps {
    data: SummaryData;
}

const StandardSummary: React.FC<SummaryProps> = ({ data }) => {
    return (
        <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-2">Professional Summary</h2>
            <p className="text-sm">{data.text}</p>
        </section>
    );
};

export default StandardSummary;