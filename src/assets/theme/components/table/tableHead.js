/**
=========================================================
* e_ One_ - v2.1.0
=========================================================

* Product Page: 
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// e_ One_ base styles
import borders from "assets/theme/base/borders";

// e_ One_ helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};
