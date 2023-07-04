// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// e_ React components
import MKBox from "components/MKBox";

// e_ React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgH from "assets/images/bgH.jpg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgH}
                icon="touch_app"
                title={
                  <>
                    Etudier avec
                    <br />
                    des meilleures ressources
                  </>
                }
                description="Tous les documents ont été importés des professeurs d'excellence marocains et français"
              />
              <RotatingCardBack
                image={bgBack}
                title="Voir Plus"
                description="Vous pouvez accéder à toutes les ressources pour une bonne préparation."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Contact",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Documents"
                  description="Des cours, Tds, des classiques et des concours corrigé avec des capsules videos."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="featured_play_list"
                  title="Les PDFs sont bien listés."
                  description="Les PDFs sont listés d'aprés le programme MP."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Économiser temps & l'argent"
                  description="Certaines ressources sont premium, mais nous allons les ajouter gratuitement."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Dynamique"
                  description="L'utilisation de notre siteweb est trés facile et dynamique."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
