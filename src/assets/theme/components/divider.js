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

// e_ One_ helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, white } = colors;

export default {
  styleOverrides: {
    root: {
      background: rgba(dark.main, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      background: rgba(dark.main, 0.2),
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      background: rgba(white.main, 0.2),

      "&.MuiDivider-vertical": {
        background: rgba(white.main, 0.2),
      },
    },
  },
};
