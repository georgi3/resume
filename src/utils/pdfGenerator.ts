// src/utils/pdfGenerator.ts
// For this functionality, you would need to install html2pdf.js:
// npm install html2pdf.js
// npm install @types/html2pdf.js --save-dev

// You can update this with your preferred PDF generation library

import html2pdf from 'html2pdf.js';
import { headerData } from "../data/data";
export const generatePDF = (elementId: string, filename: string = `${headerData.name}.pdf`) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID "${elementId}" not found`);
    return;
  }
  
  const options = {
    margin: [10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Generate PDF
  html2pdf().set(options).from(element).save();
};

// Alternative approach using browser's print functionality
export const printResume = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with ID "${elementId}" not found`);
    return;
  }
  
  const originalContents = document.body.innerHTML;
  
  document.body.innerHTML = element.innerHTML;
  
  window.print();
  
  document.body.innerHTML = originalContents;
  
  // Reload the page to restore functionality
  // Note: This is a simple approach. In a real app, you'd want to use a more elegant solution
  window.location.reload();
};
