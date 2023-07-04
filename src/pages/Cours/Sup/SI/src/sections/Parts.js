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
import S1 from "assets/images/S1.png";
import S2 from "assets/images/S2.jpg";
import S3 from "assets/images/S3.png";
import S4 from "assets/images/S4.jpg";
import S5 from "assets/images/S5.jpg";
import S6 from "assets/images/S6.jpg";
import S7 from "assets/images/S7.png";
import S8 from "assets/images/S8.png";
import S9 from "assets/images/S9.png";
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
              SysMl - Généralités - Bode - Performances
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={S1}
                name="SYSML"
                position={{ color: "info", label: "Asservissement" }}
                description="Modélisation systèmes complexes, notation graphique, approche pratique et complète."
              />
              <Link to="/Cours/Sup/SI/S1">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S1T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S1T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={S2}
                name="Généralités"
                position={{ color: "info", label: "Asservissement" }}
                description="Étude de la régulation et du contrôle des systèmes pour l'ingénierie."
              />
              <Link to="/Cours/Sup/SI/S2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R2">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S2T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S2T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S2T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S2T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S2T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={S3}
                name="Bode"
                position={{ color: "info", label: "Asservissement" }}
                description="Étude de la représentation fréquentielle des systèmes par le diagramme de Bode."
              />
              <Link to="/Cours/Sup/SI/S3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R3">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S3T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S3T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={S4}
                name="Performances"
                position={{ color: "info", label: "Asservissement" }}
                description="Évaluation et optimisation des performances des systèmes en ingénierie."
              />
              <Link to="/Cours/Sup/SI/S4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R4">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S4T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S4T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S4T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S4T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S4T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V4">
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
              Proj - Cinématique - Integrale - Statique - Trains épiycloidaux
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={S5}
                name="Projection"
                position={{ color: "info", label: "Mecanique" }}
                description="Utilisation de techniques de projection pour l'analyse et la modélisation des systèmes."
              />
              <Link to="/Cours/Sup/SI/S5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R5">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S5T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={S6}
                name="Cinématique"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des mouvements des corps sans considération des forces appliquées."
              />
              <Link to="/Cours/Sup/SI/S6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R6">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T7
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T8">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T8
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T9">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T9
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T10">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T10
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T11">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T11
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T12">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T12
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T13">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T13
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T14">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T14
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S6T15">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T15
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={S7}
                name="Integrale"
                position={{ color: "info", label: "Mecanique" }}
                description=" Méthodes d'intégration et applications dans le domaine de l'ingénierie."
              />
              <Link to="/Cours/Sup/SI/S7">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R7">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S7T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V7">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={S8}
                name="Statique"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des forces et équilibre des systèmes sans mouvement dans l'ingénierie."
              />
              <Link to="/Cours/Sup/SI/S8">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/R8">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S8T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T7
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V8">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={S9}
                name="Trains épiycloidaux"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des mécanismes de transmission de puissance basés sur les trains épi-cycloïdaux."
              />
              <Link to="/Cours/Sup/SI/S9">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/S9T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/SI/V9">
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
