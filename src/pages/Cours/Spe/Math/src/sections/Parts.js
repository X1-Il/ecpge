/*
=========================================================
* e_ One_ - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 X1-Il (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// e_ One_ components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// e_ One_ examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
//import Pdfs from "pages/Tech/Pdf";
//import C01 from "pages/Cours/Spe/Math/src/Pdfs/Math/Cours/C01.pdf";
// Images
import MS1 from "assets/images/icon/MS1.jpg";
import MS2 from "assets/images/icon/MS2.jpg";
import MS3 from "assets/images/icon/MS3.jpg";
import MS4 from "assets/images/icon/MS4.png";
import MS5 from "assets/images/icon/MS5.png";
import MS6 from "assets/images/icon/MS6.jpeg";
import MS7 from "assets/images/icon/MS7.png";
import MS8 from "assets/images/icon/MS8.png";
import MS9 from "assets/images/icon/MS9.png";
import MS10 from "assets/images/icon/MS10.png";
import MS11 from "assets/images/icon/MS11.png";
import MS12 from "assets/images/icon/MS12.png";
import MS13 from "assets/images/icon/MS13.jpg";
import MS14 from "assets/images/icon/MS14.png";
import MS15 from "assets/images/icon/MS15.jpg";
import MS16 from "assets/images/icon/MS16.png";
import MS17 from "assets/images/icon/MS17.png";
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
              Maths spe
            </MKTypography>
            <MKTypography variant="body2" opacity={0.8}>
              Mab9a lik walo l les concours albatal ;)
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS1}
                name="Compléments d’algèbre"
                position={{ color: "info", label: "Algébre" }}
                description="Concepts et techniques supplémentaires dans le domaine de l'algèbre mathématique."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M1">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V1">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS2}
                name="Réduction des endomorphismes et des matrices carrées"
                position={{ color: "info", label: "Algébre" }}
                description="Transformation d'endomorphismes ou de matrices carrées en formes simplifiées."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V2">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={MS3}
                name="Espaces euclidiens"
                position={{ color: "info", label: "Algébre" }}
                description="Espaces vectoriels munis d'un produit scalaire définissant une géométrie."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V3">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={MS4}
                name="Topologie des espaces vectoriels normés"
                position={{ color: "info", label: "Algébre-Analyse" }}
                description="Étude des propriétés de convergence et de continuité dans les espaces vectoriels normés."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V4">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS5}
                name="Séries numériques et vectorielles"
                position={{ color: "info", label: "Analyse" }}
                description="Sommation infinie de nombres réels ou de vecteurs dans une suite."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V5">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS6}
                name="Suites et séries de fonctions"
                position={{ color: "info", label: "Analyse" }}
                description="Séquences ou sommes infinies de fonctions dans une suite ou une série."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M6">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V6">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS7}
                name="Séries entières"
                position={{ color: "info", label: "Analyse" }}
                description="Séries de fonctions représentées par une somme infinie de termes polynomiaux."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M7">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V7">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS8}
                name="Fonctions vectorielles"
                position={{ color: "info", label: "Algébre" }}
                description="Fonctions dont les valeurs sont des vecteurs plutôt que des nombres."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M8">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T8">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V8">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS9}
                name="Intégration sur un intervalle quelconque"
                position={{ color: "info", label: "Analyse" }}
                description="Calcul de l'aire sous la courbe d'une fonction sur un intervalle arbitraire."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M9">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T9">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V9">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS10}
                name="Suites et séries d’intégrales"
                position={{ color: "info", label: "Analyse" }}
                description="Séquences ou sommes infinies d'intégrales de fonctions dans une suite ou une série."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M10">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T10">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V10">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS11}
                name="Intégrales dépendant d’un paramètre"
                position={{ color: "info", label: "Analyse" }}
                description="Intégrales dont les bornes ou la fonction intégrande dépendent d'un paramètre."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M11">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T11">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V11">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS12}
                name="Ensembles dénombrables"
                position={{ color: "info", label: "Proba" }}
                description="Ensembles dont les éléments peuvent être mis en correspondance avec les entiers naturels."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M12">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T12">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V12">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS13}
                name="Probabilités discrètes"
                position={{ color: "info", label: "Proba" }}
                description="Calcul de probabilités sur des ensembles finis ou dénombrables."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M13">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T13">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V13">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS14}
                name="Variables aléatoires discrètes"
                position={{ color: "info", label: "Proba" }}
                description="Variables aléatoires prenant des valeurs dans un ensemble fini ou dénombrable."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M14">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T14">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V14">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS15}
                name="Suites et séries matricielles"
                position={{ color: "info", label: "Analyse-Algébre" }}
                description="Séquences ou sommes infinies de matrices dans une suite ou une série."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M15">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T15">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V15">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS16}
                name="Equations différentielles linéaires"
                position={{ color: "info", label: "Analyse" }}
                description="Equations impliquant des dérivées et des fonctions linéaires des variables."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M16">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T16">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V16">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={MS17}
                name="Fonctions de plusieurs variables"
                position={{ color: "info", label: "Analyse" }}
                description="Fonctions qui prennent plusieurs variables en entrée et produisent une valeur en sortie."
              />
              <Link to="/Cours/Spe/Math/Cours/Spe-M17">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-T17">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Math/Cours/Spe-V17">
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
