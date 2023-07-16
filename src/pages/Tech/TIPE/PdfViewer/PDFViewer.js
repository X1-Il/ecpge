import React from "react";
import PropTypes from "prop-types";

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

PDFViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
};

export default PDFViewer;
