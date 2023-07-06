// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// e_ One_ components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
//import { useNavigate } from "react-router-dom";
// e_ One_ examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import P1 from "assets/images/icon/P1.png";
import P2 from "assets/images/icon/P2.png";
import P3 from "assets/images/icon/P3.png";
import P4 from "assets/images/icon/P4.png";
import P5 from "assets/images/icon/P5.png";
import P6 from "assets/images/icon/P6.png";
import P7 from "assets/images/icon/P7.png";
import P8 from "assets/images/icon/P8.jpeg";
import P9 from "assets/images/icon/P9.jpg";
import P10 from "assets/images/icon/P10.png";
import P11 from "assets/images/icon/P11.jpeg";
import P12 from "assets/images/icon/P12.jpeg";
import P13 from "assets/images/icon/P13.jpg";
import P14 from "assets/images/icon/P14.jpg";
import P15 from "assets/images/icon/P15.png";
import P16 from "assets/images/icon/P16.jpg";
import P17 from "assets/images/icon/P17.png";
import P18 from "assets/images/icon/P18.png";
import P19 from "assets/images/icon/P19.png";
import P20 from "assets/images/icon/P20.png";
import P21 from "assets/images/icon/P21.png";
import P22 from "assets/images/icon/P22.png";
import P23 from "assets/images/icon/P23.png";
import P24 from "assets/images/icon/P24.png";
import P25 from "assets/images/icon/P25.png";
import P26 from "assets/images/icon/P26.png";
import P27 from "assets/images/icon/P27.png";
import P28 from "assets/images/icon/P28.png";
import P29 from "assets/images/icon/P29.png";
import P30 from "assets/images/icon/P30.png";

//import Pdfs from "pages/Tech/Pdf";
//import C1 from "pages/Cours/Sup/Math/src/Pdfs/Math/Cours-sup/C1";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//import C01 from "../Pdfs/Math/Cours/C01.pdf";
//import C02 from "../Pdfs/Math/Cours/C02.pdf";
//routes
//pdfs
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
              Mecanique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P1}
                name="Cinématique d'un point matériel"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des mouvements ponctuels dans l'espace : position, vitesse, accélération."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P2}
                name="Dynamique d'un pt matériel dans un référentiel galiléen"
                position={{ color: "info", label: "Mecanique" }}
                description="Compréhension des forces et des lois du mouvement d'un point matériel dans un référentiel galiléen."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P3}
                name="Travail et puissance d'une force-TEC"
                position={{ color: "info", label: "Mecanique" }}
                description="Relation entre le travail, la puissance et le théorème de l'énergie cinétique pour une force donnée."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P4}
                name="Oscillateur linéaire à un degré de liberté"
                position={{ color: "info", label: "Mecanique" }}
                description="Mouvements oscillatoires d'un système unidimensionnel avec force restauratrice."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P5}
                name="TMC d'un pt matériel"
                position={{ color: "info", label: "Mecanique" }}
                description="Analyse du mouvement d'un point matériel en utilisant les équations de la mécanique classique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P6}
                name="Forces centrales "
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des forces agissant sur un objet qui sont dirigées vers un point fixe appelé centre."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P7}
                name="Dynamique dans un référentiel non galiléen"
                position={{ color: "info", label: "Mecanique" }}
                description="Mouvement dans référentiel non galiléen : forces inertielles et dynamique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M7">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V7">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Thermodynamique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P8}
                name="Modèle du gaz parfait"
                position={{ color: "info", label: "Thermo" }}
                description="Comportement théorique des gaz idéaux : lois thermodynamiques et cinétiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P9}
                name="Systèmes thermodynamiques"
                position={{ color: "info", label: "Thermo" }}
                description="Analyse des systèmes physiques : énergie, entropie, équilibre thermique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P10}
                name="Eléments de statique de fluide"
                position={{ color: "info", label: "Thermo" }}
                description="Étude de l'équilibre des fluides au repos : pression, densité, forces."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P11}
                name="Premier principe de la thermo"
                position={{ color: "info", label: "Thermo" }}
                description="Principe fondamental de la thermodynamique : conservation de l'énergie dans un système isolé."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P12}
                name="Second principe de la thermo"
                position={{ color: "info", label: "Thermo" }}
                description="Principe de la thermodynamique : existence de l'entropie dans les systèmes isolés."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P13}
                name="Les machines thermiques"
                position={{ color: "info", label: "Thermo" }}
                description="Étude des machines convertissant l'énergie thermique en travail mécanique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Electrocinétique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P14}
                name="Lois générales dans l'ARQS"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Lois fondamentales de l'ARQS : conservation de l'énergie et de la quantité de mouvement."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P15}
                name="Eléments de circuits linéaires"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Composants et concepts des circuits linéaires : résistances, condensateurs, inductances, lois de Kirchhoff."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P16}
                name="Théorèmes de base"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Superposition - Thévenin "
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P17}
                name="Régime transitoire"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Phase de transition d'un système après un changement de conditions, avant d'atteindre un état stable."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P18}
                name="Régime sinusoidal forcé d'un circuit RLC"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Étude du comportement d'un circuit RLC soumis à une source d'alimentation sinusoidale."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P19}
                name="Puissance en régime sinusoidal"
                position={{ color: "info", label: "Electrocinétique" }}
                description=" Étude de la puissance instantanée et moyenne dans un système électrique en régime sinusoidal."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P20}
                name="Diagramme de Bode"
                position={{ color: "info", label: "Electrocinétique" }}
                description="Réponse en fréquence des filtres du premier et second ordre."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P21}
                name="AO en régime linéaire"
                position={{ color: "info", label: "Electrocinétique" }}
                description="étude de ses propriétés de gain, de la linéarité et de la réponse en fréquence."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P22}
                name="AO en régime non linéaire"
                position={{ color: "info", label: "Electrocinétique" }}
                description="étude de ses propriétés de saturation, de distorsion et de la réponse non linéaire."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Optique Géometrique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P23}
                name="AOG-Rayon lumineux"
                position={{ color: "info", label: "Optique" }}
                description="Propagation d'un rayon lumineux dans un AOG : réfraction, réflexion, amplification optique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P24}
                name="Formations des images dans les conditions de Gauss"
                position={{ color: "info", label: "Optique" }}
                description="Le comportement de systèmes optiques approximativement paraxiaux et stigmatiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P25}
                name="Instruments optiques"
                position={{ color: "info", label: "Optique" }}
                description="Lentilles, miroirs, télescopes, microscopes et leurs applications."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Electrostatique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P26}
                name="Champ et potentiel électrostatique"
                position={{ color: "info", label: "Electrostatique" }}
                description="étude des charges et des interactions électriques statiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P27}
                name="Dipole électrostatique"
                position={{ color: "info", label: "Electrostatique" }}
                description="Deux charges opposées, séparées par distance, avec moment dipolaire."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P28}
                name="Aspets énergétiques"
                position={{ color: "info", label: "Electrostatique" }}
                description="Énergie potentielle, cinétique et transformations énergétiques des systèmes."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={P29}
                name="Conducteurs en équilibre électrostatique"
                position={{ color: "info", label: "Electrostatique" }}
                description="Charges uniformément réparties, champ électrique nul."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="info">
              Quantique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={P30}
                name="Intro au monde quantique"
                position={{ color: "info", label: "Quantique" }}
                description="Principes fondamentaux et comportement des particules subatomiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V1">
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
