/* eslint-disable no-param-reassign */
/**
=========================================================
* e_ React - v2.1.0
=========================================================

* Product Page: 
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// e_ React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputSuccess() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Success" fullWidth success />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputSuccess;
