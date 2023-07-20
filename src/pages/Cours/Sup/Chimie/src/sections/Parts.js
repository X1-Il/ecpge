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
import C1 from "assets/images/icon/C1.jpg";
import C10 from "assets/images/icon/C10.png";
import C2 from "assets/images/icon/C2.png";
import C3 from "assets/images/icon/C3.png";
import C4 from "assets/images/icon/C4.png";
import C5 from "assets/images/icon/C5.png";
import C6 from "assets/images/icon/C6.png";
import C7 from "assets/images/icon/C7.png";
import C8 from "assets/images/icon/C8.png";
import C9 from "assets/images/icon/C9.png";
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
              Chimie de Solution
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C1}
                name="Eau liquide et eau solvant"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Étude des propriétés de l'eau en tant que liquide et solvant."
              />
              <Link to="/Cours/Sup/Chimie/C1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C2}
                name="Réactions acido-basiques"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Compréhension des réactions chimiques entre acides et bases."
              />
              <Link to="/Cours/Sup/Chimie/C2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={C3}
                name="Réaction de complexation"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Compréhension des interactions complexes entre molécules et ions métalliques."
              />
              <Link to="/Cours/Sup/Chimie/C3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={C4}
                name="Réactions de précipitation"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Formation de précipités solides lors de réactions chimiques spécifiques."
              />
              <Link to="/Cours/Sup/Chimie/C4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C5}
                name="Réactions de réduction"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Transformation chimique impliquant une diminution de l'état d'oxydation d'une substance."
              />
              <Link to="/Cours/Sup/Chimie/C5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C6}
                name="Diagramme  potentiel-pH"
                position={{ color: "info", label: "Chimie de Solution" }}
                description="Représentation graphique du potentiel électrochimique en fonction du pH."
              />
              <Link to="/Cours/Sup/Chimie/C6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V4">
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
              chimie de coordination
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C7}
                name="Structure des molécules"
                position={{ color: "info", label: "chimie de coordination" }}
                description="Description de l'arrangement et de la connectivité des atomes dans une molécule."
              />
              <Link to="/Cours/Sup/Chimie/C7">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={C8}
                name="Classification périodique"
                position={{ color: "info", label: "chimie de coordination" }}
                description="Organisation des éléments chimiques en fonction de leurs propriétés périodiques communes."
              />
              <Link to="/Cours/Sup/Chimie/C8">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={C9}
                name="Atomistique"
                position={{ color: "info", label: "chimie de coordination" }}
                description="Étude des propriétés et comportements des atomes et de leurs interactions."
              />
              <Link to="/Cours/Sup/Chimie/C9">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={C10}
                name="Cristallographie"
                position={{ color: "info", label: "chimie de coordination" }}
                description="Étude de la structure cristalline des solides, basée sur leur arrangement périodique."
              />
              <Link to="/Cours/Sup/Chimie/C10">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/T8">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Chimie/V7">
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
