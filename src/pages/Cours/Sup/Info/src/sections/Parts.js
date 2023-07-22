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
import I1 from "assets/images/icon/I1.png";
import I2 from "assets/images/icon/I2.png";
import I3 from "assets/images/icon/I3.png";
import I4 from "assets/images/icon/I4.png";
import I5 from "assets/images/icon/I5.png";
import I6 from "assets/images/icon/I6.png";
import I7 from "assets/images/icon/I7.png";
import I8 from "assets/images/icon/I8.png";
import I9 from "assets/images/icon/I9.png";
import I10 from "assets/images/icon/I10.png";
import I11 from "assets/images/icon/I11.png";
import I12 from "assets/images/icon/I12.png";
import I13 from "assets/images/icon/I13.png";
import I14 from "assets/images/icon/I14.png";
import I15 from "assets/images/icon/I15.png";
import I16 from "assets/images/icon/I16.png";
import I17 from "assets/images/icon/I17.png";
import I18 from "assets/images/icon/I18.png";
import I19 from "assets/images/icon/I19.png";
import I20 from "assets/images/icon/I20.png";
import I21 from "assets/images/icon/I21.png";
import I22 from "assets/images/icon/I22.png";
import I23 from "assets/images/icon/I23.png";
import I24 from "assets/images/icon/I24.png";
import I25 from "assets/images/icon/I25.png";
import I26 from "assets/images/icon/I26.png";
import I27 from "assets/images/icon/I27.png";
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
              Bases Informatique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I1}
                name="Ordinateur"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C1">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I2}
                name="Logiciel"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C2">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T2">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I3}
                name="Commentaires"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C3">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I4}
                name="Variables"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C4">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I5}
                name="Print"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C5">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I6}
                name="Librairies"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C6">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I7}
                name="Listes"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C7">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R7">
                <MKButton variant="outlined" color="info" style={{ float: "center" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I8}
                name="for if while"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C8">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R8">
                <MKButton variant="outlined" color="info" style={{ float: "center" }} size="small">
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T81">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T82">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I9}
                name="Fonctions"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C9">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R9">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I10}
                name="Matplotlib"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C10">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R10">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I11}
                name="Numpy - Array"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C11">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R11">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I12}
                name="Fichiers"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />
              <br />
              <Link to="/Cours/Info/Sup/C12">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R12">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T12">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I13}
                name="Dictionnaires"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C13">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R13">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I14}
                name="Boîte à outils"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C14">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R14">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I26}
                name="Aide python"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C15">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R15">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I16}
                name="Quelques erreurs"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C16">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R16">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I17}
                name="Rédaction"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C17">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I18}
                name="Algorithmes à boucles imbriquées"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/T118">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T218">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T318">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T3
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I19}
                name="Modules - Bibliothèques"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/T119">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T219">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T319">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T3
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I20}
                name="Algorithmes dichotomiques"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/T120">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T220">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T320">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T420">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T4
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I21}
                name="Fonctions récursives"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C21">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R21">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T021">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T121">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T221">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T321">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T421">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T521">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I22}
                name="Algorithmes gloutons"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/T122">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T222">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  T2
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I23}
                name="Matrices de pixels et images"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C23">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R23">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T123">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T223">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T323">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T423">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T523">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T623">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T723">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T7
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T823">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T8
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T923">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T9
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1023">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T10
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1123">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T11
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1223">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T12
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1323">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T13
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1423">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T14
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1523">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T15
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1623">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T16
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1723">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T17
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T1823">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T18
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I24}
                name="Tris"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C24">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R24">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T124">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T224">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T324">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T3
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T424">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T4
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T524">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T5
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T624">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T6
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T724">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T7
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T824">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T8
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I25}
                name="Algorithmique"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C25">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R25">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I15}
                name="Représentation des nombres"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C26">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R26">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T126">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T226">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={I27}
                name="Bases des graphes"
                position={{ color: "info", label: "Informatique" }}
                description=""
              />{" "}
              <br />
              <Link to="/Cours/Info/Sup/C27">
                <MKButton variant="contained" color="info" size="small" sx={{ mr: 2 }}>
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/R27">
                <MKButton variant="outlined" color="info" size="small" sx={{ mr: 2 }}>
                  R
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T127">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T1
                </MKButton>
              </Link>
              <Link to="/Cours/Info/Sup/T227">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  T2
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
