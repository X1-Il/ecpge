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
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

const { grey } = colors;
const { size } = typography;

export default {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};
