// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// e_ React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
//import MKSocialButton from "components/MKSocialButton";

// e_ React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Home page sections
//import Information from "pages/Formations/Math/sections/Information";
import Pages from "pages/Formations/Math/Ilham/sections/Pages";
//import Testimonials from "pages/Formations/Math/sections/Testimonials";
//import Download from "pages/Formations/Math/sections/Download";

// Home page components
import BuiltByDevelopers from "pages/Formations/Math/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/IlhamP.jpg";

function IlhamP() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/Contact",
          label: "Contact us",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKBox
          color="info"
          bgColor="white"
          variant="gradient"
          borderRadius="lg"
          shadow="lg"
          opacity={0.9}
          p={8}
        >
          <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <MKTypography
                variant="h1"
                color="info"
                mt={-6}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Physique{" Mohamed Hinaoui"}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="dark"
                textAlign="center"
                px={{ xs: 6, lg: 10 }}
                mt={1}
              >
                Mr. Abdellatif est un prof au CPGE mohamed V et ex.prof en un cpge au france.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="import_contacts"
                title="Cours"
                description="Lire attentivement le cours pour une meilleure compréhension et assimilation des informations essentielles."
                action={{
                  type: "internal",
                  route: "/404",
                  label: "Voir les cours",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="article"
                title="Travaux dirigés"
                description="Travailler régulièrement les travaux dirigés (TD) pour renforcer la compréhension des concepts enseignés."
                action={{
                  type: "internal",
                  route: "/404",
                  label: "Voir les TDs",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Problèmes"
                description="Résoudre activement les problèmes pour développer des compétences pratiques et approfondir la compréhension des concepts."
                action={{
                  type: "internal",
                  route: "/404",
                  label: "Voir les pbs",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              ></Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default IlhamP;
