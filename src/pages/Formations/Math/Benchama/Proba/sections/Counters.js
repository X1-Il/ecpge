// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// e_ React components
import MKBox from "components/MKBox";

// e_ React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Cours"
              description="Des cours avancés pour favoriser une meilleure compréhension de la matière."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={150}
              suffix="+"
              title="Classiques & Concours"
              description="Des classiques et concours avec des corrigés détaillés et exigeants."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={200}
              suffix="+"
              title="TIPE"
              description="Des exemples TIPE avec leurs MCOT"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
