// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

// e_ React components
import MKBox from "components/MKBox";
// @mui material components
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
// e_ React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/Todo.png";
const posts = [
  {
    type: "MP",
    name: "Todo-App",
    image: post1,
    // and the rest of the post info
  },
  {
    type: "PSI",
    name: "AI summarizer",
    image: post1,
    // and the rest of the post info
  },
  // more posts here
];

function Places() {
  const [searched, setSearched] = useState("");

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) => post.type.includes(searched) || post.name.includes(searched)
  );

  return (
    <MKBox component="section" py={2}>
      <Container>
        {/* Search bar */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setSearched("MP")}
              sx={{ color: "grey.500", borderColor: "grey.500" }}
            >
              MP
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setSearched("PSI")}
              sx={{ color: "grey.500", borderColor: "grey.500" }}
            >
              PSI
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setSearched("TSI")}
              sx={{ color: "grey.500", borderColor: "grey.500" }}
            >
              TSI
            </Button>
          </Box>
          <TextField
            id="search-bar"
            label="Search"
            variant="outlined"
            value={searched}
            onChange={handleSearch}
          />
        </Box>
        <br />
      </Container>
      <Container>
        {/* Now map through filteredPosts instead of all posts */}
        <Grid container spacing={3}>
          {filteredPosts.map((post, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <TransparentBlogCard
                image={post.image}
                title={post.name}
                description={post.description}
                action={{
                  type: "external",
                  href: post.href,
                  color: "#1A73E8",
                  label: "Voir",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
