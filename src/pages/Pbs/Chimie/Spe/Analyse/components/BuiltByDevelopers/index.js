// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// e_ React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Focus from "assets/images/Focus.jpg";
function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={10}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${Focus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={1}>
            Conseil
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Pour optimiser la concentration pendant les vidéos avec les professeurs, il est
            recommandé de bien lire le cours avant la séance.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
