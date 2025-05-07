import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ResumePreview from '../../Components/ResumePreview/ResumePreview';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


export default function Resume() {
  return (<div className='section-container'>
    <Header 
            heading='View my Resume!'
            subHeading="Fullstack Developer">
    </Header>
    <ResumePreview/>

    <Footer phrase="Get in "
      link="touch!"
      toAddress="/contact">
      </Footer>

    </div>

  )
}
