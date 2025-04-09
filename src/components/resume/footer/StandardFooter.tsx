// src/components/resume/footer/StandardFooter.tsx
import React from 'react';
import { FooterData } from '../../../types/resumeTypes';

interface FooterProps {
  data: FooterData;
}

const StandardFooter: React.FC<FooterProps> = ({ data }) => {
  return (
      <footer className="mt-8 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
        {data.text && <p>{data.text}</p>}
        {data.lastUpdated && <p className="mt-1">Last Updated: {data.lastUpdated}</p>}
      </footer>
  );
};

export default StandardFooter;