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
//import Pdfs from "pages/Tech/Pdf";
//import C1 from "pages/Cours/Sup/Math/src/Pdfs/Math/Cours-sup/C1";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import IS1 from "../../../../../../assets/images/icon/IS1.png";
import IS2 from "../../../../../../assets/images/icon/IS2.png";
import IS3 from "../../../../../../assets/images/icon/IS3.png";
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
              Programme Spe
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={IS1}
                name="Bases de données"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={IS2}
                name="Dictionnaires et programmation dynamique"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T7
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T8
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={IS3}
                name="Intelligence artificielle"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="outlined" color="info" style={{ float: "centre" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
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
