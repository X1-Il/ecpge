// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// e_ React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// e_ React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Home page sections
import Counters from "pages/Home/sections/Counters";
import Information from "pages/Home/sections/Information";
import DesignBlocks from "pages/Home/sections/DesignBlocks";
import Pages from "pages/Home/sections/Pages";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Home page components
import BuiltByDevelopers from "pages/Home/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Home() {
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
                e{"CPGE_"}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="dark"
                textAlign="center"
                px={{ xs: 6, lg: 10 }}
                mt={1}
              >
                Votre premiére platforme pour préparé votre concours : CNC, CCINP, CCMP et CCS.
              </MKTypography>
              <MKButton
                variant="outlined"
                color="info"
                href="https://chat.whatsapp.com/JdqZ1PMhlXaGd53LVIKxIp"
              >
                Click to join our community on whatsapp
              </MKButton>
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
        <Counters />
        <Information />
        <Pages />
        <DesignBlocks />
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
                  type: "external",
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
                  type: "external",
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
                  type: "external",
                  route: "/404",
                  label: "Voir les pbs",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
