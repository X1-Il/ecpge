/*
=========================================================
* e_ One_ - v2.1.0
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
// e_ One_ components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
//import { useNavigate } from "react-router-dom";
// e_ One_ examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import M1 from "assets/images/icon/M1.png";
import M2 from "assets/images/icon/M2.png";
import M3 from "assets/images/icon/M3.png";
import M4 from "assets/images/icon/M4.png";
import M5 from "assets/images/icon/M5.png";
import M6 from "assets/images/icon/M6.png";
import M7 from "assets/images/icon/M7.png";
import M8 from "assets/images/icon/M8.png";
import M9 from "assets/images/icon/M9.png";
import M10 from "assets/images/icon/M10.png";
import M11 from "assets/images/icon/M11.png";
import M12 from "assets/images/icon/M12.png";
import M13 from "assets/images/icon/M13.png";
import M14 from "assets/images/icon/M14.png";
import M15 from "assets/images/icon/M15.png";
import M16 from "assets/images/icon/M16.png";
import M17 from "assets/images/icon/M17.png";
import M18 from "assets/images/icon/M18.png";
import M19 from "assets/images/icon/M19.png";
import M20 from "assets/images/icon/M20.png";
import M21 from "assets/images/icon/M21.png";
import M22 from "assets/images/icon/M22.png";
import M23 from "assets/images/icon/M23.png";
import M24 from "assets/images/icon/M24.png";
import M25 from "assets/images/icon/M25.png";
import M26 from "assets/images/icon/M26.png";
import M27 from "assets/images/icon/M27.png";
import M28 from "assets/images/icon/M28.png";
import M29 from "assets/images/icon/M29.png";
import M30 from "assets/images/icon/M30.png";
import M31 from "assets/images/icon/M31.png";
import M32 from "assets/images/icon/M32.png";
import M33 from "assets/images/icon/M33.png";
import M34 from "assets/images/icon/M34.png";
import M35 from "assets/images/icon/M35.png";
import M36 from "assets/images/icon/M36.png";
import M37 from "assets/images/icon/M37.png";
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
              Maths sup
            </MKTypography>
            <MKTypography variant="body2" color="black" opacity={0.8}>
              9ra o zid 9ra ma3andnach m3a lkosala !!
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
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
                image={M2}
                name="Ensembles, relations, applications"
                position={{ color: "info", label: "Algébre" }}
                description="Ensembles, relations, applications : collections, liens, correspondances mathématiques."
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
                image={M3}
                name="Trigonométrie"
                position={{ color: "info", label: "Algébre" }}
                description="Étude des relations entre les angles et les côtés triangulaires."
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
                image={M4}
                name="Sigma et Pi. Le binôme de Newton"
                position={{ color: "info", label: "Algébre" }}
                description="Notation pour la somme, notation pour le produit et formule pour développer une puissance de binôme."
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
                image={M5}
                name="Inégalités"
                position={{ color: "info", label: "Analyse" }}
                description="Relations de comparaison entre des quantités mathématiques."
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
                image={M6}
                name="Petits systèmes d’équations linéaires "
                position={{ color: "info", label: "Analyse" }}
                description="Équations linéaires avec un petit nombre de variables inconnues."
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
                image={M7}
                name="Les nombres complexes"
                position={{ color: "info", label: "Algébre" }}
                description="Nombres composés de parties réelle et imaginaire, notés a + bi."
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
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M8}
                name="Compléments sur les fonctions"
                position={{ color: "info", label: "Analyse" }}
                description="Transformations mathématiques reliant les entrées aux sorties des variables."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M8">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T8">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V8">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M9}
                name="Fonctions de référence"
                position={{ color: "info", label: "Analyse" }}
                description="Fonctions standard utilisées comme référence dans l'étude des fonctions."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M9">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T9">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V9">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M10}
                name="Calculs de primitives et d’intégrales"
                position={{ color: "info", label: "Analyse" }}
                description="Détermination des fonctions dont la dérivée est donnée ou l'intégrale."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M10">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T10">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V10">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M11}
                name="Equations différentielles linéaires"
                position={{ color: "info", label: "Analyse" }}
                description="Équations impliquant des dérivées et des fonctions linéaires des variables."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M11">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T11">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V11">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M12}
                name="L’ensemble des nombres réels"
                position={{ color: "info", label: "Analyse" }}
                description="Ensemble comprenant les nombres rationnels et irrationnels sans partie imaginaire."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M12">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T12">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V12">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M13}
                name="Suites réelles, suites complexes "
                position={{ color: "info", label: "Analyse" }}
                description="Séquences ordonnées de nombres réels or complexes successifs."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M13">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T13">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V13">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M14}
                name="Limite d’une fonction en un point. Continuité en un point"
                position={{ color: "info", label: "Analyse" }}
                description="Limite : Approche d'une valeur proche.
                 Continuité : Absence de discontinuités."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M14">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T14">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V14">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M15}
                name="Continuité sur un intervalle"
                position={{ color: "info", label: "Analyse" }}
                description="Absence de discontinuités sur tout l'intervalle considéré."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M15">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T15">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V15">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M16}
                name="Dérivation"
                position={{ color: "info", label: "Analyse" }}
                description="Calcul de la dérivée, taux de variation instantané d'une fonction."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M16">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T16">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V16">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M17}
                name="Fonctions convexes "
                position={{ color: "info", label: "Analyse" }}
                description="Fonctions avec des courbes en forme de 'coupole' vers le haut."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M17">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T17">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V17">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M18}
                name="Arithmétique dans $\mathbb{Z}$"
                position={{ color: "info", label: "Algébre" }}
                description="Opérations mathématiques (addition, soustraction, multiplication) sur les entiers relatifs."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M18">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T18">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V18">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M19}
                name="Structures algébriques"
                position={{ color: "info", label: "Algébre" }}
                description="Systèmes mathématiques avec des opérations définies et des propriétés spécifiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M19">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T19">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V19">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M20}
                name="Matrices (1 ère partie)"
                position={{ color: "info", label: "Algébre" }}
                description="Tableaux rectangulaires d'éléments organisés en lignes et colonnes."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M20">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T20">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V20">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M21}
                name="Polynômes"
                position={{ color: "info", label: "Algébre" }}
                description="Expressions mathématiques composées de termes avec des variables et des coefficients."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M21">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T21">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V21">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M22}
                name="Fractions rationnelles"
                position={{ color: "info", label: "Analyse" }}
                description="Expressions mathématiques représentant le rapport de deux polynômes."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M22">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T22">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V22">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M23}
                name="Comparaison des suites en l’infini"
                position={{ color: "info", label: "Analyse" }}
                description="Comparaison des comportements des termes des suites à mesure qu'ils tendent vers l'infini."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M23">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T23">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V23">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M24}
                name="Comparaison des fonctions en un point"
                position={{ color: "info", label: "Analyse" }}
                description="Analyse des comportements des fonctions autour d'un point spécifique."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M24">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T24">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V24">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M25}
                name="Espaces vectoriels"
                position={{ color: "info", label: "Algébre" }}
                description="Ensembles de vecteurs avec des opérations de somme et de multiplication."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M25">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T25">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V25">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M26}
                name="Dimension d’un espace vectoriel"
                position={{ color: "info", label: "Algébre" }}
                description="Nombre de vecteurs linéairement indépendants nécessaires pour engendrer l'espace."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M26">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T26">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V26">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M27}
                name="Matrices (2ème partie)"
                position={{ color: "info", label: "Algébre" }}
                description="Tableaux rectangulaires d'éléments disposés en lignes et colonnes."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M27">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T27">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V27">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M28}
                name="Le groupe symétrique"
                position={{ color: "info", label: "Algébre" }}
                description="Groupe des permutations de n éléments, noté Sn, où n est un entier positif."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M28">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T28">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V28">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M29}
                name="Déterminants"
                position={{ color: "info", label: "Algébre" }}
                description="Fonction associant à une matrice un nombre réel ou complexe."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M29">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T29">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V29">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M30}
                name="Intégration sur un segment"
                position={{ color: "info", label: "Analyse" }}
                description="Calcul de l'aire sous la courbe d'une fonction sur un intervalle donné."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M30">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T30">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V30">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M31}
                name="Séries numériques"
                position={{ color: "info", label: "Analyse" }}
                description="Sommes infinies de termes d'une suite de nombres réels ou complexes."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M31">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T31">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V31">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M32}
                name="Familles sommables "
                position={{ color: "info", label: "Algébre" }}
                description="Ensembles de fonctions dont la somme converge uniformément ou presque partout."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M32">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T32">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V32">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M33}
                name="Produits scalaires. Espaces préhilbertiens, espaces euclidiens"
                position={{ color: "info", label: "Algébre" }}
                description="P.s : associations de vecteurs. E.préhilbertiens, E.euclidiens : structures géométriques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M33">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T33">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V33">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M34}
                name="Dénombrements"
                position={{ color: "info", label: "Proba" }}
                description="Comptage d'objets ou d'événements selon des règles spécifiques."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M34">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T34">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V34">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M35}
                name="Probabilités"
                position={{ color: "info", label: "Proba" }}
                description="Mesure de la chance ou de la probabilité d'un événement ou d'un résultat."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M35">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T35">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V35">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M36}
                name="Variables aléatoires"
                position={{ color: "info", label: "Proba" }}
                description="Fonctions qui attribuent des valeurs numériques aux résultats d'une expérience aléatoire."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M36">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T36">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V36">
                <MKButton variant="text" color="info" style={{ float: "right" }} size="small">
                  video
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={M37}
                name="Fonctions de deux variables"
                position={{ color: "info", label: "Analyse" }}
                description="Fonctions qui prennent deux variables en entrée et produisent une valeur en sortie."
              />
              <Link to="/Cours/Sup/Math/Cours/Sup-M37">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-T37">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
              <Link to="/Cours/Sup/Math/Cours/Sup-V37">
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
