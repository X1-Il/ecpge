/*
=========================================================
* e_ One_ - v2.1.0
=========================================================

* Product Page:
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
//import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import Td from "layouts/sections/components/TD";
//import C02 from "assets/Pdf/Sup/Math/Cours/C02.pdf";

// Features page components
//import codee from "pages/Tech/Pdf/PdfViewer";
import Pdf from "pages/Tech/Pdf/PdfViewer";
import React from "react";
import PropTypes from "prop-types";
//import codee from "../Pdf/PdfViewer";
// Features page components code

// eslint-disable-next-line react/prop-types
const Pdfss = ({ C, T, label1, label2 }) => {
  return (
    <BaseLayout
      title="Travaux dirigés"
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
export default Pdfss;
