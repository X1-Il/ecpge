// @mui material components
import Grid from "@mui/material/Grid";
import React from "react";
// e_ React components
import MKBox from "components/MKBox";
// @mui material components
import CardT from "TIPE/IG/sections/Cards.js";

// Images
import M1 from "../../../assets/images/icon/M1.png";
import { Link } from "react-router-dom";
import MKButton from "../../../components/MKButton";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1}>
            <CardT
              image={M1}
              name="Logique"
              position={{ color: "info", label: "Algébre" }}
              description="Raisonnement rigoureux et analyse des arguments mathématiques et logiques."
            />
            <Link to="/Cours/Sup/Math/Cours/Sup-M1">
              <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                Cours
              </MKButton>
            </Link>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MKBox mb={1}>
            <CardT
              image={M1}
              name="Logique"
              position={{ color: "info", label: "Algébre" }}
              description="Raisonnement rigoureux et analyse des arguments mathématiques et logiques."
            />
            <Link to="/Cours/Sup/Math/Cours/Sup-M1">
              <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                Cours
              </MKButton>
            </Link>
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Places;
