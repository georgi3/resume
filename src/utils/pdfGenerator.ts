import { jsPDF } from 'jspdf';
export const generatePDF = (elementId: string, filename: string = `my-resume.pdf`) => {
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with ID "${elementId}" not found`);
      return;
    }
    // Backup the original transform style.
    const originalTransform = element.style.transform;
    // Apply only Y-axis scaling (0.23) while keeping X scale at 1.
    // element.style.transform = 'scaleX(0.50) scaleY(0.23)';
    // Shift the element upward by 30px
    element.style.transform = 'translateX(20px)';

    const pdf = new jsPDF('p', 'mm', 'a4');

    // Use jsPDF's html() method to convert the DOM element to a PDF.
    // This preserves selectable text without using a canvas image.
    pdf.html(element, {
       callback: (doc) => {
           doc.save(filename);
           element.style.transform = originalTransform;
       },
      x: 0,
      y: 0,
      width: pdf.internal.pageSize.getWidth() - 20,
      margin: [5, 5, 5, 5],
      windowWidth: element.scrollWidth,
      html2canvas: {
          // scale: 0.23,   // Lower the scale to reduce overflow.
          scale: .25,
          useCORS: true // Ensure cross-origin images load correctly.
      }
    });
};