// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// e_ React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// e_ React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/Todo.png";
import post2 from "assets/images/examples/AI.jpg";
import post3 from "assets/images/examples/P.jpg";
import post4 from "assets/images/examples/Ma.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Some educational tools.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Todo-App"
              description="Efficient task manager app for seamless organization and productivity"
              action={{
                type: "external",
                href: "https://todo-app-all.netlify.app/",
                color: "#1A73E8",
                label: "Voir",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="AI summarizer"
              description="Condenses text using ChatGPT for quick and concise information extraction."
              action={{
                type: "external",
                href: "https://ai-summarizer-x1.netlify.app/ ",
                color: "#1A73E8",
                label: "Voir ",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Python online compiler"
              description="Online Python compiler: write, run, and test Python code directly in your web browser."
              action={{
                type: "external",
                href: "https://www.programiz.com/python-programming/online-compiler/",
                color: "#1A73E8",
                label: "Voir",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Math tools"
              description="Tools for matrix, system solving,... in mathematics."
              action={{
                type: "external",
                route: "https://www.dcode.fr/liste-outils",
                label: "Voir",
                color: "white",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
