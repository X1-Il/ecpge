// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// e_ React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "eCPGE_",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Cours",
      items: [
        { name: "Math", href: "Home" },
        { name: "Physique", href: "" },
        { name: "Chimie", href: "m" },
        { name: "SI", href: "" },
        { name: "Info", href: "" },
      ],
    },
    {
      name: "Problèmes",
      items: [
        { name: "Math", href: "Home" },
        { name: "Physique", href: "templates/free" },
        { name: "Chimie", href: "templates/premium" },
        { name: "SI", href: "" },
        { name: "Info", href: "" },
      ],
    },
    {
      name: "Concours",
      items: [
        { name: "CNC ", href: "" },
        { name: "CCINP", href: "" },
        { name: "CCMP", href: "" },
        { name: "CCS", href: "" },
      ],
    },
    {
      name: "About",
      items: [
        { name: "author", href: "/author" },
        { name: "privacy policy", href: "/404" },
        { name: "licenses", href: "/404" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}.<b>Version Juillet</b> Developed by{" "}
      <MKTypography
        component="a"
        href="https://x1-il.netlify.app/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        <b>X1-Il</b>
      </MKTypography>
      .
    </MKTypography>
  ),
};
