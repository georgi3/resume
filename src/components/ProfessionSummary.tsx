// src/components/ProfessionalSummary.tsx
import React from 'react';
import { SummaryData } from '../types/resumeTypes';

interface ProfessionalSummaryProps {
  data: SummaryData;
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ data }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold uppercase mb-2">Professional Summary</h2>
      <p className="text-sm text-justify">{data.text}</p>
    </section>
  );
};

export default ProfessionalSummary;
