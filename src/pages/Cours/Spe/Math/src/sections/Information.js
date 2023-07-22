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

// e_ One_ examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="bookIcon"
                    title="Cours"
                    description="Identifiez les objectifs d'apprentissage, lisez attentivement le contenu, prenez des notes concises et résumez les concepts clés."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="feedicon"
                    title="Td"
                    description="Analysez les questions, consultez vos notes et manuels, résolvez méthodiquement les problèmes en utilisant des exemples et vérifiez vos réponses pour une bonne compréhension des concepts."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="receiptOutlinedIcon"
                    title="les classiques"
                    description="Analysez attentivement les énoncés, identifiez les concepts et les méthodes pertinentes, utilisez des approches de résolution logiques et créatives, et pratiquez régulièrement avec des exemples similaires pour renforcer vos compétences en résolution de problèmes mathématiques."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="webStoriesIcon"
                    title="les incontournables"
                    description="étudiez les modèles et les techniques couramment utilisés, pratiquez régulièrement en résolvant des problèmes similaires, explorez différentes approches de résolution et recherchez des ressources supplémentaires pour approfondir votre compréhension et votre maîtrise de ces problèmes spécifiques."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Conseil"
              description=" Les mathématiques ne sont pas seulement une discipline de règles et de formules, mais aussi un domaine qui permet l'expression de la créativité. Cherchez des moyens originaux de résoudre les problèmes mathématiques et de faire des connexions avec d'autres domaines de la vie."
              action={{
                type: "internal",
                route: "/404",
                color: "info",
                label: "Plus",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
