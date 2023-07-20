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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
//import C02 from "assets/Pdf/Sup/Math/Cours/C02.pdf";

// Features page components
import Pdf from "pages/Tech/Pdf/PdfViewer";
import React from "react";
import PropTypes from "prop-types";
// Features page components code

// eslint-disable-next-line react/prop-types
const Pdfs = ({ C, label1, label2 }) => {
  return (
    <BaseLayout title="Cours" breadcrumb={[{ label: label1 }, { label: label2 }]}>
      <View title="">
        <Pdf pdfUrl={C} />
      </View>
    </BaseLayout>
  );
};
Pdf.propTypes = {
  C: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
};
export default Pdfs;
