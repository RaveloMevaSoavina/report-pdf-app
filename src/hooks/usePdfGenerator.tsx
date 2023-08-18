import { ReactElement } from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

const usePdfGenerator = () => {
  const generatePdfDocument = async (
    documentData: ReactElement,
    fileName: string
  ) => {
    const blob = await pdf(documentData).toBlob();
    saveAs(blob, fileName);
  };

  return generatePdfDocument;
};

export default usePdfGenerator;
