// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// e_ React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Ibrahim laklaa</MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  href="https://www.instagram.com/Ibrahim_laklaa/"
                >
                  Follow
                </MKButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    0&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    56&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    215&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body2" fontWeight="light" color="text">
                I&apos;m <b>Ibrahim Laklaa (X1-Il)</b>, and I&apos;m a former student of CPGE
                Khouribga. I recently came across a website that offers an abundance of resources
                aimed at assisting students in preparing exceptionally well for their competitive
                exams.
                <br />
                <br />
                The platform provides a wide range of high-quality materials, including study
                guides, practice exams, and supplementary learning resources. These resources are
                carefully curated to ensure that students receive the necessary support and guidance
                for their exam preparations.
                <br />
                <br />
                The website aims to maximize student success by offering comprehensive and
                well-structured materials that cover various subjects and topics relevant to the
                exams. Whether it&apos;s for the upper classes or specialized courses, the platform
                caters to the specific needs of students at different levels.
                <br />
                <br />
                By utilizing these resources, students can enhance their understanding of the exam
                syllabus, improve their problem-solving skills, and gain confidence in tackling
                challenging questions. The platform&apos;s commitment to providing top-notch
                resources contributes to a student&apos;s comprehensive preparation, increasing
                their chances of achieving success in their exams.
                <br />
                <br />
                Overall, the website serves as a valuable tool for students seeking high-quality
                study materials and a competitive edge in their exam preparations.
                <MKTypography
                  component="a"
                  href="https://x1-il.netlify.app/"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
