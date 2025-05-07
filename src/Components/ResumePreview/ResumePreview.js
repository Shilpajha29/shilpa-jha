import React, { useState } from 'react';
import './ResumePreview.css'
import { Document, Page } from 'react-pdf';
import pdf from '../../Assets/shilpa_jha_resume.pdf'

export default function Pdfcomp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div className="pdf-container">
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
    </div>
  );
}