import React from "react";
import PDFViewer from "./PDFViewer";
//import C01 from "assets/Pdf/Sup/Math/Cours/C01.pdf";
// eslint-disable-next-line react/prop-types
const Pdf = ({ pdfUrl }) => {
  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};
export default Pdf;
