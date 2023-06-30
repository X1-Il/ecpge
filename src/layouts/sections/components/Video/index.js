import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
//import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
//import colors from "assets/theme/base/colors";
import Pdf from "pages/Tech/Pdf/PdfViewer";
//import C02 from "./C02.pdf";

function Td({ children, T, title, height, ...rest }) {
  //const {} = colors;
  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);
  const handleTabType = (event, newValue) => setActiveTab(newValue);
  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="body1" pt={0.5}>
              {title}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="TD"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-check"
                    />
                  }
                  label="Corrigé"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            {children}
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MKBox
          bgColor="grey-100"
          position="relative"
          width="100%"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <Slide direction="down" in={success} unmountOnExit>
            <MKBox position="absolute" top="0.5rem" left={0} width="100%">
              <MKAlert
                width="25%"
                mx="auto"
                color="success"
                sx={{ minHeight: "2.5rem !important", py: 1, justifyContent: "center" }}
              ></MKAlert>
            </MKBox>
          </Slide>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            <Pdf pdfUrl={T} />
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

Td.defaultProps = {
  height: "auto",
};

Td.propTypes = {
  children: PropTypes.node.isRequired,
  T: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Td;
