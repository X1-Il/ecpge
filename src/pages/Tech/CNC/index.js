import BaseLayout from "layouts/sections/components/BaseLayout";
import Td from "layouts/sections/components/TD";
import Pdf from "pages/Tech/Pdf/PdfViewer";
import React from "react";
import PropTypes from "prop-types";
//import codee from "../Pdf/PdfViewer";
// Features page components code

// eslint-disable-next-line react/prop-types
const CNC = ({ C, T, label1, label2 }) => {
  return (
    <BaseLayout
      title="Concours"
      breadcrumb={[{ label: label1, route: "/Tech/Td" }, { label: label2 }]}
    >
      <Td title="" T={T}>
        <Pdf pdfUrl={C} />
      </Td>
    </BaseLayout>
  );
};
Pdf.propTypes = {
  C: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
};
export default CNC;
