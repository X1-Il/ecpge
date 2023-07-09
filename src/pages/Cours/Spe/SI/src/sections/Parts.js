// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// e_ One_ components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// e_ One_ examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
// Images
import SS1 from "assets/images/SS1.png";
import SS2 from "assets/images/SS2.png";
import SS3 from "assets/images/SS3.png";
import SS4 from "assets/images/SS4.png";
import SS5 from "assets/images/SS5.png";
import SS6 from "assets/images/SS6.png";
import { Link } from "react-router-dom";
function Parts() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="rgb(108 203 194)"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Asservissement
            </MKTypography>
            <MKTypography variant="body2" opacity={0.8}>
              Rappel - Correction - Linéarisation-Réduction
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={SS1}
                name="Rappel"
                position={{ color: "info", label: "Asservissement" }}
                description="Rappel sup"
              />
              <Link to="/Cours/Spe/SI/SS1R1">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS1R2">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R2
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS1R3">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R3
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS1T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS1T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={SS2}
                name="Correction"
                position={{ color: "info", label: "Asservissement" }}
                description="Étude de la régulation et du contrôle des systèmes pour l'ingénierie."
              />
              <Link to="/Cours/Spe/SI/SS2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS2R">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS2T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SV1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={SS3}
                name="Linéarisation-Réduction"
                position={{ color: "info", label: "Asservissement" }}
                description="Méthodes de linéarisation et de réduction de modèles dans l'ingénierie."
              />
              <Link to="/Cours/Spe/SI/SS3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS3A">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours A
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS3R">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS3AR">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  AR
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS3T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SV2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              <br />
              Mecanique
            </MKTypography>
            <MKTypography variant="body2" opacity={0.8}>
              Rappel - Dynamique - Mecanisme
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={SS4}
                name="Rappel"
                position={{ color: "info", label: "Mecanique" }}
                description="Rappel proj, cinematique, statique, ..."
              />
              <Link to="/Cours/Spe/SI/SS4R1">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4R2">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R2
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4R3">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R3
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4R4">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R4
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4R5">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R5
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS4T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={SS5}
                name="Dynamique"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des mouvements et des forces dans les systèmes d'ingénierie."
              />
              <Link to="/Cours/Spe/SI/SS5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5R">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS5T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SV3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={SS6}
                name="Mecanisme"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des éléments de liaison et des mouvements dans les systèmes mécaniques."
              />
              <Link to="/Cours/Spe/SI/SS6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS6R">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS6T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SS6T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/SI/SV4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Parts;
