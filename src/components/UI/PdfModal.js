import React, { useState } from 'react';
import './PdfModal.css'
import * as FaIcons from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from './Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    // <div onClick={onClose}>
    <div className={`modal ${isOpen ? 'modal--open' : 'modal--closed'}`}>
      <div className="modal__content">
        {children}
        {/* <Button className="modal__close" onClick={onClose}> */}
          <FaIcons.FaWindowClose className="modal__close" onClick={onClose}/>
          <a href="../../assets/PDFTEST.pdf">
            <FaIcons.FaDownload/>
          </a>
          
        {/* </Button> */}
      </div>
    {/* </div> */}
    </div>
  );
};

const PdfModal = ({ file }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Button onClick={toggle}>
        <FaIcons.FaFilePdf />
        View Resume
      </Button>
      <Modal isOpen={isOpen} onClose={toggle}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </Modal>
    </>
  );
};

export default PdfModal;

// import React, { useState } from 'react';
// import { Modal, ModalBody } from 'reactstrap';
// import { FaDownload } from 'react-icons/fa';
// import { Document, Page, pdfjs, PDFDownloadLink } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfModal = ({ file }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [numPages, setNumPages] = useState(null);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <>
//       <button onClick={toggle}>
//         <FaDownload />
//         Download PDF
//       </button>
//       <Modal isOpen={isOpen} toggle={toggle} size="l">
//         {/* <PDFDownloadLink fileName={file} document={document}>
//           Click Me
//         </PDFDownloadLink> */}
//         <ModalBody>
//           <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//             {Array.from(new Array(numPages), (_, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default PdfModal;



// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import testPDF from '../../assets/PDFTEST.pdf'
// import * as FaIcons from 'react-icons/fa';
// import Modal from './Modal';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfModal = () => {
//   const file = testPDF
//   return (
//     <div>
//       <Document file={file} />
//       <button>woohoo</button>
//     </div>
//   )  
// }

// export default PdfModal

// function PdfModal() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = (event) => {
//     event.preventDefault()
//     setIsOpen(!isOpen);
//   }
//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   }
//   const file = testPDF
//   return (
//     <div>
//       <Modal isOpen={isOpen} toggle={toggle} size="xl">
//       <button onClick={toggle}>
//         <FaIcons.FaDownload />
//         Download PDF
//       </button>

//       <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       </Modal>
//     </div>
//   );
// }

// export default PdfModal