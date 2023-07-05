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
        { name: "Math", href: "https://www.creative-tim.com/Home" },
        { name: "Physique", href: "https://www.creative-tim.com/templates/free" },
        { name: "Chimie", href: "https://www.creative-tim.com/templates/premium" },
        { name: "SI", href: "https://www.creative-tim.com/blog" },
        { name: "Info", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Problèmes",
      items: [
        { name: "Math", href: "https://www.creative-tim.com/Home" },
        { name: "Physique", href: "https://www.creative-tim.com/templates/free" },
        { name: "Chimie", href: "https://www.creative-tim.com/templates/premium" },
        { name: "SI", href: "" },
        { name: "Info", href: "" },
      ],
    },
    {
      name: "Concours",
      items: [
        { name: "CNC ", href: "https://www.creative-tim.com/contact-us" },
        { name: "CCINP", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "CCMP", href: "https://services.creative-tim.com/" },
        { name: "CCS", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "About",
      items: [
        { name: "author", href: "/pages/About/Founder", type: "internal" },
        { name: "privacy policy", href: "" },
        { name: "licenses", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Developed by{" "}
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
