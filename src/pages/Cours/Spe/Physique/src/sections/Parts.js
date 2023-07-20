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
import PS1 from "assets/images/icon/PS1.png";
import PS2 from "assets/images/icon/PS2.png";
import PS3 from "assets/images/icon/PS3.png";
import PS4 from "assets/images/icon/PS4.png";
import PS5 from "assets/images/icon/PS5.png";
import PS6 from "assets/images/icon/PS6.png";
import PS7 from "assets/images/icon/PS7.png";
import PS8 from "assets/images/icon/PS8.png";
import PS9 from "assets/images/icon/PS9.png";
import PS10 from "assets/images/icon/PS10.png";
import PS11 from "assets/images/icon/PS11.png";
import PS12 from "assets/images/icon/PS12.png";
import PS13 from "assets/images/icon/PS13.png";
import PS14 from "assets/images/icon/PS14.png";
import PS15 from "assets/images/icon/PS15.png";
import PS16 from "assets/images/icon/PS16.png";
import PS17 from "assets/images/icon/PS17.png";
import PS18 from "assets/images/icon/PS18.png";
import PS19 from "assets/images/icon/PS19.png";
import PS20 from "assets/images/icon/PS20.png";
import PS21 from "assets/images/icon/PS21.png";
import PS22 from "assets/images/icon/PS22.png";
import PS23 from "assets/images/icon/PS23.png";
import PS24 from "assets/images/icon/PS24.png";
import PS25 from "assets/images/icon/PS25.png";
import PS26 from "assets/images/icon/PS26.png";

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
              Mecanique du Solide
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS1}
                name="Cinématique du solide"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude du mouvement des objets solides en termes de position, vitesse et accélération."
              />
              <Link to="/Cours/Spe/Physique/C1">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS2}
                name="Cinétique d'un système de points matériels"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude du mouvement des particules indépendantes dans un système."
              />
              <Link to="/Cours/Spe/Physique/C2">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T1">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS3}
                name="Dynamique d'un système de points matériels"
                position={{ color: "info", label: "Mecanique" }}
                description="Étude des forces et des mouvements des particules dans un système."
              />
              <Link to="/Cours/Spe/Physique/C3">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS4}
                name="Modélisation des éfforts entre solides en contact"
                position={{ color: "info", label: "Mecanique" }}
                description="Modélisation des interactions et des forces entre solides en contact."
              />
              <Link to="/Cours/Spe/Physique/C4">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS5}
                name="Mvt d'un solide autour d'un axe de direction fixe"
                position={{ color: "info", label: "Mecanique" }}
                description="Mouvement de rotation d'un solide autour d'un axe fixe donné."
              />
              <Link to="/Cours/Spe/Physique/C5">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T2">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
              Electronique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS6}
                name="Composition en fréquence d'un signal périodique"
                position={{ color: "info", label: "Electronique" }}
                description="Découpage d'un signal périodique en ses composantes fréquentielles constitutives."
              />
              <Link to="/Cours/Spe/Physique/C6">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T3">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS7}
                name="Effet d'un filtre sur  un signal périodique"
                position={{ color: "info", label: "Electronique" }}
                description="Atténuation des hautes fréquences et conservation des basses fréquences dans un signal périodique."
              />
              <Link to="/Cours/Spe/Physique/C7">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T4">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
              Electromagnétisme
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS8}
                name="Formulation locale des lois de l'électrostatique"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Description des lois de l'électrostatique en termes de champs électriques et de charges locales."
              />
              <Link to="/Cours/Spe/Physique/C8">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T10">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS9}
                name="Champ et potentiel magnétostatique"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Description du champ magnétique et du potentiel magnétostatique dans une configuration stationnaire."
              />
              <Link to="/Cours/Spe/Physique/C9">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T11">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS10}
                name="Dipole magnétique"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Structure magnétique composée de deux pôles de polarité opposée."
              />
              <Link to="/Cours/Spe/Physique/C10">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T12">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS11}
                name="Force de Laplace"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Force exercée sur un conducteur parcouru par un courant dans un champ magnétique."
              />
              <Link to="//Cours/Spe/Physique/C11">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T13">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS12}
                name="Induction électromagnétique"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Phénomène de génération d'un courant électrique dans un conducteur en présence d'un champ magnétique variable."
              />
              <Link to="/Cours/Spe/Physique/C12">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T14">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS13}
                name="Equations de Maxwell"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="Système d'équations qui décrivent les lois fondamentales de l'électromagnétisme."
              />
              <Link to="/Cours/Spe/Physique/C13">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T15">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS14}
                name="Energie électromagnétique"
                position={{ color: "info", label: "Electromagnétisme" }}
                description="L'énergie associée aux champs électrique et magnétique d'une configuration électromagnétique."
              />
              <Link to="/Cours/Spe/Physique/C14">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T16">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
              Ondes Electromagnetique
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS15}
                name="Propagation du champ électromagnétique dans le vide"
                position={{ color: "info", label: "Ondes" }}
                description="Propagation des ondes électromagnétiques sans présence de milieu matériel."
              />
              <Link to="/Cours/Spe/Physique/C15">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T5">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS16}
                name="Ondes électromagnétiques dans un conducteur et dans un plasma"
                position={{ color: "info", label: "Ondes" }}
                description="Propagation des ondes électromagnétiques à travers un conducteur et un plasma."
              />
              <Link to="/Cours/Spe/Physique/C16">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T6">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS17}
                name="Réflexion d'une onde électromagnétique sur un conducteur parfait"
                position={{ color: "info", label: "Ondes" }}
                description="Réflexion totale d'une onde électromagnétique sur un conducteur sans résistance."
              />
              <Link to="/Cours/Spe/Physique/C17">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T7">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS18}
                name="Guide d'onde à section rectangulaire"
                position={{ color: "info", label: "Ondes" }}
                description="Guide d'onde avec une section transversale de forme rectangulaire."
              />
              <Link to="/Cours/Spe/Physique/C18">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T8">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={PS19}
                name="Rayonnement dipolaire"
                position={{ color: "info", label: "Ondes" }}
                description="Émission de rayonnement électromagnétique par un dipôle électrique ou magnétique."
              />
              <Link to="/Cours/Spe/Physique/C19">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T9">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
              Thermodynamique spe
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS20}
                name="Diffusion thermique"
                position={{ color: "info", label: "Thermodynamique" }}
                description="Raisonnement rigoureux et analyse des arguments mathématiques et logiques."
              />
              <Link to="/Cours/Spe/Physique/C20">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T17">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS21}
                name="Rayonnement thermique"
                position={{ color: "info", label: "Thermodynamique" }}
                description="Émission de rayonnement électromagnétique par un objet chaud en raison de sa température."
              />
              <Link to="/Cours/Spe/Physique/C21">
                <MKButton variant="contained" color="info" style={{ float: "centre" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T18">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
              Optique Ondulatoire
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS22}
                name="Modèle scalaire de la lumière"
                position={{ color: "info", label: "Optique" }}
                description="Description de la lumière en utilisant un modèle basé sur des grandeurs scalaires telles que l'intensité lumineuse et la couleur."
              />
              <Link to="/Cours/Spe/Physique/C22">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T19">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS23}
                name="Interférences non localisées"
                position={{ color: "info", label: "Optique" }}
                description="Interférences globales de deux ondes totalement cohérentes sans localisation précise."
              />
              <Link to="/Cours/Spe/Physique/C23">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T20">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS24}
                name="Cohérence de la  lumière"
                position={{ color: "info", label: "Optique" }}
                description="Propriété de la lumière qui permet à ses ondes de maintenir une relation de phase fixe dans le temps."
              />
              <Link to="/Cours/Spe/Physique/C24">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T21">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS25}
                name="Interféromètre de Michelson"
                position={{ color: "info", label: "Optique" }}
                description="Dispositif optique utilisé pour mesurer des différences de chemin optique en utilisant des interférences."
              />
              <Link to="/Cours/Spe/Physique/C25">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T22">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
                </MKButton>
              </Link>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={PS26}
                name="Diffraction des  ondes lumineuses"
                position={{ color: "info", label: "Optique" }}
                description="Phénomène de propagation et d'interférence des ondes lumineuses autour des obstacles."
              />
              <Link to="/Cours/Spe/Physique/C26">
                <MKButton variant="contained" color="info" style={{ float: "center" }} size="small">
                  Cours
                </MKButton>
              </Link>
              <Link to="/Cours/Spe/Physique/T23">
                <MKButton variant="text" color="info" style={{ float: "centre" }} size="small">
                  Td
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
