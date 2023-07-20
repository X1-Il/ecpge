// @mui material components
import Icon from "@mui/material/Icon";
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import NotFound from "pages/LandingPages/Error/index1.js";
import CNC from "pages/Concours/CNC/index.js";
import CCINP from "pages/Concours/CCINP/index.js";
import CCMP from "pages/Concours/CCMP/index.js";
import CCS from "pages/Concours/CCS/index.js";
import TIPE from "TIPE/index.js";
import TIPEIG from "TIPE/IG/index.js";
import SignIn from "layouts/pages/authentication/sign-in/index.js";
import PbM from "pages/Pbs/Math/Sup/index";
import MathSup from "pages/Cours/Sup/Math";
import PSup from "pages/Cours/Sup/Physique";
import PSpe from "pages/Cours/Spe/Physique";
import TSpe from "pages/Cours/Spe/Tr";
import TSup from "pages/Cours/Sup/Tr";
import ISup from "pages/Cours/Sup/Info";
import ISpe from "pages/Cours/Spe/Info";
import CSpe from "pages/Cours/Spe/Chimie";
import CSup from "pages/Cours/Sup/Chimie";
import MathSpe from "pages/Cours/Spe/Math";
import Formation from "pages/Formations/Formation";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import datailham from "pages/Formations/data/DataIlham";
import MathF from "pages/Formations/Math/index";
import MathC from "pages/Cours/Math/index";
import InfoC from "pages/Cours/Info/index";
import TrC from "pages/Cours/Tr/index";
import ChimieF from "pages/Formations/Chimie/index";
import ChimieC from "pages/Cours/Chimie/index";
import SIC from "pages/Cours/SI/index";
import CDS from "pages/Formations/Chimie/Hinaoui/CDS/index";
import CR from "pages/Formations/Chimie/Hinaoui/CR/index";
import CS from "pages/Formations/Chimie/Hinaoui/CS/index";
import TC from "pages/Formations/Chimie/Hinaoui/TC/index";
import PhysiqueF from "pages/Formations/Physique/index";
import PhysiqueC from "pages/Cours/Physique/index";
import IlhamP from "pages/Formations/Math/Ilham/index";
import SISup from "pages/Cours/Sup/SI/index";
import SISpe from "pages/Cours/Spe/SI/index";
import BenchamaP from "pages/Formations/Math/Benchama/index";
import HinaouiP from "pages/Formations/Physique/Hinaoui/index";
import HinaouiC from "pages/Formations/Chimie/Hinaoui/index";
import IlhamAnalyse from "pages/Formations/Math/Ilham/Analyse/index";
import IlhamAlgebre from "pages/Formations/Math/Ilham/Algebre/index";
import IlhamProba from "pages/Formations/Math/Ilham/Proba/index";
import BenchamaAnalyse from "pages/Formations/Math/Benchama/Analyse/index";
import BenchamaAlgebre from "pages/Formations/Math/Benchama/Algebre/index";
import BenchamaProba from "pages/Formations/Math/Benchama/Proba/index";
import MecH from "pages/Formations/Physique/Hinaoui/Mecanique/index";
import ThermoH from "pages/Formations/Physique/Hinaoui/Thermo/index";
import OptH from "pages/Formations/Physique/Hinaoui/Optique/index";
import EMH from "pages/Formations/Physique/Hinaoui/Electromagnetisme/index";
import MecSK from "pages/Formations/SI/Khalid/MecSK/index";
import Ass from "pages/Formations/SI/Khalid/Ass/index";
import Khalid from "pages/Formations/SI/Khalid/index";
import Author from "pages/LandingPages/Author/index";
import MPBS from "pages/Pbs/Math/index.js";
import PbPS from "pages/Pbs/Physique/Psup/index.js";
import CbPS from "pages/Pbs/Chimie/Csup/index.js";
import CPBS from "pages/Pbs/Chimie/index.js";
import PPBS from "pages/Pbs/Physique/index.js";
import PbMS from "pages/Pbs/Math/Spe/index.js";
import PbMAl from "pages/Pbs/Math/Sup/Algebre/index.js";
import PbMSAl from "pages/Pbs/Math/Spe/Algebre/index.js";
import PbMSA from "pages/Pbs/Math/Spe/Analyse/index.js";
import PbMSP from "pages/Pbs/Math/Spe/Proba/index.js";
//Pdf Trad
import Trad1 from "pages/Cours/Spe/Tr/src/pdf/1-Traduction 1ère année.pdf";
import Trad2 from "pages/Cours/Spe/Tr/src/pdf/1-Traduction 2ème année .pdf";
//SI Pdf
import SI1 from "pages/Cours/Sup/SI/src/Pdfs/SI1.pdf";
import SI2 from "pages/Cours/Sup/SI/src/Pdfs/SI2.pdf";
import SI3 from "pages/Cours/Sup/SI/src/Pdfs/SI3.pdf";
import SI4 from "pages/Cours/Sup/SI/src/Pdfs/SI4.pdf";
import SI5 from "pages/Cours/Sup/SI/src/Pdfs/SI5.pdf";
import SI6 from "pages/Cours/Sup/SI/src/Pdfs/SI6.pdf";
import SI7 from "pages/Cours/Sup/SI/src/Pdfs/SI7.pdf";
import SI8 from "pages/Cours/Sup/SI/src/Pdfs/SI8.pdf";
import SI9 from "pages/Cours/Sup/SI/src/Pdfs/SI9.pdf";
import SI2R from "pages/Cours/Sup/SI/src/Pdfs/SI2R.pdf";
import SI3R from "pages/Cours/Sup/SI/src/Pdfs/SI3R.pdf";
import SI4R from "pages/Cours/Sup/SI/src/Pdfs/SI4R.pdf";
import SI5R from "pages/Cours/Sup/SI/src/Pdfs/SI5R.pdf";
import SI6R from "pages/Cours/Sup/SI/src/Pdfs/SI6R.pdf";
import SI7R from "pages/Cours/Sup/SI/src/Pdfs/SI7R.pdf";
import SI8R from "pages/Cours/Sup/SI/src/Pdfs/SI8R.pdf";
//Td
import SI1T1 from "pages/Cours/Sup/SI/src/Pdfs/SI1T1.pdf";
import SI1T2 from "pages/Cours/Sup/SI/src/Pdfs/SI1T2.pdf";
import SI1T1C from "pages/Cours/Sup/SI/src/Pdfs/SI1T1C.pdf";
import SI1T2C from "pages/Cours/Sup/SI/src/Pdfs/SI1T2C.pdf";
import SI2T1 from "pages/Cours/Sup/SI/src/Pdfs/SI2T1.pdf";
import SI2T2 from "pages/Cours/Sup/SI/src/Pdfs/SI2T2.pdf";
import SI2T3 from "pages/Cours/Sup/SI/src/Pdfs/SI2T3.pdf";
import SI2T4 from "pages/Cours/Sup/SI/src/Pdfs/SI2T4.pdf";
import SI2T5 from "pages/Cours/Sup/SI/src/Pdfs/SI2T5.pdf";
import SI2T1C from "pages/Cours/Sup/SI/src/Pdfs/SI2T1C.pdf";
import SI2T2C from "pages/Cours/Sup/SI/src/Pdfs/SI2T2C.pdf";
import SI2T3C from "pages/Cours/Sup/SI/src/Pdfs/SI2T3C.pdf";
import SI2T4C from "pages/Cours/Sup/SI/src/Pdfs/SI2T4C.pdf";
import SI2T5C from "pages/Cours/Sup/SI/src/Pdfs/SI2T5C.pdf";
import SI3T1 from "pages/Cours/Sup/SI/src/Pdfs/SI3T1.pdf";
import SI3T2 from "pages/Cours/Sup/SI/src/Pdfs/SI3T2.pdf";
import SI3T1C from "pages/Cours/Sup/SI/src/Pdfs/SI3T1C.pdf";
import SI3T2C from "pages/Cours/Sup/SI/src/Pdfs/SI3T2C.pdf";
import SI4T1 from "pages/Cours/Sup/SI/src/Pdfs/SI4T1.pdf";
import SI4T2 from "pages/Cours/Sup/SI/src/Pdfs/SI4T2.pdf";
import SI4T3 from "pages/Cours/Sup/SI/src/Pdfs/SI4T3.pdf";
import SI4T4 from "pages/Cours/Sup/SI/src/Pdfs/SI4T4.pdf";
import SI4T5 from "pages/Cours/Sup/SI/src/Pdfs/SI4T5.pdf";
import SI4T1C from "pages/Cours/Sup/SI/src/Pdfs/SI4T1C.pdf";
import SI4T2C from "pages/Cours/Sup/SI/src/Pdfs/SI4T2C.pdf";
import SI4T3C from "pages/Cours/Sup/SI/src/Pdfs/SI4T3C.pdf";
import SI4T4C from "pages/Cours/Sup/SI/src/Pdfs/SI4T4C.pdf";
import SI4T5C from "pages/Cours/Sup/SI/src/Pdfs/SI4T5C.pdf";
import SI5T1 from "pages/Cours/Sup/SI/src/Pdfs/SI5T1.pdf";
import SI5T1C from "pages/Cours/Sup/SI/src/Pdfs/SI5T1C.pdf";
import SI6T1 from "pages/Cours/Sup/SI/src/Pdfs/SI6T1.pdf";
import SI6T2 from "pages/Cours/Sup/SI/src/Pdfs/SI6T2.pdf";
import SI6T3 from "pages/Cours/Sup/SI/src/Pdfs/SI6T3.pdf";
import SI6T4 from "pages/Cours/Sup/SI/src/Pdfs/SI6T4.pdf";
import SI6T5 from "pages/Cours/Sup/SI/src/Pdfs/SI6T5.pdf";
import SI6T6 from "pages/Cours/Sup/SI/src/Pdfs/SI6T6.pdf";
import SI6T7 from "pages/Cours/Sup/SI/src/Pdfs/SI6T7.pdf";
import SI6T8 from "pages/Cours/Sup/SI/src/Pdfs/SI6T8.pdf";
import SI6T9 from "pages/Cours/Sup/SI/src/Pdfs/SI6T9.pdf";
import SI6T10 from "pages/Cours/Sup/SI/src/Pdfs/SI6T10.pdf";
import SI6T11 from "pages/Cours/Sup/SI/src/Pdfs/SI6T11.pdf";
import SI6T12 from "pages/Cours/Sup/SI/src/Pdfs/SI6T12.pdf";
import SI6T13 from "pages/Cours/Sup/SI/src/Pdfs/SI6T13.pdf";
import SI6T14 from "pages/Cours/Sup/SI/src/Pdfs/SI6T14.pdf";
import SI6T15 from "pages/Cours/Sup/SI/src/Pdfs/SI6T15.pdf";
import SI6T1C from "pages/Cours/Sup/SI/src/Pdfs/SI6T1C.pdf";
import SI6T2C from "pages/Cours/Sup/SI/src/Pdfs/SI6T2C.pdf";
import SI6T3C from "pages/Cours/Sup/SI/src/Pdfs/SI6T3C.pdf";
import SI6T4C from "pages/Cours/Sup/SI/src/Pdfs/SI6T4C.pdf";
import SI6T5C from "pages/Cours/Sup/SI/src/Pdfs/SI6T5C.pdf";
import SI6T6C from "pages/Cours/Sup/SI/src/Pdfs/SI6T6C.pdf";
import SI6T7C from "pages/Cours/Sup/SI/src/Pdfs/SI6T7C.pdf";
import SI6T8C from "pages/Cours/Sup/SI/src/Pdfs/SI6T8C.pdf";
import SI6T9C from "pages/Cours/Sup/SI/src/Pdfs/SI6T9C.pdf";
import SI6T10C from "pages/Cours/Sup/SI/src/Pdfs/SI6T10C.pdf";
import SI6T11C from "pages/Cours/Sup/SI/src/Pdfs/SI6T11C.pdf";
import SI6T12C from "pages/Cours/Sup/SI/src/Pdfs/SI6T12C.pdf";
import SI6T13C from "pages/Cours/Sup/SI/src/Pdfs/SI6T13C.pdf";
import SI6T14C from "pages/Cours/Sup/SI/src/Pdfs/SI6T14C.pdf";
import SI6T15C from "pages/Cours/Sup/SI/src/Pdfs/SI6T15C.pdf";
import SI7T1 from "pages/Cours/Sup/SI/src/Pdfs/SI7T1.pdf";
import SI7T1C from "pages/Cours/Sup/SI/src/Pdfs/SI7T1C.pdf";
import SI8T1 from "pages/Cours/Sup/SI/src/Pdfs/SI8T1.pdf";
import SI8T2 from "pages/Cours/Sup/SI/src/Pdfs/SI8T2.pdf";
import SI8T3 from "pages/Cours/Sup/SI/src/Pdfs/SI8T3.pdf";
import SI8T4 from "pages/Cours/Sup/SI/src/Pdfs/SI8T4.pdf";
import SI8T5 from "pages/Cours/Sup/SI/src/Pdfs/SI8T5.pdf";
import SI8T6 from "pages/Cours/Sup/SI/src/Pdfs/SI8T6.pdf";
import SI8T7 from "pages/Cours/Sup/SI/src/Pdfs/SI8T7.pdf";
import SI8T1C from "pages/Cours/Sup/SI/src/Pdfs/SI8T1C.pdf";
import SI8T2C from "pages/Cours/Sup/SI/src/Pdfs/SI8T2C.pdf";
import SI8T3C from "pages/Cours/Sup/SI/src/Pdfs/SI8T3C.pdf";
import SI8T4C from "pages/Cours/Sup/SI/src/Pdfs/SI8T4C.pdf";
import SI8T5C from "pages/Cours/Sup/SI/src/Pdfs/SI8T5C.pdf";
import SI8T6C from "pages/Cours/Sup/SI/src/Pdfs/SI8T6C.pdf";
import SI8T7C from "pages/Cours/Sup/SI/src/Pdfs/SI8T7C.pdf";
import SI9T1 from "pages/Cours/Sup/SI/src/Pdfs/SI9T1.pdf";
import SI9T1C from "pages/Cours/Sup/SI/src/Pdfs/SI9T1C.pdf";
//spe

import SIS1R1 from "pages/Cours/Spe/SI/src/Pdfs/SIS1R1.pdf";
import SIS1R2 from "pages/Cours/Spe/SI/src/Pdfs/SIS1R2.pdf";
import SIS1R3 from "pages/Cours/Spe/SI/src/Pdfs/SIS1R3.pdf";
import SIS1T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS1T1.pdf";
import SIS1T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS1T1C.pdf";
import SIS1T2 from "pages/Cours/Spe/SI/src/Pdfs/SIS1T2.pdf";
import SIS1T2C from "pages/Cours/Spe/SI/src/Pdfs/SIS1T2C.pdf";
import SIS2 from "pages/Cours/Spe/SI/src/Pdfs/SIS2.pdf";
import SIS2R from "pages/Cours/Spe/SI/src/Pdfs/SIS2R.pdf";
import SIS2T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS2T1.pdf";
import SIS2T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS2T1C.pdf";
import SIS3 from "pages/Cours/Spe/SI/src/Pdfs/SIS3.pdf";
import SIS3A from "pages/Cours/Spe/SI/src/Pdfs/SIS3A.pdf";
import SIS3R from "pages/Cours/Spe/SI/src/Pdfs/SIS3R.pdf";
import SIS3AR from "pages/Cours/Spe/SI/src/Pdfs/SIS3AR.pdf";
import SIS3T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS3T1.pdf";
import SIS3T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS3T1C.pdf";
import SIS4R1 from "pages/Cours/Spe/SI/src/Pdfs/SIS4R1.pdf";
import SIS4R2 from "pages/Cours/Spe/SI/src/Pdfs/SIS4R2.pdf";
import SIS4R3 from "pages/Cours/Spe/SI/src/Pdfs/SIS4R3.pdf";
import SIS4R4 from "pages/Cours/Spe/SI/src/Pdfs/SIS4R4.pdf";
import SIS4R5 from "pages/Cours/Spe/SI/src/Pdfs/SIS4R5.pdf";
import SIS4T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS4T1.pdf";
import SIS4T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS4T1C.pdf";
import SIS4T2 from "pages/Cours/Spe/SI/src/Pdfs/SIS4T2.pdf";
import SIS4T2C from "pages/Cours/Spe/SI/src/Pdfs/SIS4T2C.pdf";
import SIS4T3 from "pages/Cours/Spe/SI/src/Pdfs/SIS4T3.pdf";
import SIS4T3C from "pages/Cours/Spe/SI/src/Pdfs/SIS4T3C.pdf";
import SIS4T4 from "pages/Cours/Spe/SI/src/Pdfs/SIS4T4.pdf";
import SIS4T4C from "pages/Cours/Spe/SI/src/Pdfs/SIS4T4C.pdf";
import SIS4T5 from "pages/Cours/Spe/SI/src/Pdfs/SIS4T5.pdf";
import SIS4T5C from "pages/Cours/Spe/SI/src/Pdfs/SIS4T5C.pdf";
import SIS5 from "pages/Cours/Spe/SI/src/Pdfs/SIS5.pdf";
import SIS5R from "pages/Cours/Spe/SI/src/Pdfs/SIS5R.pdf";
import SIS5T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS5T1.pdf";
import SIS5T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS5T1C.pdf";
import SIS5T2 from "pages/Cours/Spe/SI/src/Pdfs/SIS5T2.pdf";
import SIS5T2C from "pages/Cours/Spe/SI/src/Pdfs/SIS5T2C.pdf";
import SIS5T3 from "pages/Cours/Spe/SI/src/Pdfs/SIS5T3.pdf";
import SIS5T3C from "pages/Cours/Spe/SI/src/Pdfs/SIS5T3C.pdf";
import SIS5T4 from "pages/Cours/Spe/SI/src/Pdfs/SIS5T4.pdf";
import SIS5T4C from "pages/Cours/Spe/SI/src/Pdfs/SIS5T4C.pdf";
import SIS5T5 from "pages/Cours/Spe/SI/src/Pdfs/SIS5T5.pdf";
import SIS5T5C from "pages/Cours/Spe/SI/src/Pdfs/SIS5T5C.pdf";
import SIS6 from "pages/Cours/Spe/SI/src/Pdfs/SIS6.pdf";
import SIS6R from "pages/Cours/Spe/SI/src/Pdfs/SIS6R.pdf";
import SIS6T1 from "pages/Cours/Spe/SI/src/Pdfs/SIS6T1.pdf";
import SIS6T1C from "pages/Cours/Spe/SI/src/Pdfs/SIS6T1C.pdf";
import SIS6T2 from "pages/Cours/Spe/SI/src/Pdfs/SIS6T2.pdf";
import SIS6T2C from "pages/Cours/Spe/SI/src/Pdfs/SIS6T2C.pdf";
// Sections
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Pdfss from "./pages/Tech/Td";
import Pdf from "./pages/Tech/Pdf";
import Video from "./pages/Tech/Video";
//Pdf
import T01 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T01.pdf";
import T01C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T01C.pdf";
import T02 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T02.pdf";
import T02C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T02C.pdf";
import T03 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T03.pdf";
import T03C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T03C.pdf";
import T04 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T04.pdf";
import T04C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T04C.pdf";
import T05 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T05.pdf";
import T05C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T05C.pdf";
import T06 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T06.pdf";
import T06C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T06C.pdf";
import T07 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T07.pdf";
import T07C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T07C.pdf";
import T08 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T08.pdf";
import T08C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T08C.pdf";
import T09 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T09.pdf";
import T09C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T09C.pdf";
import T10 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T10.pdf";
import T10C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T10C.pdf";
import T11 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T11.pdf";
import T11C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T11C.pdf";
import T12 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T12.pdf";
import T12C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T12C.pdf";
import T13 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T13.pdf";
import T13C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T13C.pdf";
import T14 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T14.pdf";
import T14C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T14C.pdf";
import T15 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T15.pdf";
import T15C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T15C.pdf";
import T16 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T16.pdf";
import T16C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T16C.pdf";
import T17 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T17.pdf";
import T17C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T17C.pdf";
import T18 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T18.pdf";
import T18C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T18C.pdf";
import T19 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T19.pdf";
import T19C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T19C.pdf";
import T20 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T20.pdf";
import T20C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T20C.pdf";
import T21 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T21.pdf";
import T21C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T21C.pdf";
import T22 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T22.pdf";
import T22C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T22C.pdf";
import T23 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T23.pdf";
import T23C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T23C.pdf";
import T24 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T24.pdf";
import T24C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T24C.pdf";
import T25 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T25.pdf";
import T25C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T25C.pdf";
import T26 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T26.pdf";
import T26C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T26C.pdf";
import T27 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T27.pdf";
import T27C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T27C.pdf";
import T28 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T28.pdf";
import T28C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T28C.pdf";
import T29 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T29.pdf";
import T29C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T29C.pdf";
import T30 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T30.pdf";
import T30C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T30C.pdf";
import T31 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T31.pdf";
import T31C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T31C.pdf";
import T32 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T32.pdf";
import T32C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T32C.pdf";
import T33 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T33.pdf";
import T33C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T33C.pdf";
import T34 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T34.pdf";
import T34C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T34C.pdf";
import T35 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T35.pdf";
import T35C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T35C.pdf";
import T36 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T36.pdf";
import T36C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T36C.pdf";
import T37 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T37.pdf";
import T37C from "./pages/Cours/Sup/Math/src/Pdfs/Math/Tds/T37C.pdf";
import C01 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C01.pdf";
import C02 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C02.pdf";
import C03 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C03.pdf";
import C04 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C04.pdf";
import C05 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C05.pdf";
import C06 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C06.pdf";
import C07 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C07.pdf";
import C08 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C08.pdf";
import C09 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C09.pdf";
import C010 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C010.pdf";
import C011 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C011.pdf";
import C012 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C012.pdf";
import C013 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C013.pdf";
import C014 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C014.pdf";
import C015 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C015.pdf";
import C016 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C016.pdf";
import C017 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C017.pdf";
import C018 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C018.pdf";
import C019 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C019.pdf";
import C020 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C020.pdf";
import C021 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C021.pdf";
import C022 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C022.pdf";
import C023 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C023.pdf";
import C024 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C024.pdf";
import C025 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C025.pdf";
import C026 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C026.pdf";
import C027 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C027.pdf";
import C028 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C028.pdf";
import C029 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C029.pdf";
import C030 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C030.pdf";
import C031 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C031.pdf";
import C032 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C032.pdf";
import C033 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C033.pdf";
import C034 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C034.pdf";
import C035 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C035.pdf";
import C036 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C036.pdf";
import C037 from "./pages/Cours/Sup/Math/src/Pdfs/Math/Cours/C037.pdf";
import MS1 from "./pages/Cours/Spe/Math/src/Pdfs/MS1.pdf";
import MS2 from "./pages/Cours/Spe/Math/src/Pdfs/MS2.pdf";
import MS3 from "./pages/Cours/Spe/Math/src/Pdfs/MS3.pdf";
import MS4 from "./pages/Cours/Spe/Math/src/Pdfs/MS4.pdf";
import MS5 from "./pages/Cours/Spe/Math/src/Pdfs/MS5.pdf";
import MS6 from "./pages/Cours/Spe/Math/src/Pdfs/MS6.pdf";
import MS7 from "./pages/Cours/Spe/Math/src/Pdfs/MS7.pdf";
import MS8 from "./pages/Cours/Spe/Math/src/Pdfs/MS8.pdf";
import MS9 from "./pages/Cours/Spe/Math/src/Pdfs/MS9.pdf";
import MS10 from "./pages/Cours/Spe/Math/src/Pdfs/MS10.pdf";
import MS11 from "./pages/Cours/Spe/Math/src/Pdfs/MS11.pdf";
import MS12 from "./pages/Cours/Spe/Math/src/Pdfs/MS12.pdf";
import MS13 from "./pages/Cours/Spe/Math/src/Pdfs/MS13.pdf";
import MS14 from "./pages/Cours/Spe/Math/src/Pdfs/MS14.pdf";
import MS15 from "./pages/Cours/Spe/Math/src/Pdfs/MS15.pdf";
import MS16 from "./pages/Cours/Spe/Math/src/Pdfs/MS16.pdf";
import MS17 from "./pages/Cours/Spe/Math/src/Pdfs/MS17.pdf";
//ChimieSup
import CCSC1 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/1-Eau liquide et eau solvant.pdf";
import CCSC2 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/2-Réactions acido-basiques.pdf";
import CCSC3 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/3-Réaction de complexation.pdf";
import CCSC4 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/4-Réactions de précipitation.pdf";
import CCSC5 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/5-Réactions de réduction.pdf";
import CCSC6 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/6-Diagramme  potentiel-pH.pdf";
import TCSC2 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/2-TD.pdf";
import TCSC3 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/3-TD.pdf";
import TCSC4 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/4-TD.pdf";
import TCSC5 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/5-TD.pdf";
import TCSC6 from "pages/Cours/Sup/Chimie/src/Pdfs/CDS/6-TD.pdf";
//ChimieSpe
import SCSC1 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/Structure des molécules.pdf";
import SCSC2 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/Classification périodique.pdf";
import SCSC3 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/Atomistique.pdf";
import SCSC4 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/Cristallographie.pdf";
import TSCSC1 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/T1.pdf";
import TSCSC1C from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/T1C.pdf";
import TSCSC3 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/T3.pdf";
import TSCSC4 from "pages/Cours/Sup/Chimie/src/Pdfs/CDC/T4.pdf";
//------
import TherC1 from "pages/Cours/Spe/Chimie/src/Pdfs/Thermochimie/Aspet thermodynamique des réactions rédox.pdf";
import TTherC1 from "pages/Cours/Spe/Chimie/src/Pdfs/Thermochimie/T1.pdf";
import TherC2 from "pages/Cours/Spe/Chimie/src/Pdfs/Thermochimie/Déplacement des équilibres chimiques.pdf";
import TherC3 from "pages/Cours/Spe/Chimie/src/Pdfs/Electrochimie/ElectroChimie.pdf";
import TTherC3 from "pages/Cours/Spe/Chimie/src/Pdfs/Electrochimie/T1.pdf";
import TTherC3C from "pages/Cours/Spe/Chimie/src/Pdfs/Electrochimie/T1C.pdf";
//TDS---------------
import TS1 from "./pages/Cours/Spe/Math/src/Pdfs/TS1.pdf";
import TS2 from "./pages/Cours/Spe/Math/src/Pdfs/TS2.pdf";
import TS3 from "./pages/Cours/Spe/Math/src/Pdfs/TS3.pdf";
import TS4 from "./pages/Cours/Spe/Math/src/Pdfs/TS4.pdf";
import TS5 from "./pages/Cours/Spe/Math/src/Pdfs/TS5.pdf";
import TS6 from "./pages/Cours/Spe/Math/src/Pdfs/TS6.pdf";
import TS7 from "./pages/Cours/Spe/Math/src/Pdfs/TS7.pdf";
import TS8 from "./pages/Cours/Spe/Math/src/Pdfs/TS8.pdf";
import TS9 from "./pages/Cours/Spe/Math/src/Pdfs/TS9.pdf";
import TS10 from "./pages/Cours/Spe/Math/src/Pdfs/TS10.pdf";
import TS11 from "./pages/Cours/Spe/Math/src/Pdfs/TS11.pdf";
import TS12 from "./pages/Cours/Spe/Math/src/Pdfs/TS12.pdf";
import TS13 from "./pages/Cours/Spe/Math/src/Pdfs/TS13.pdf";
import TS14 from "./pages/Cours/Spe/Math/src/Pdfs/TS14.pdf";
import TS15 from "./pages/Cours/Spe/Math/src/Pdfs/TS15.pdf";
import TS16 from "./pages/Cours/Spe/Math/src/Pdfs/TS16.pdf";
import TS17 from "./pages/Cours/Spe/Math/src/Pdfs/TS17.pdf";
import TS1C from "./pages/Cours/Spe/Math/src/Pdfs/TS1C.pdf";
import TS2C from "./pages/Cours/Spe/Math/src/Pdfs/TS2C.pdf";
import TS3C from "./pages/Cours/Spe/Math/src/Pdfs/TS3C.pdf";
import TS4C from "./pages/Cours/Spe/Math/src/Pdfs/TS4C.pdf";
import TS5C from "./pages/Cours/Spe/Math/src/Pdfs/TS5C.pdf";
import TS6C from "./pages/Cours/Spe/Math/src/Pdfs/TS6C.pdf";
import TS7C from "./pages/Cours/Spe/Math/src/Pdfs/TS7C.pdf";
import TS8C from "./pages/Cours/Spe/Math/src/Pdfs/TS8C.pdf";
import TS9C from "./pages/Cours/Spe/Math/src/Pdfs/TS9C.pdf";
import TS10C from "./pages/Cours/Spe/Math/src/Pdfs/TS10C.pdf";
import TS11C from "./pages/Cours/Spe/Math/src/Pdfs/TS11C.pdf";
import TS12C from "./pages/Cours/Spe/Math/src/Pdfs/TS12C.pdf";
import TS13C from "./pages/Cours/Spe/Math/src/Pdfs/TS13C.pdf";
import TS14C from "./pages/Cours/Spe/Math/src/Pdfs/TS14C.pdf";
import TS15C from "./pages/Cours/Spe/Math/src/Pdfs/TS15C.pdf";
import TS16C from "./pages/Cours/Spe/Math/src/Pdfs/TS16C.pdf";
import TS17C from "./pages/Cours/Spe/Math/src/Pdfs/TS17C.pdf";
import SIF from "./pages/Formations/SI";
import InfoF from "./pages/Formations/Info";
import PbPSP from "./pages/Pbs/Physique/Pspe";
import CbPSP from "./pages/Pbs/Chimie/Cspe";

//Cours SUP
//Mecanique
import CP1 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP1.pdf";
import CP2 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP2.pdf";
import CP3 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP3.pdf";
import CP4 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP4.pdf";
import CP5 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP5.pdf";
import CP6 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP6.pdf";
import CP7 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/CP7.pdf";
import TP1 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T1.pdf";
import TP2 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T2.pdf";
import TP3 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T3.pdf";
import TP4 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T4.pdf";
import TP5 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T5.pdf";
import TP6 from "pages/Cours/Sup/Physique/src/Pdfs/Mecanique/T6.pdf";

//Thermo
import CST1 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C1.pdf";
import CST2 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C2.pdf";
import CST3 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C3.pdf";
import CST4 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C4.pdf";
import CST5 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C5.pdf";
import CST6 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/C6.pdf";
import TST1 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T1.pdf";
import TST2 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T2.pdf";
import TST3 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T3.pdf";
import TST4 from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T4.pdf";
import TST1C from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T1C.pdf";
import TST2C from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T2C.pdf";
import TST3C from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T3C.pdf";
import TST4C from "pages/Cours/Sup/Physique/src/Pdfs/Thermo/T4C.pdf";

//Electronique

import CSE1 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C1.pdf";
import CSE2 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C2.pdf";
import CSE3 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C3.pdf";
import CSE4 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C4.pdf";
import CSE5 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C5.pdf";
import CSE6 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C6.pdf";
import CSE7 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C7.pdf";
import CSE8 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C8.pdf";
import CSE9 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/C9.pdf";
import TSE1 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T1.pdf";
import TSE2 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T2.pdf";
import TSE3 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T3.pdf";
import TSE4 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T4.pdf";
import TSE5 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T5.pdf";
import TSE6 from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T6.pdf";
import TSE1C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T1C.pdf";
import TSE2C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T2C.pdf";
import TSE3C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T3C.pdf";
import TSE4C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T4C.pdf";
import TSE5C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T5C.pdf";
import TSE6C from "pages/Cours/Sup/Physique/src/Pdfs/Electrocinetique/T6C.pdf";

//Optique

import CSO1 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/C1.pdf";
import CSO2 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/C2.pdf";
import CSO3 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/C3.pdf";
import TSO1 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T1.pdf";
import TSO2 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T2.pdf";
import TSO3 from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T3.pdf";
import TSO1C from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T1C.pdf";
import TSO2C from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T2C.pdf";
import TSO3C from "pages/Cours/Sup/Physique/src/Pdfs/Opt/T3C.pdf";

//Electrostatique

import CSEM1 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/C1.pdf";
import CSEM2 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/C2.pdf";
import CSEM3 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/C3.pdf";
import CSEM4 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/C4.pdf";
import TSEM1 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T1.pdf";
import TSEM2 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T2.pdf";
import TSEM3 from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T3.pdf";
import TSEM1C from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T1C.pdf";
import TSEM2C from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T2C.pdf";
import TSEM3C from "pages/Cours/Sup/Physique/src/Pdfs/Electrostatique/T3C.pdf";

//Quantique
import CSQ1 from "pages/Cours/Sup/Physique/src/Pdfs/Quantique/C1.pdf";
import TSQ1 from "pages/Cours/Sup/Physique/src/Pdfs/Quantique/T1.pdf";
import TSQ1C from "pages/Cours/Sup/Physique/src/Pdfs/Quantique/T1C.pdf";
//CoursSpe
//Mecanique Solide
import C5 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/C5.pdf";
import C1 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/C1.pdf";
import C2 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/C2.pdf";
import C3 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/C3.pdf";
import C4 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/C4.pdf";
import TCS1 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/T12.pdf";
import TCS2 from "pages/Cours/Spe/Physique/src/Pdfs/MecS/T345.pdf";
//Electronique
import CE1 from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/C1.pdf";
import CE2 from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/C2.pdf";
import TCE1 from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/T1.pdf";
import TCE1C from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/T1C.pdf";
import TCE2 from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/T2.pdf";
import TCE2C from "pages/Cours/Spe/Physique/src/Pdfs/Electronique/T2C.pdf";
//Ondes
import CO5 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/C5.pdf";
import CO1 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/C1.pdf";
import CO2 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/C2.pdf";
import CO3 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/C3.pdf";
import CO4 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/C4.pdf";
import TCO1 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/T1.pdf";
import TCO2 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/T2.pdf";
import TCO3 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/T3.pdf";
import TCO4 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/T4.pdf";
import TCO5 from "pages/Cours/Spe/Physique/src/Pdfs/Onde/T5.pdf";
//Ondulatoire

import CON5 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/C5.pdf";
import CON1 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/C1.pdf";
import CON2 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/C2.pdf";
import CON3 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/C3.pdf";
import CON4 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/C4.pdf";
import TCOO1 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/T1.pdf";
import TCOO2 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/T2.pdf";
import TCOO3 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/T3.pdf";
import TCOO4 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/T4.pdf";
import TCOO5 from "pages/Cours/Spe/Physique/src/Pdfs/Ondulatoir/T5.pdf";

//ThermoSpe

import CT1 from "pages/Cours/Spe/Physique/src/Pdfs/Thermos/C1.pdf";
import CT2 from "pages/Cours/Spe/Physique/src/Pdfs/Thermos/C2.pdf";
import TCT1 from "pages/Cours/Spe/Physique/src/Pdfs/Thermos/T1.pdf";
import TCT2 from "pages/Cours/Spe/Physique/src/Pdfs/Thermos/T2.pdf";
//Electromagnetisme

import CEM5 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C5.pdf";
import CEM1 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C1.pdf";
import CEM2 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C2.pdf";
import CEM3 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C3.pdf";
import CEM4 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C4.pdf";
import CEM6 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C6.pdf";
import CEM7 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/C7.pdf";
import TEM1 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T1.pdf";
import TEM2 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T2.pdf";
import TEM2C from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T2C.pdf";
import TEM3 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T3.pdf";
import TEM4 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T4.pdf";
import TEM5 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T5.pdf";
import TEM6 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T6.pdf";
import TEM7 from "pages/Cours/Spe/Physique/src/Pdfs/électromagnétisme/T7.pdf";
const routes = [
  {
    name: "Cours & Td",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "Maths",
        //description: "Analyse, Algebre, Proba",
        route: "/pages/Cours/Math",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Sup/Math",
            dropdown: true,
            component: <MathSup />,
            collapse: [
              {
                name: "Sup",
                route: "/pages/Cours/Sup/Math",
                dropdown: true,
                component: <MathSup />,
              },
              {
                name: "Sup",
                route: "/pages/Cours/Math",
                dropdown: true,
                component: <MathC />,
              },
              {
                name: "",
                route: "/author",
                dropdown: true,
                component: <Author />,
              },
              {
                name: "",
                route: "/404",
                component: <NotFound />,
              },
              {
                name: "Logique",
                route: "/Cours/Sup/Math/Cours/Sup-M1",
                component: <Pdf C={C01} label1="Math" label2="Logique" />,
              },
              {
                name: "Ensembles, relations, applications",
                route: "/Cours/Sup/Math/Cours/Sup-M2",
                component: (
                  <Pdf C={C02} label1="Math" label2="Ensembles, relations, applications" />
                ),
              },
              {
                name: "",
                route: "/SignIn",
                component: <SignIn />,
              },
              {
                name: "",
                route: "/pages/Contact",
                component: <ContactUs />,
              },
              {
                name: "Trigonométrie",
                route: "/Cours/Sup/Math/Cours/Sup-M3",
                component: <Pdf C={C03} label1="Math" label2="Trigonométrie" />,
              },
              {
                name: "Sigma et Pi. Le binôme de Newton",
                route: "/Cours/Sup/Math/Cours/Sup-M4",
                component: <Pdf C={C04} label1="Math" label2="Sigma et Pi. Le binôme de Newton" />,
              },
              {
                name: "Inégalités",
                route: "/Cours/Sup/Math/Cours/Sup-M5",
                component: <Pdf C={C05} label1="Math" label2="Inégalités" />,
              },
              {
                name: "Petits systèmes d’équations linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-M6",
                component: (
                  <Pdf C={C06} label1="Math" label2="Petits systèmes d’équations linéaires" />
                ),
              },
              {
                name: "Les nombres complexes",
                route: "/Cours/Sup/Math/Cours/Sup-M7",
                component: <Pdf C={C07} label1="Math" label2="Les nombres complexes" />,
              },
              {
                name: "Compléments sur les fonctions",
                route: "/Cours/Sup/Math/Cours/Sup-M8",
                component: <Pdf C={C08} label1="Math" label2="Compléments sur les fonctions" />,
              },
              {
                name: "Fonctions de référence",
                route: "/Cours/Sup/Math/Cours/Sup-M9",
                component: <Pdf C={C09} label1="Math" label2="Fonctions de référence" />,
              },
              {
                name: "Calculs de primitives et d’intégrales",
                route: "/Cours/Sup/Math/Cours/Sup-M10",
                component: (
                  <Pdf C={C010} label1="Math" label2="Calculs de primitives et d’intégrales" />
                ),
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-M11",
                component: (
                  <Pdf C={C011} label1="Math" label2="Equations différentielles linéaires" />
                ),
              },
              {
                name: "L’ensemble des nombres réels",
                route: "/Cours/Sup/Math/Cours/Sup-M12",
                component: <Pdf C={C012} label1="Math" label2="L’ensemble des nombres réels" />,
              },
              {
                name: "Suites réelles, suites complexes",
                route: "/Cours/Sup/Math/Cours/Sup-M13",
                component: <Pdf C={C013} label1="Math" label2="Suites réelles, suites complexes" />,
              },
              {
                name: "Limite d’une fonction en un point. Continuité en un point",
                route: "/Cours/Sup/Math/Cours/Sup-M14",
                component: (
                  <Pdf
                    C={C014}
                    label1="Math"
                    label2="Limite d’une fonction en un point. Continuité en un point"
                  />
                ),
              },
              {
                name: "Continuité sur un intervalle",
                route: "/Cours/Sup/Math/Cours/Sup-M15",
                component: <Pdf C={C015} label1="Math" label2="Continuité sur un intervalle" />,
              },
              {
                name: "Dérivation",
                route: "/Cours/Sup/Math/Cours/Sup-M16",
                component: <Pdf C={C016} label1="Math" label2="Dérivation" />,
              },
              {
                name: "Fonctions convexes",
                route: "/Cours/Sup/Math/Cours/Sup-M17",
                component: <Pdf C={C017} label1="Math" label2="Fonctions convexes" />,
              },
              {
                name: "Arithmétique dans $mathbb{Z}$",
                route: "/Cours/Sup/Math/Cours/Sup-M18",
                component: <Pdf C={C018} label1="Math" label2="Arithmétique dans $mathbb{Z}$" />,
              },
              {
                name: "Structures algébriques",
                route: "/Cours/Sup/Math/Cours/Sup-M19",
                component: <Pdf C={C019} label1="Math" label2="Structures algébriques" />,
              },
              {
                name: "Matrices (1 ère partie)",
                route: "/Cours/Sup/Math/Cours/Sup-M20",
                component: <Pdf C={C020} label1="Math" label2="Matrices (1 ère partie)" />,
              },
              {
                name: "Polynômes",
                route: "/Cours/Sup/Math/Cours/Sup-M21",
                component: <Pdf C={C021} label1="Math" label2="Polynômes" />,
              },
              {
                name: "Fractions rationnelles",
                route: "/Cours/Sup/Math/Cours/Sup-M22",
                component: <Pdf C={C022} label1="Math" label2="Fractions rationnelles" />,
              },
              {
                name: "Comparaison des suites en l’infinis",
                route: "/Cours/Sup/Math/Cours/Sup-M23",
                component: (
                  <Pdf C={C023} label1="Math" label2="Comparaison des suites en l’infinis" />
                ),
              },
              {
                name: "Comparaison des fonctions en un point",
                route: "/Cours/Sup/Math/Cours/Sup-M24",
                component: (
                  <Pdf C={C024} label1="Math" label2="Comparaison des fonctions en un point" />
                ),
              },
              {
                name: "Espaces vectoriels",
                route: "/Cours/Sup/Math/Cours/Sup-M25",
                component: <Pdf C={C025} label1="Math" label2="Espaces vectoriels" />,
              },
              {
                name: "Dimension d’un espace vectoriel",
                route: "/Cours/Sup/Math/Cours/Sup-M26",
                component: <Pdf C={C026} label1="Math" label2="Dimension d’un espace vectoriel" />,
              },
              {
                name: "Matrices (2ème partie)",
                route: "/Cours/Sup/Math/Cours/Sup-M27",
                component: <Pdf C={C027} label1="Math" label2="Matrices (2ème partie)" />,
              },
              {
                name: "Le groupe symétrique",
                route: "/Cours/Sup/Math/Cours/Sup-M28",
                component: <Pdf C={C028} label1="Math" label2="Le groupe symétrique" />,
              },
              {
                name: "Déterminants",
                route: "/Cours/Sup/Math/Cours/Sup-M29",
                component: <Pdf C={C029} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Intégration sur un segment",
                route: "/Cours/Sup/Math/Cours/Sup-M30",
                component: <Pdf C={C030} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Séries numériques",
                route: "/Cours/Sup/Math/Cours/Sup-M31",
                component: <Pdf C={C031} label1="Math" label2="Séries numériques" />,
              },
              {
                name: "Familles sommables",
                route: "/Cours/Sup/Math/Cours/Sup-M32",
                component: <Pdf C={C032} label1="Math" label2="Familles sommables" />,
              },
              {
                name: "Produits scalaires. Espaces préhilbertiens, espaces euclidiens",
                route: "/Cours/Sup/Math/Cours/Sup-M33",
                component: (
                  <Pdf
                    C={C033}
                    label1="Math"
                    label2="Produits scalaires. Espaces préhilbertiens, espaces euclidiens"
                  />
                ),
              },
              {
                name: "Dénombrements",
                route: "/Cours/Sup/Math/Cours/Sup-M34",
                component: <Pdf C={C034} label1="Math" label2="Dénombrements" />,
              },
              {
                name: "Probabilités",
                route: "/Cours/Sup/Math/Cours/Sup-M35",
                component: <Pdf C={C035} label1="Math" label2="Probabilités" />,
              },
              {
                name: "Variables aléatoires",
                route: "/Cours/Sup/Math/Cours/Sup-M36",
                component: <Pdf C={C036} label1="Math" label2="Variables aléatoires" />,
              },
              {
                name: "Fonctions de deux variables",
                route: "/Cours/Sup/Math/Cours/Sup-M37",
                component: <Pdf C={C037} label1="Math" label2="Fonctions de deux variables" />,
              },
              //-------------------------------Td---------------------------------------------------
              {
                name: "Logique",
                route: "/Cours/Sup/Math/Cours/Sup-T1",
                component: <Pdfss C={T01} T={T01C} label1="Math" label2="Logique" />,
              },
              {
                name: "Ensembles, relations, applications",
                route: "/Cours/Sup/Math/Cours/Sup-T2",
                component: (
                  <Pdfss
                    C={T02}
                    T={T02C}
                    label1="Math"
                    label2="Ensembles, relations, applications"
                  />
                ),
              },
              {
                name: "Trigonométrie",
                route: "/Cours/Sup/Math/Cours/Sup-T3",
                component: <Pdfss C={T03} T={T03C} label1="Math" label2="Trigonométrie" />,
              },
              {
                name: "Sigma et Pi. Le binôme de Newton",
                route: "/Cours/Sup/Math/Cours/Sup-T4",
                component: (
                  <Pdfss C={T04} T={T04C} label1="Math" label2="Sigma et Pi. Le binôme de Newton" />
                ),
              },
              {
                name: "Inégalités",
                route: "/Cours/Sup/Math/Cours/Sup-T5",
                component: <Pdfss C={T05} T={T05C} label1="Math" label2="Inégalités" />,
              },
              {
                name: "Petits systèmes d’équations linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-T6",
                component: (
                  <Pdfss
                    C={T06}
                    T={T06C}
                    label1="Math"
                    label2="Petits systèmes d’équations linéaires"
                  />
                ),
              },
              {
                name: "Les nombres complexes",
                route: "/Cours/Sup/Math/Cours/Sup-T7",
                component: <Pdfss C={T07} T={T07C} label1="Math" label2="Les nombres complexes" />,
              },
              {
                name: "Compléments sur les fonctions",
                route: "/Cours/Sup/Math/Cours/Sup-T8",
                component: (
                  <Pdfss C={T08} T={T08C} label1="Math" label2="Compléments sur les fonctions" />
                ),
              },
              {
                name: "Fonctions de référence",
                route: "/Cours/Sup/Math/Cours/Sup-T9",
                component: <Pdfss C={T09} T={T09C} label1="Math" label2="Fonctions de référence" />,
              },
              {
                name: "Calculs de primitives et d’intégrales",
                route: "/Cours/Sup/Math/Cours/Sup-T10",
                component: (
                  <Pdfss
                    C={T10}
                    T={T10C}
                    label1="Math"
                    label2="Calculs de primitives et d’intégrales"
                  />
                ),
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-T11",
                component: (
                  <Pdfss
                    C={T11}
                    T={T11C}
                    label1="Math"
                    label2="Equations différentielles linéaires"
                  />
                ),
              },
              {
                name: "L’ensemble des nombres réels",
                route: "/Cours/Sup/Math/Cours/Sup-T12",
                component: (
                  <Pdfss C={T12} T={T12C} label1="Math" label2="L’ensemble des nombres réels" />
                ),
              },
              {
                name: "Suites réelles, suites complexes",
                route: "/Cours/Sup/Math/Cours/Sup-T13",
                component: (
                  <Pdfss C={T13} T={T13C} label1="Math" label2="Suites réelles, suites complexes" />
                ),
              },
              {
                name: "Limite d’une fonction en un point. Continuité en un point",
                route: "/Cours/Sup/Math/Cours/Sup-T14",
                component: (
                  <Pdfss
                    C={T14}
                    T={T14C}
                    label1="Math"
                    label2="Limite d’une fonction en un point. Continuité en un point"
                  />
                ),
              },
              {
                name: "Continuité sur un intervalle",
                route: "/Cours/Sup/Math/Cours/Sup-T15",
                component: (
                  <Pdfss C={T15} T={T15C} label1="Math" label2="Continuité sur un intervalle" />
                ),
              },
              {
                name: "Dérivation",
                route: "/Cours/Sup/Math/Cours/Sup-T16",
                component: <Pdfss C={T16} T={T16C} label1="Math" label2="Dérivation" />,
              },
              {
                name: "Fonctions convexes",
                route: "/Cours/Sup/Math/Cours/Sup-T17",
                component: <Pdfss C={T17} T={T17C} label1="Math" label2="Fonctions convexes" />,
              },
              {
                name: "Arithmétique dans $mathbb{Z}$",
                route: "/Cours/Sup/Math/Cours/Sup-T18",
                component: (
                  <Pdfss C={T18} T={T18C} label1="Math" label2="Arithmétique dans $mathbb{Z}$" />
                ),
              },
              {
                name: "Structures algébriques",
                route: "/Cours/Sup/Math/Cours/Sup-T19",
                component: <Pdfss C={T19} T={T19C} label1="Math" label2="Structures algébriques" />,
              },
              {
                name: "Matrices (1 ère partie)",
                route: "/Cours/Sup/Math/Cours/Sup-T20",
                component: (
                  <Pdfss C={T20} T={T20C} label1="Math" label2="Matrices (1 ère partie)" />
                ),
              },
              {
                name: "Polynômes",
                route: "/Cours/Sup/Math/Cours/Sup-T21",
                component: <Pdfss C={T21} T={T21C} label1="Math" label2="Polynômes" />,
              },
              {
                name: "Fractions rationnelles",
                route: "/Cours/Sup/Math/Cours/Sup-T22",
                component: <Pdfss C={T22} T={T22C} label1="Math" label2="Fractions rationnelles" />,
              },
              {
                name: "Comparaison des suites en l’infinis",
                route: "/Cours/Sup/Math/Cours/Sup-T23",
                component: (
                  <Pdfss
                    C={T23}
                    T={T23C}
                    label1="Math"
                    label2="Comparaison des suites en l’infinis"
                  />
                ),
              },
              {
                name: "Comparaison des fonctions en un point",
                route: "/Cours/Sup/Math/Cours/Sup-T24",
                component: (
                  <Pdfss
                    C={T24}
                    T={T24C}
                    label1="Math"
                    label2="Comparaison des fonctions en un point"
                  />
                ),
              },
              {
                name: "Espaces vectoriels",
                route: "/Cours/Sup/Math/Cours/Sup-T25",
                component: <Pdfss C={T25} T={T25C} label1="Math" label2="Espaces vectoriels" />,
              },
              {
                name: "Dimension d’un espace vectoriel",
                route: "/Cours/Sup/Math/Cours/Sup-T26",
                component: (
                  <Pdfss C={T26} T={T26C} label1="Math" label2="Dimension d’un espace vectoriel" />
                ),
              },
              {
                name: "Matrices (2ème partie)",
                route: "/Cours/Sup/Math/Cours/Sup-T27",
                component: <Pdfss C={T27} T={T27C} label1="Math" label2="Matrices (2ème partie)" />,
              },
              {
                name: "Le groupe symétrique",
                route: "/Cours/Sup/Math/Cours/Sup-T28",
                component: <Pdfss C={T28} T={T28C} label1="Math" label2="Le groupe symétrique" />,
              },
              {
                name: "Déterminants",
                route: "/Cours/Sup/Math/Cours/Sup-T29",
                component: <Pdfss C={T29} T={T29C} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Intégration sur un segment",
                route: "/Cours/Sup/Math/Cours/Sup-T30",
                component: <Pdfss C={T30} T={T30C} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Séries numériques",
                route: "/Cours/Sup/Math/Cours/Sup-T31",
                component: <Pdfss C={T31} T={T31C} label1="Math" label2="Séries numériques" />,
              },
              {
                name: "Familles sommables",
                route: "/Cours/Sup/Math/Cours/Sup-T32",
                component: <Pdfss C={T32} T={T32C} label1="Math" label2="Familles sommables" />,
              },
              {
                name: "Produits scalaires. Espaces préhilbertiens, espaces euclidiens",
                route: "/Cours/Sup/Math/Cours/Sup-T33",
                component: (
                  <Pdfss
                    C={T33}
                    T={T33C}
                    label1="Math"
                    label2="Produits scalaires. Espaces préhilbertiens, espaces euclidiens"
                  />
                ),
              },
              {
                name: "Dénombrements",
                route: "/Cours/Sup/Math/Cours/Sup-T34",
                component: <Pdfss C={T34} T={T34C} label1="Math" label2="Dénombrements" />,
              },
              {
                name: "Probabilités",
                route: "/Cours/Sup/Math/Cours/Sup-T35",
                component: <Pdfss C={T35} T={T35C} label1="Math" label2="Probabilités" />,
              },
              {
                name: "Variables aléatoires",
                route: "/Cours/Sup/Math/Cours/Sup-M36",
                component: <Pdfss C={T36} T={T36C} label1="Math" label2="Variables aléatoires" />,
              },
              {
                name: "Fonctions de deux variables",
                route: "/Cours/Sup/Math/Cours/Sup-M37",
                component: (
                  <Pdfss C={T37} T={T37C} label1="Math" label2="Fonctions de deux variables" />
                ),
              },
              //#------------------video--------------------
              {
                name: "Ensembles, relations, applications",
                route: "/Cours/Sup/Math/Cours/Sup-V2",
                component: (
                  <Video
                    Y={"FHriYEb9I1k"}
                    label1="Math"
                    label2="Ensembles, relations, applications"
                  />
                ),
              },
              {
                name: "Logique",
                route: "/Cours/Sup/Math/Cours/Sup-V1",
                component: <Video Y={"gM9STXnS1_w"} label1="Math" label2="Logique" />,
              },
              {
                name: "Trigonométrie",
                route: "/Cours/Sup/Math/Cours/Sup-V3",
                component: <Video Y={"DTEhNcColF4"} label1="Math" label2="Trigonométrie" />,
              },
              {
                name: "Sigma et Pi. Le binôme de Newton",
                route: "/Cours/Sup/Math/Cours/Sup-V4",
                component: (
                  <Video
                    Y={"WAfXv5PyJKY"}
                    label1="Math"
                    label2="Sigma et Pi. Le binôme de Newton"
                  />
                ),
              },
              {
                name: "Inégalités",
                route: "/Cours/Sup/Math/Cours/Sup-V5",
                component: <Video Y={"bCbTib7nhWY"} label1="Math" label2="Inégalités" />,
              },
              {
                name: "Petits systèmes d’équations linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-V6",
                component: (
                  <Video
                    Y={"LIc0loIdsV0"}
                    label1="Math"
                    label2="Petits systèmes d’équations linéaires"
                  />
                ),
              },
              {
                name: "Les nombres complexes",
                route: "/Cours/Sup/Math/Cours/Sup-V7",
                component: <Video Y={"vOLZ8wLWIbY"} label1="Math" label2="Les nombres complexes" />,
              },
              {
                name: "Compléments sur les fonctions",
                route: "/Cours/Sup/Math/Cours/Sup-V8",
                component: (
                  <Video Y={"t-sC_igJ8no"} label1="Math" label2="Compléments sur les fonctions" />
                ),
              },
              {
                name: "Fonctions de référence",
                route: "/Cours/Sup/Math/Cours/Sup-V9",
                component: (
                  <Video Y={"0Hj7XbNhNI4"} label1="Math" label2="Fonctions de référence" />
                ),
              },
              {
                name: "Calculs de primitives et d’intégrales",
                route: "/Cours/Sup/Math/Cours/Sup-V10",
                component: (
                  <Video
                    Y={"jheiFrZO05o"}
                    label1="Math"
                    label2="Calculs de primitives et d’intégrales"
                  />
                ),
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Sup/Math/Cours/Sup-V11",
                component: (
                  <Video
                    Y={"pWcFU0h-GcE"}
                    label1="Math"
                    label2="Equations différentielles linéaires"
                  />
                ),
              },
              {
                name: "L’ensemble des nombres réels",
                route: "/Cours/Sup/Math/Cours/Sup-V12",
                component: (
                  <Video Y={"cmHJUAzAA8Q"} label1="Math" label2="L’ensemble des nombres réels" />
                ),
              },
              {
                name: "Suites réelles, suites complexes",
                route: "/Cours/Sup/Math/Cours/Sup-V13",
                component: (
                  <Video
                    Y={"WvkpPC6vLFA"}
                    label1="Math"
                    label2="Suites réelles, suites complexes"
                  />
                ),
              },
              {
                name: "Limite d’une fonction en un point. Continuité en un point",
                route: "/Cours/Sup/Math/Cours/Sup-V14",
                component: (
                  <Video
                    Y={"8jhV6Wl8bos"}
                    label1="Math"
                    label2="Limite d’une fonction en un point. Continuité en un point"
                  />
                ),
              },
              {
                name: "Continuité sur un intervalle",
                route: "/Cours/Sup/Math/Cours/Sup-V15",
                component: (
                  <Video Y={"LMSLj3pgYeI"} label1="Math" label2="Continuité sur un intervalle" />
                ),
              },
              {
                name: "Dérivation",
                route: "/Cours/Sup/Math/Cours/Sup-V16",
                component: <Video Y={"xTd2XNUfS5A"} label1="Math" label2="Dérivation" />,
              },
              {
                name: "Fonctions convexes",
                route: "/Cours/Sup/Math/Cours/Sup-V17",
                component: <Video Y={"BDPcEXu852I"} label1="Math" label2="Fonctions convexes" />,
              },
              {
                name: "Arithmétique dans $mathbb{Z}$",
                route: "/Cours/Sup/Math/Cours/Sup-V18",
                component: (
                  <Video Y={"Ut856DAkdf8"} label1="Math" label2="Arithmétique dans $mathbb{Z}$" />
                ),
              },
              {
                name: "Structures algébriques",
                route: "/Cours/Sup/Math/Cours/Sup-V19",
                component: (
                  <Video Y={"baLCGbGHHhw"} label1="Math" label2="Structures algébriques" />
                ),
              },
              {
                name: "Matrices (1 ère partie)",
                route: "/Cours/Sup/Math/Cours/Sup-V20",
                component: (
                  <Video Y={"m2dRuyKgIHA"} label1="Math" label2="Matrices (1 ère partie)" />
                ),
              },
              {
                name: "Polynômes",
                route: "/Cours/Sup/Math/Cours/Sup-V21",
                component: <Video Y={"bUgULKRezPM"} label1="Math" label2="Polynômes" />,
              },
              {
                name: "Fractions rationnelles",
                route: "/Cours/Sup/Math/Cours/Sup-V22",
                component: (
                  <Video Y={"Z86gfJOKgBg"} label1="Math" label2="Fractions rationnelles" />
                ),
              },
              {
                name: "Comparaison des suites en l’infinis",
                route: "/Cours/Sup/Math/Cours/Sup-V23",
                component: (
                  <Video
                    Y={"jdLXKJVT00c"}
                    label1="Math"
                    label2="Comparaison des suites en l’infinis"
                  />
                ),
              },
              {
                name: "Comparaison des fonctions en un point",
                route: "/Cours/Sup/Math/Cours/Sup-V24",
                component: (
                  <Video
                    Y={"B4luaPqSVJs"}
                    label1="Math"
                    label2="Comparaison des fonctions en un point"
                  />
                ),
              },
              {
                name: "Espaces vectoriels",
                route: "/Cours/Sup/Math/Cours/Sup-V25",
                component: <Video Y={"hJnbt2Cu1Es"} label1="Math" label2="Espaces vectoriels" />,
              },
              {
                name: "Dimension d’un espace vectoriel",
                route: "/Cours/Sup/Math/Cours/Sup-V26",
                component: (
                  <Video Y={"VeZvxjWa2XY"} label1="Math" label2="Dimension d’un espace vectoriel" />
                ),
              },
              {
                name: "Matrices (2ème partie)",
                route: "/Cours/Sup/Math/Cours/Sup-V27",
                component: (
                  <Video Y={"0xIylDfxavc"} label1="Math" label2="Matrices (2ème partie)" />
                ),
              },
              {
                name: "Le groupe symétrique",
                route: "/Cours/Sup/Math/Cours/Sup-V28",
                component: <Video Y={"cmf0OoMF6f4"} label1="Math" label2="Le groupe symétrique" />,
              },
              {
                name: "Déterminants",
                route: "/Cours/Sup/Math/Cours/Sup-V29",
                component: <Video Y={"CAOH3N5DVHw"} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Intégration sur un segment",
                route: "/Cours/Sup/Math/Cours/Sup-V30",
                component: <Video Y={"ur9smWN2HFg"} label1="Math" label2="Déterminants" />,
              },
              {
                name: "Séries numériques",
                route: "/Cours/Sup/Math/Cours/Sup-V31",
                component: <Video Y={"50jEoxZi8wA"} label1="Math" label2="Séries numériques" />,
              },
              {
                name: "Familles sommables",
                route: "/Cours/Sup/Math/Cours/Sup-V32",
                component: <Video Y={"ZaEKj78PDE0"} label1="Math" label2="Familles sommables" />,
              },
              {
                name: "Produits scalaires. Espaces préhilbertiens, espaces euclidiens",
                route: "/Cours/Sup/Math/Cours/Sup-V33",
                component: (
                  <Video
                    Y={"Bvexb3DjbTk"}
                    label1="Math"
                    label2="Produits scalaires. Espaces préhilbertiens, espaces euclidiens"
                  />
                ),
              },
              {
                name: "Dénombrements",
                route: "/Cours/Sup/Math/Cours/Sup-V34",
                component: <Video Y={"rat-4o4OzcM"} label1="Math" label2="Dénombrements" />,
              },
              {
                name: "Probabilités",
                route: "/Cours/Sup/Math/Cours/Sup-V35",
                component: <Video Y={"4PAECijzQuo"} label1="Math" label2="Probabilités" />,
              },
              {
                name: "Variables aléatoires",
                route: "/Cours/Sup/Math/Cours/Sup-V36",
                component: <Video Y={"w_lQPSoA1wY"} label1="Math" label2="Variables aléatoires" />,
              },
              {
                name: "Fonctions de deux variables",
                route: "/Cours/Sup/Math/Cours/Sup-V37",
                component: (
                  <Video Y={"S45T4tBjPRE"} label1="Math" label2="Fonctions de deux variables" />
                ),
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Spe/Math",
            dropdown: true,
            component: <MathSpe />,
            collapse: [
              {
                name: "Spe",
                route: "/pages/Cours/Spe/Math",
                dropdown: true,
                component: <MathSpe />,
              },
              {
                name: "Compléments d’algèbre",
                route: "/Cours/Spe/Math/Cours/Spe-M1",
                component: <Pdf C={MS1} label1="Math" label2="Compléments d’algèbre" />,
              },
              {
                name: "Réduction des endomorphismes et des matrices carrées",
                route: "/Cours/Spe/Math/Cours/Spe-M2",
                component: (
                  <Pdf
                    C={MS2}
                    label1="Math"
                    label2="Réduction des endomorphismes et des matrices carrées"
                  />
                ),
              },
              {
                name: "Espaces euclidiens",
                route: "/Cours/Spe/Math/Cours/Spe-M3",
                component: <Pdf C={MS3} label1="Math" label2="Espaces euclidiens" />,
              },
              {
                name: "Topologie des espaces vectoriels normés",
                route: "/Cours/Spe/Math/Cours/Spe-M4",
                component: (
                  <Pdf C={MS4} label1="Math" label2="Topologie des espaces vectoriels normés" />
                ),
              },
              {
                name: "Séries numériques et vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-M5",
                component: <Pdf C={MS5} label1="Math" label2="Séries numériques et vectorielles" />,
              },
              {
                name: "Suites et séries de fonctions",
                route: "/Cours/Spe/Math/Cours/Spe-M6",
                component: <Pdf C={MS6} label1="Math" label2="Suites et séries de fonctions" />,
              },
              {
                name: "Séries entières",
                route: "/Cours/Spe/Math/Cours/Spe-M7",
                component: <Pdf C={MS7} label1="Math" label2="Séries entières" />,
              },
              {
                name: "Fonctions vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-M8",
                component: <Pdf C={MS8} label1="Math" label2="Fonctions vectorielles" />,
              },
              {
                name: "Intégration sur un intervalle quelconque",
                route: "/Cours/Spe/Math/Cours/Spe-M9",
                component: (
                  <Pdf C={MS9} label1="Math" label2="Intégration sur un intervalle quelconque" />
                ),
              },
              {
                name: "Suites et séries d’intégrales",
                route: "/Cours/Spe/Math/Cours/Spe-M10",
                component: <Pdf C={MS10} label1="Math" label2="Suites et séries d’intégrales" />,
              },
              {
                name: "Intégrales dépendant d’un paramètre",
                route: "/Cours/Spe/Math/Cours/Spe-M11",
                component: (
                  <Pdf C={MS11} label1="Math" label2="Intégrales dépendant d’un paramètre" />
                ),
              },
              {
                name: "Ensembles dénombrables",
                route: "/Cours/Spe/Math/Cours/Spe-M12",
                component: <Pdf C={MS12} label1="Math" label2="Ensembles dénombrables" />,
              },
              {
                name: "Probabilités discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-M13",
                component: <Pdf C={MS13} label1="Math" label2="Probabilités discrètes" />,
              },
              {
                name: "Variables aléatoires discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-M14",
                component: <Pdf C={MS14} label1="Math" label2="Variables aléatoires discrètes" />,
              },
              {
                name: "Suites et séries matricielles",
                route: "/Cours/Spe/Math/Cours/Spe-M15",
                component: <Pdf C={MS15} label1="Math" label2="Suites et séries matricielles" />,
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Spe/Math/Cours/Spe-M16",
                component: (
                  <Pdf C={MS16} label1="Math" label2="Equations différentielles linéaires" />
                ),
              },
              {
                name: "Fonctions de plusieurs variables",
                route: "/Cours/Spe/Math/Cours/Spe-M17",
                component: <Pdf C={MS17} label1="Math" label2="Fonctions de plusieurs variables" />,
              },
              //-------------------------------Td---------------------------------------------------
              {
                name: "Compléments d’algèbre",
                route: "/Cours/Spe/Math/Cours/Spe-T1",
                component: <Pdfss C={TS1} T={TS1C} label1="Math" label2="Compléments d’algèbre" />,
              },
              {
                name: "Réduction des endomorphismes et des matrices carrées",
                route: "/Cours/Spe/Math/Cours/Spe-T2",
                component: (
                  <Pdfss
                    C={TS2}
                    T={TS2C}
                    label1="Math"
                    label2="Réduction des endomorphismes et des matrices carrées"
                  />
                ),
              },
              {
                name: "Espaces euclidiens",
                route: "/Cours/Spe/Math/Cours/Spe-T3",
                component: <Pdfss C={TS3} T={TS3C} label1="Math" label2="Espaces euclidiens" />,
              },
              {
                name: "Topologie des espaces vectoriels normés",
                route: "/Cours/Spe/Math/Cours/Spe-T4",
                component: (
                  <Pdfss
                    C={TS4}
                    T={TS4C}
                    label1="Math"
                    label2="Topologie des espaces vectoriels normés"
                  />
                ),
              },
              {
                name: "Séries numériques et vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-T5",
                component: (
                  <Pdfss
                    C={TS5}
                    T={TS5C}
                    label1="Math"
                    label2="Séries numériques et vectorielles"
                  />
                ),
              },
              {
                name: "Suites et séries de fonctions",
                route: "/Cours/Spe/Math/Cours/Spe-T6",
                component: (
                  <Pdfss C={TS6} T={TS6C} label1="Math" label2="Suites et séries de fonctions" />
                ),
              },
              {
                name: "Séries entières",
                route: "/Cours/Spe/Math/Cours/Spe-T7",
                component: <Pdfss C={TS7} T={TS7C} label1="Math" label2="Séries entières" />,
              },
              {
                name: "Fonctions vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-T8",
                component: <Pdfss C={TS8} T={TS8C} label1="Math" label2="Fonctions vectorielles" />,
              },
              {
                name: "Intégration sur un intervalle quelconque",
                route: "/Cours/Spe/Math/Cours/Spe-T9",
                component: (
                  <Pdfss
                    C={TS9}
                    T={TS9C}
                    label1="Math"
                    label2="Intégration sur un intervalle quelconque"
                  />
                ),
              },
              {
                name: "Suites et séries d’intégrales",
                route: "/Cours/Spe/Math/Cours/Spe-T10",
                component: (
                  <Pdfss C={TS10} T={TS10C} label1="Math" label2="Suites et séries d’intégrales" />
                ),
              },
              {
                name: "Intégrales dépendant d’un paramètre",
                route: "/Cours/Spe/Math/Cours/Spe-T11",
                component: (
                  <Pdfss
                    C={TS11}
                    T={TS11C}
                    label1="Math"
                    label2="Intégrales dépendant d’un paramètre"
                  />
                ),
              },
              {
                name: "Ensembles dénombrables",
                route: "/Cours/Spe/Math/Cours/Spe-T12",
                component: (
                  <Pdfss C={TS12} T={TS12C} label1="Math" label2="Ensembles dénombrables" />
                ),
              },
              {
                name: "Probabilités discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-T13",
                component: (
                  <Pdfss C={TS13} T={TS13C} label1="Math" label2="Probabilités discrètes" />
                ),
              },
              {
                name: "Variables aléatoires discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-T14",
                component: (
                  <Pdfss C={TS14} T={TS14C} label1="Math" label2="Variables aléatoires discrètes" />
                ),
              },
              {
                name: "Suites et séries matricielles",
                route: "/Cours/Spe/Math/Cours/Spe-T15",
                component: (
                  <Pdfss C={TS15} T={TS15C} label1="Math" label2="Suites et séries matricielles" />
                ),
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Spe/Math/Cours/Spe-T16",
                component: (
                  <Pdfss
                    C={TS16}
                    T={TS16C}
                    label1="Math"
                    label2="Equations différentielles linéaires"
                  />
                ),
              },
              {
                name: "Fonctions de plusieurs variables",
                route: "/Cours/Spe/Math/Cours/Spe-T17",
                component: (
                  <Pdfss
                    C={TS17}
                    T={TS17C}
                    label1="Math"
                    label2="Fonctions de plusieurs variables"
                  />
                ),
              },
              //#------------------video--------------------
              {
                name: "Réduction des endomorphismes et des matrices carrées",
                route: "/Cours/Spe/Math/Cours/Spe-V2",
                component: (
                  <Video
                    Y={"FHriYEb9I1k"}
                    label1="Math"
                    label2="Réduction des endomorphismes et des matrices carrées"
                  />
                ),
              },
              {
                name: "Compléments d’algèbre",
                route: "/Cours/Spe/Math/Cours/Spe-V1",
                component: <Video Y={"bySZyPpRvTo"} label1="Math" label2="Compléments d’algèbre" />,
              },
              {
                name: "Espaces euclidiens",
                route: "/Cours/Spe/Math/Cours/Spe-V3",
                component: <Video Y={"xwQ4XwLakRQ"} label1="Math" label2="Espaces euclidiens" />,
              },
              {
                name: "Topologie des espaces vectoriels normés",
                route: "/Cours/Spe/Math/Cours/Spe-V4",
                component: (
                  <Video
                    Y={"B5gqNB8H5Ag"}
                    label1="Math"
                    label2="Topologie des espaces vectoriels normés"
                  />
                ),
              },
              {
                name: "Séries numériques et vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-V5",
                component: (
                  <Video
                    Y={"50jEoxZi8wA"}
                    label1="Math"
                    label2="Séries numériques et vectorielles"
                  />
                ),
              },
              {
                name: "Suites et séries de fonctions",
                route: "/Cours/Spe/Math/Cours/Spe-V6",
                component: (
                  <Video Y={"faK9o74yTFc"} label1="Math" label2="Suites et séries de fonctions" />
                ),
              },
              {
                name: "Séries entières",
                route: "/Cours/Spe/Math/Cours/Spe-V7",
                component: <Video Y={"8UEtDg3nhAw"} label1="Math" label2="Séries entières" />,
              },
              {
                name: "Fonctions vectorielles",
                route: "/Cours/Spe/Math/Cours/Spe-V8",
                component: (
                  <Video Y={"EjLkcRHGhMk"} label1="Math" label2="Fonctions vectorielles" />
                ),
              },
              {
                name: "Intégration sur un intervalle quelconque",
                route: "/Cours/Spe/Math/Cours/Spe-V9",
                component: (
                  <Video
                    Y={"90n74zVCJIo"}
                    label1="Math"
                    label2="Intégration sur un intervalle quelconque"
                  />
                ),
              },
              {
                name: "Suites et séries d’intégrales",
                route: "/Cours/Spe/Math/Cours/Spe-V10",
                component: (
                  <Video Y={"DMkA1kSQ1-8"} label1="Math" label2="Suites et séries d’intégrales" />
                ),
              },
              {
                name: "Intégrales dépendant d’un paramètre",
                route: "/Cours/Spe/Math/Cours/Spe-V11",
                component: (
                  <Video
                    Y={"RubHGfHttQc"}
                    label1="Math"
                    label2="Intégrales dépendant d’un paramètre"
                  />
                ),
              },
              {
                name: "Ensembles dénombrables",
                route: "/Cours/Spe/Math/Cours/Spe-V12",
                component: (
                  <Video Y={"6JS6huQZ3gk"} label1="Math" label2="Ensembles dénombrables" />
                ),
              },
              {
                name: "Probabilités discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-V13",
                component: (
                  <Video Y={"4PAECijzQuo"} label1="Math" label2="Probabilités discrètes" />
                ),
              },
              {
                name: "Variables aléatoires discrètes",
                route: "/Cours/Spe/Math/Cours/Spe-V14",
                component: (
                  <Video Y={"NzaR0LCDm2U"} label1="Math" label2="Variables aléatoires discrètes" />
                ),
              },
              {
                name: "Suites et séries matricielles",
                route: "/Cours/Spe/Math/Cours/Spe-V15",
                component: (
                  <Video Y={"50jEoxZi8wA"} label1="Math" label2="Suites et séries matricielles" />
                ),
              },
              {
                name: "Equations différentielles linéaires",
                route: "/Cours/Spe/Math/Cours/Spe-V16",
                component: (
                  <Video
                    Y={"pWcFU0h-GcE"}
                    label1="Math"
                    label2="Equations différentielles linéaires"
                  />
                ),
              },
              {
                name: "Fonctions de plusieurs variables",
                route: "/Cours/Spe/Math/Cours/Spe-V17",
                component: (
                  <Video
                    Y={"T8_e1qJ_mFg"}
                    label1="Math"
                    label2="Fonctions de plusieurs variables"
                  />
                ),
              },
            ],
          },
        ],
      },
      {
        name: "Physique",
        description: "",
        route: "/pages/Cours/Physique",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Physique/Sup",
            collapse: [
              {
                name: "Sup",
                route: "/pages/landing-pages/about-us",
                component: <Formation data={datailham} />,
              },
              {
                name: "",
                route: "/pages/Cours/Physique",
                component: <PhysiqueC />,
              },
              {
                name: "",
                route: "/pages/Cours/Physique/Sup",
                component: <PSup />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C1",
                component: <Pdf C={CP1} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C2",
                component: <Pdf C={CP2} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C3",
                component: <Pdf C={CP3} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C4",
                component: <Pdf C={CP4} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C5",
                component: <Pdf C={CP5} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C6",
                component: <Pdf C={CP6} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C7",
                component: <Pdf C={CP7} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T1",
                component: <Pdfss C={TP1} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T2",
                component: <Pdfss C={TP2} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T3",
                component: <Pdfss C={TP3} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T4",
                component: <Pdfss C={TP4} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T5",
                component: <Pdfss C={TP5} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T6",
                component: <Pdfss C={TP6} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C8",
                component: <Pdf C={CST1} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C9",
                component: <Pdf C={CST2} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C10",
                component: <Pdf C={CST3} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C11",
                component: <Pdf C={CST4} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C12",
                component: <Pdf C={CST5} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C13",
                component: <Pdf C={CST6} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T8",
                component: <Pdfss T={TST1C} C={TST1} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T9",
                component: <Pdfss T={TST2C} C={TST2} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T10",
                component: <Pdfss T={TST3C} C={TST3} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T11",
                component: <Pdfss T={TST4C} C={TST4} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C14",
                component: <Pdf C={CSE1} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C15",
                component: <Pdf C={CSE2} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C16",
                component: <Pdf C={CSE3} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C17",
                component: <Pdf C={CSE4} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C18",
                component: <Pdf C={CSE5} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C19",
                component: <Pdf C={CSE6} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C20",
                component: <Pdf C={CSE7} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C21",
                component: <Pdf C={CSE8} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C22",
                component: <Pdf C={CSE9} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T12",
                component: <Pdfss T={TSE1C} C={TSE1} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T13",
                component: <Pdfss T={TSE2C} C={TSE2} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T14",
                component: <Pdfss T={TSE3C} C={TSE3} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T15",
                component: <Pdfss T={TSE4C} C={TSE4} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T16",
                component: <Pdfss T={TSE5C} C={TSE5} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T17",
                component: <Pdfss T={TSE6C} C={TSE6} label1="Physique" label2="Electrocinetique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C23",
                component: <Pdf C={CSO1} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C24",
                component: <Pdf C={CSO2} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C25",
                component: <Pdf C={CSO3} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T18",
                component: <Pdfss T={TSO1C} C={TSO1} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T19",
                component: <Pdfss T={TSO2C} C={TSO2} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T20",
                component: <Pdfss T={TSO3C} C={TSO3} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C26",
                component: <Pdf C={CSEM1} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C27",
                component: <Pdf C={CSEM2} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C28",
                component: <Pdf C={CSEM3} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C29",
                component: <Pdf C={CSEM4} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T21",
                component: (
                  <Pdfss T={TSEM1C} C={TSEM1} label1="Physique" label2="Electrostatique" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T22",
                component: (
                  <Pdfss T={TSEM2C} C={TSEM2} label1="Physique" label2="Electrostatique" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T23",
                component: (
                  <Pdfss T={TSEM3C} C={TSEM3} label1="Physique" label2="Electrostatique" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/T24",
                component: <Pdfss T={TSQ1C} C={TSQ1} label1="Physique" label2="Quantique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/C30",
                component: <Pdf C={CSQ1} label1="Physique" label2="Quantique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V1",
                component: <Video Y={"2OOJPQ0Anv8"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V2",
                component: <Video Y={"zmeCJaTFMew"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V3",
                component: <Video Y={"o1pafUcarMA"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V4",
                component: <Video Y={"t-6ZjOihEiY"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V5",
                component: <Video Y={"6DI6S4Vr3lU"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V6",
                component: <Video Y={"uZhlJPIToLE"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V7",
                component: <Video Y={"7dqCqDjWi7w"} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V8",
                component: <Video Y={"XmY-uFptVRo"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V9",
                component: <Video Y={"A0SmY3i3OIQ"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V10",
                component: <Video Y={"usnKxd13u2o"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V11",
                component: <Video Y={"Gb5Kq4nmjo0"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V12",
                component: <Video Y={"Y7EVabC5uns"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V13",
                component: <Video Y={"RV0MIsrxzQY"} label1="Physique" label2="Thermodynamique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V14",
                component: <Video Y={"nr0JkXuBVmU"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V15",
                component: <Video Y={"2c0ib1XDPnk"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V16",
                component: <Video Y={"J5KLsenuppc"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V17",
                component: <Video Y={"ltIWqsyZBsQ"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V18",
                component: <Video Y={"FexTemsmfWk"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V19",
                component: <Video Y={"S_Ij1fqAT1E"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V20",
                component: <Video Y={"ehE06qsdoZ0"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V21",
                component: <Video Y={"z0flTFtJCt4"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V22",
                component: <Video Y={"4F1vOIy6FZU"} label1="Physique" label2="Electrocinétique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V23",
                component: <Video Y={"4wXorb-bFp0"} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V24",
                component: <Video Y={"UDHWW6Ql7p8"} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V25",
                component: <Video Y={"I5RKH0m_2WQ"} label1="Physique" label2="Optique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V26",
                component: <Video Y={"FaqptQ4prc0"} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V27",
                component: <Video Y={"yIsl1qSI4nE"} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V28",
                component: <Video Y={"ivgw3tEdFyA"} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V29",
                component: <Video Y={"gNGRI_HOqH8"} label1="Physique" label2="Electrostatique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Physique/V30",
                component: <Video Y={"6DXAU-CqDcQ"} label1="Physique" label2="Quantique" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Physique/Spe",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Physique/Spe",
                component: <PSpe />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C1",
                component: <Pdf C={C1} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T1",
                component: <Pdfss C={TCS1} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C2",
                component: <Pdf C={C2} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C3",
                component: <Pdf C={C3} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T2",
                component: <Pdfss C={TCS2} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C4",
                component: <Pdf C={C4} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C5",
                component: <Pdf C={C5} label1="Physique" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C6",
                component: <Pdf C={CE1} label1="Physique" label2="Electronique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T3",
                component: <Pdfss T={TCE1C} C={TCE1} label1="Physique" label2="Electronique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T4",
                component: <Pdfss T={TCE2C} C={TCE2} label1="Physique" label2="Electronique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C7",
                component: <Pdf C={CE2} label1="Physique" label2="Electronique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C8",
                component: <Pdf C={CEM1} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C9",
                component: <Pdf C={CEM2} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C10",
                component: <Pdf C={CEM3} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C11",
                component: <Pdf C={CEM4} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C12",
                component: <Pdf C={CEM5} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C13",
                component: <Pdf C={CEM6} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C14",
                component: <Pdf C={CEM7} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T10",
                component: <Pdfss C={TEM1} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T11",
                component: (
                  <Pdfss T={TEM2C} C={TEM2} label1="Physique" label2="Electromagnetisme" />
                ),
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T12",
                component: <Pdfss C={TEM3} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T13",
                component: <Pdfss C={TEM4} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T14",
                component: <Pdfss C={TEM5} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T15",
                component: <Pdfss C={TEM6} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T16",
                component: <Pdfss C={TEM7} label1="Physique" label2="Electromagnetisme" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C15",
                component: <Pdf C={CO1} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C16",
                component: <Pdf C={CO2} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C17",
                component: <Pdf C={CO3} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C18",
                component: <Pdf C={CO4} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C19",
                component: <Pdf C={CO5} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T5",
                component: <Pdfss C={TCO1} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T6",
                component: <Pdfss C={TCO2} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T7",
                component: <Pdfss C={TCO3} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T8",
                component: <Pdfss C={TCO4} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T9",
                component: <Pdfss C={TCO5} label1="Physique" label2="Ondes" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C20",
                component: <Pdf C={CT1} label1="Physique" label2="Thermo Spe" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C21",
                component: <Pdf C={CT2} label1="Physique" label2="Thermo Spe" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T17",
                component: <Pdfss C={TCT1} label1="Physique" label2="Thermo Spe" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T18",
                component: <Pdfss C={TCT2} label1="Physique" label2="Thermo Spe" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C22",
                component: <Pdf C={CON1} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C23",
                component: <Pdf C={CON2} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C24",
                component: <Pdf C={CON3} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C25",
                component: <Pdf C={CON4} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/C26",
                component: <Pdf C={CON5} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T19",
                component: <Pdfss C={TCOO1} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T20",
                component: <Pdfss C={TCOO2} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T21",
                component: <Pdfss C={TCOO3} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T22",
                component: <Pdfss C={TCOO4} label1="Physique" label2="Ondulatoire" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Physique/T23",
                component: <Pdfss C={TCOO5} label1="Physique" label2="Ondulatoire" />,
              },
            ],
          },
        ],
      },
      {
        name: "Chimie",
        description: "",
        route: "/pages/Cours/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Chimie/Sup",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Chimie",
                component: <ChimieC />,
              },
              {
                name: "",
                route: "/pages/Cours/Chimie/Sup",
                component: <CSup />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C1",
                component: <Pdf C={CCSC1} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C2",
                component: <Pdf C={CCSC2} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C3",
                component: <Pdf C={CCSC3} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C4",
                component: <Pdf C={CCSC4} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C5",
                component: <Pdf C={CCSC5} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C6",
                component: <Pdf C={CCSC6} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T1",
                component: <Pdfss C={TCSC2} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T2",
                component: <Pdfss C={TCSC3} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T3",
                component: <Pdfss C={TCSC4} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T4",
                component: <Pdfss C={TCSC5} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T5",
                component: <Pdfss C={TCSC6} label1="Chimie" label2="Chimie des solutions" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C7",
                component: <Pdf C={SCSC1} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C8",
                component: <Pdf C={SCSC2} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C9",
                component: <Pdf C={SCSC3} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/C10",
                component: <Pdf C={SCSC4} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T6",
                component: (
                  <Pdfss T={TSCSC1C} C={TSCSC1} label1="Chimie" label2="Chimie de coordination" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T7",
                component: <Pdfss C={TSCSC3} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/T8",
                component: <Pdfss C={TSCSC4} label1="Chimie" label2="Chimie de coordination" />,
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V1",
                component: (
                  <Video Y={"seMnp6_g27I"} label1="Chimie" label2="Chimie des solutions" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V2",
                component: (
                  <Video Y={"_d3xpEAn-bo"} label1="Chimie" label2="Chimie des solutions" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V3",
                component: (
                  <Video Y={"--7stKiqhwI"} label1="Chimie" label2="Chimie des solutions" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V4",
                component: (
                  <Video Y={"Ns8zTz7jfJc"} label1="Chimie" label2="Chimie des solutions" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V5",
                component: (
                  <Video Y={"0ZGeK2G2S5M"} label1="Chimie" label2="chimie de coordination" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V6",
                component: (
                  <Video Y={"I1rGedZQ1wk"} label1="Chimie" label2="chimie de coordination" />
                ),
              },
              {
                name: "",
                route: "/Cours/Sup/Chimie/V7",
                component: (
                  <Video Y={"ONWWBJIu4vY"} label1="Chimie" label2="chimie de coordination" />
                ),
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Chimie/Spe",
            collapse: [
              {
                name: "Spe",
                route: "/pages/Cours/Chimie/Spe",
                component: <CSpe />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/C1",
                component: <Pdf C={TherC1} label1="Chimie" label2="Thermochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/T1",
                component: <Pdfss C={TTherC1} label1="Chimie" label2="Thermochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/C2",
                component: <Pdf C={TherC2} label1="Chimie" label2="Thermochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/C3",
                component: <Pdf C={TherC3} label1="Chimie" label2="Electrochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/T2",
                component: <Pdf T={TTherC3C} C={TTherC3} label1="Chimie" label2="Electrochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/V1",
                component: <Video Y={"1nD9RkYpVjo"} label1="Chimie" label2="Thermochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/V2",
                component: <Video Y={"XrQ98MQaC1c"} label1="Chimie" label2="Thermochimie" />,
              },
              {
                name: "",
                route: "/Cours/Spe/Chimie/V3",
                component: <Video Y={"y1BvJX3liqs"} label1="Chimie" label2="Electrochimie" />,
              },
            ],
          },
        ],
      },
      {
        name: "SI",
        //description: "Mecanique - Asservissement",
        route: "/pages/Cours/SI",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Sup/SI",
            collapse: [
              {
                name: "Sup",
                route: "/pages/Cours/Sup/SI",
                component: <SISup />,
              },
              {
                name: "",
                route: "/pages/Cours/SI",
                component: <SIC />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S1",
                component: <Pdf C={SI1} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2",
                component: <Pdf C={SI2} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S3",
                component: <Pdf C={SI3} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4",
                component: <Pdf C={SI4} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S5",
                component: <Pdf C={SI5} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6",
                component: <Pdf C={SI6} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S7",
                component: <Pdf C={SI7} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8",
                component: <Pdf C={SI8} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S9",
                component: <Pdf C={SI9} label1="SI" label2="Mecanique" />,
              },
              //Td
              {
                name: "",
                route: "/Cours/Sup/SI/S1T1",
                component: <Pdfss C={SI1T1} T={SI1T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S1T2",
                component: <Pdfss C={SI1T2} T={SI1T2C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2T1",
                component: <Pdfss C={SI2T1} T={SI2T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2T2",
                component: <Pdfss C={SI2T2} T={SI2T2C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2T3",
                component: <Pdfss C={SI2T3} T={SI2T3C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2T4",
                component: <Pdfss C={SI2T4} T={SI2T4C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S2T5",
                component: <Pdfss C={SI2T5} T={SI2T5C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S3T1",
                component: <Pdfss C={SI3T1} T={SI3T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S3T2",
                component: <Pdfss C={SI3T2} T={SI3T2C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4T1",
                component: <Pdfss C={SI4T1} T={SI4T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4T2",
                component: <Pdfss C={SI4T2} T={SI4T2C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4T3",
                component: <Pdfss C={SI4T3} T={SI4T3C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4T4",
                component: <Pdfss C={SI4T4} T={SI4T4C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S4T5",
                component: <Pdfss C={SI4T5} T={SI4T5C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S5T1",
                component: <Pdfss C={SI5T1} T={SI5T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T1",
                component: <Pdfss C={SI6T1} T={SI6T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T2",
                component: <Pdfss C={SI6T2} T={SI6T2C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T3",
                component: <Pdfss C={SI6T3} T={SI6T3C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T4",
                component: <Pdfss C={SI6T4} T={SI6T4C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T5",
                component: <Pdfss C={SI6T5} T={SI6T5C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T6",
                component: <Pdfss C={SI6T6} T={SI6T6C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T7",
                component: <Pdfss C={SI6T7} T={SI6T7C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T8",
                component: <Pdfss C={SI6T8} T={SI6T8C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T9",
                component: <Pdfss C={SI6T9} T={SI6T9C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T10",
                component: <Pdfss C={SI6T10} T={SI6T10C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T11",
                component: <Pdfss C={SI6T11} T={SI6T11C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T12",
                component: <Pdfss C={SI6T12} T={SI6T12C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T13",
                component: <Pdfss C={SI6T13} T={SI6T13C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T14",
                component: <Pdfss C={SI6T14} T={SI6T14C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S6T15",
                component: <Pdfss C={SI6T15} T={SI6T15C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S7T1",
                component: <Pdfss C={SI7T1} T={SI7T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T1",
                component: <Pdfss C={SI8T1} T={SI8T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T2",
                component: <Pdfss C={SI8T2} T={SI8T2C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T3",
                component: <Pdfss C={SI8T3} T={SI8T3C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T4",
                component: <Pdfss C={SI8T4} T={SI8T4C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T5",
                component: <Pdfss C={SI8T5} T={SI8T5C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T6",
                component: <Pdfss C={SI8T6} T={SI8T6C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S8T7",
                component: <Pdfss C={SI8T7} T={SI8T7C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/S9T1",
                component: <Pdfss C={SI9T1} T={SI9T1C} label1="SI" label2="Mecanique" />,
              },
              //Vids
              {
                name: "",
                route: "/Cours/Spe/SI/SV1",
                component: <Video Y={"PqEWjcQ7NMs"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SV2",
                component: <Video Y={"PeSGbVE8xno"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SV3",
                component: <Video Y={"5ALl9EYmdcY"} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SV4",
                component: <Video Y={"m-mNfC0YY0I"} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V1",
                component: <Video Y={"H2ubGTFKS8o"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V2",
                component: <Video Y={"s8dPB93iUP0"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V3",
                component: <Video Y={"KcdQyPS6r_o"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V4",
                component: <Video Y={"u1EH0cKk9mI"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V5",
                component: <Video Y={"wnZwh_04XC0"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V6",
                component: <Video Y={"pnu_bwgKISo"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V7",
                component: <Video Y={"9jZq60IBgXY"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V8",
                component: <Video Y={"GfbE0k3b8aM"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/SUP/SI/V9",
                component: <Video Y={"k7Pn5UfJig8"} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R2",
                component: <Pdf C={SI2R} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R3",
                component: <Pdf C={SI3R} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R4",
                component: <Pdf C={SI4R} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R5",
                component: <Pdf C={SI5R} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R6",
                component: <Pdf C={SI6R} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R7",
                component: <Pdf C={SI7R} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Sup/SI/R8",
                component: <Pdf C={SI8R} label1="SI" label2="Mecanique" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Spe/SI",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Spe/SI",
                component: <SISpe />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS1R1",
                component: <Pdf C={SIS1R1} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS1R2",
                component: <Pdf C={SIS1R2} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS1R3",
                component: <Pdf C={SIS1R3} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS1T1",
                component: <Pdfss C={SIS1T1} T={SIS1T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS1T1",
                component: <Pdfss C={SIS1T2} T={SIS1T2C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS2",
                component: <Pdf C={SIS2} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS2R",
                component: <Pdf C={SIS2R} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS2T1",
                component: <Pdfss C={SIS2T1} T={SIS2T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS3",
                component: <Pdf C={SIS3} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS3R",
                component: <Pdf C={SIS3R} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS3A",
                component: <Pdf C={SIS3A} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS3AR",
                component: <Pdf C={SIS3AR} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS3T1",
                component: <Pdfss C={SIS3T1} T={SIS3T1C} label1="SI" label2="Asservissement" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4R1",
                component: <Pdf C={SIS4R1} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4R2",
                component: <Pdf C={SIS4R2} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4R3",
                component: <Pdf C={SIS4R3} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4R4",
                component: <Pdf C={SIS4R4} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4R5",
                component: <Pdf C={SIS4R5} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4T1",
                component: <Pdfss C={SIS4T1} T={SIS4T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4T2",
                component: <Pdfss C={SIS4T2} T={SIS4T2C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4T3",
                component: <Pdfss C={SIS4T3} T={SIS4T3C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4T4",
                component: <Pdfss C={SIS4T4} T={SIS4T4C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS4T5",
                component: <Pdfss C={SIS4T5} T={SIS4T5C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5",
                component: <Pdf C={SIS5} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5R",
                component: <Pdf C={SIS5R} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5T1",
                component: <Pdfss C={SIS5T1} T={SIS5T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5T2",
                component: <Pdfss C={SIS5T2} T={SIS5T2C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5T3",
                component: <Pdfss C={SIS5T3} T={SIS5T3C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5T4",
                component: <Pdfss C={SIS5T4} T={SIS5T4C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS5T5",
                component: <Pdfss C={SIS5T5} T={SIS5T5C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS6",
                component: <Pdf C={SIS6} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS6R",
                component: <Pdf C={SIS6R} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS6T1",
                component: <Pdfss C={SIS6T1} T={SIS6T1C} label1="SI" label2="Mecanique" />,
              },
              {
                name: "",
                route: "/Cours/Spe/SI/SS6T2",
                component: <Pdfss C={SIS6T2} T={SIS6T2C} label1="SI" label2="Mecanique" />,
              },
            ],
          },
        ],
      },
      {
        name: "Informatique",
        //description: "Python",
        route: "/pages/Cours/Info",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Info/Sup",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Info",
                component: <InfoC />,
              },
              {
                name: "Sup",
                route: "/pages/Cours/Info/Sup",
                component: <ISup />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Info/Spe",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Info",
                component: <InfoC />,
              },
              {
                name: "Spe",
                route: "/pages/Cours/Info/Spe",
                component: <ISpe />,
              },
            ],
          },
        ],
      },
      {
        name: "Traduction",
        //description: "Ar-Fr",
        route: "/pages/Cours/Tr",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Cours/Tr/Sup",
            collapse: [
              {
                name: "",
                route: "/pages/Cours/Tr",
                component: <TrC />,
              },
              {
                name: "",
                route: "/pages/Cours/Tr/Sup",
                component: <TSup />,
              },
              {
                name: "Spe",
                route: "/pages/Cours/Tr/Spe",
                component: <TSpe />,
              },
              {
                name: "",
                route: "/Cours/Tr/Spe/Tx2",
                component: <Pdf C={Trad2} label1="Traduction" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Tr/Sup/Tx",
                component: <Pdf C={Trad1} label1="Traduction" label2="Sup" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Cours/Tr/Spe",
            collapse: [
              {
                name: "Spe",
                route: "/pages/Cours/Tr/Spe",
                component: <TSpe />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Problémes",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Pbs Maths",
        //description: "Analyse, Algebre, Proba",
        route: "/pages/Pbs/Math",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Pbs/Sup/Math",
            collapse: [
              {
                name: "",
                route: "/pages/Pbs/Sup/Math",
                component: <PbM />,
              },
              {
                name: "",
                route: "/pages/Pbs/Math",
                component: <MPBS />,
              },
              {
                name: "",
                route: "/pages/Pbs/Sup/Math/Algebre",
                component: <PbMAl />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Pbs/Spe/Math",
            collapse: [
              {
                name: "",
                route: "/pages/Pbs/Spe/Math",
                component: <PbMS />,
              },
              {
                name: "",
                route: "/pages/Pbs/Spe/Math/Algebre",
                component: <PbMSAl />,
              },
              {
                name: "",
                route: "/pages/Pbs/Spe/Math/Analyse",
                component: <PbMSA />,
              },
              {
                name: "",
                route: "/pages/Pbs/Spe/Math/Proba",
                component: <PbMSP />,
              },
            ],
          },
        ],
      },
      {
        name: "Pbs Physique",
        description: "",
        route: "/pages/Pbs/Physique",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Pbs/Sup/Physique",
            collapse: [
              {
                name: "Sup",
                route: "/pages/Pbs/Sup/Physique",
                component: <PbPS />,
              },
              {
                name: "",
                route: "/pages/Pbs/Physique",
                component: <PPBS />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Pbs/Spe/Physique",
            collapse: [
              {
                name: "",
                route: "/pages/Pbs/Spe/Physique",
                component: <PbPSP />,
              },
              {
                name: "",
                route: "/pages/Pbs/Physique",
                component: <PPBS />,
              },
            ],
          },
        ],
      },
      {
        name: "Pbs Chimie",
        description: "",
        route: "/pages/Pbs/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/pages/Pbs/Sup/Chimie",
            collapse: [
              {
                name: "",
                route: "/pages/Pbs/Sup/Chimie",
                component: <CbPS />,
              },
              {
                name: "",
                route: "/pages/Pbs/Chimie",
                component: <CPBS />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/pages/Pbs/Spe/Chimie",
            collapse: [
              {
                name: "",
                route: "/pages/Pbs/Spe/Chimie",
                component: <CbPSP />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Concours",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "CNC",
        //description: "Analyse, Algebre, Proba",
        route: "/CNC",
        dropdown: false,
        collapse: [
          {
            name: "Math",
            route: "/CNC",
            component: <CNC />,
          },
        ],
      },
      {
        name: "CCINP",
        description: "",
        route: "/CCINP",
        dropdown: false,
        collapse: [
          {
            name: "Math",
            route: "/CCINP",
            component: <CCINP />,
          },
        ],
      },
      {
        name: "CCMP",
        description: "",
        route: "/CCMP",
        dropdown: false,
        collapse: [
          {
            name: "Math",
            route: "/CCMP",
            component: <CCMP />,
          },
        ],
      },
      {
        name: "CCS",
        //description: "Mecanique - Asservissement",
        route: "/CCS",
        dropdown: false,
        collapse: [
          {
            name: "Math",
            route: "/CCS",
            component: <CCS />,
          },
        ],
      },
    ],
  },
  {
    name: "Formations",
    icon: <Icon>ondemand_video</Icon>,
    collapse: [
      {
        name: "Math",
        //description: "Analyse, Algebre, Proba",
        route: "/pages/Formations/Math",
        dropdown: true,
        collapse: [
          {
            name: "Abdellatif Ilham",
            route: "/pages/Formations/Math/Ilham",
            component: <IlhamP />,
            collapse: [
              {
                name: "Analyse",
                route: "/pages/Formations/Math/Ilham/Analyse",
                component: <IlhamAnalyse />,
              },
              {
                name: "Algebre",
                route: "/pages/Formations/Math/Ilham/Algebre",
                component: <IlhamAlgebre />,
              },
              {
                name: "Proba",
                route: "/pages/Formations/Math/Ilham/Proba",
                component: <IlhamProba />,
              },
              {
                name: "Proba",
                route: "/pages/Formations/Math/Ilham",
                component: <IlhamP />,
              },
            ],
          },
          {
            name: "Mohamed Benchama",
            route: "/pages/Formations/Math/Benchama",
            collapse: [
              {
                name: "Analyse",
                route: "/pages/Formations/Math/Benchama/Analyse",
                component: <BenchamaAnalyse />,
              },
              {
                name: "Algebre",
                route: "/pages/Formations/Math/Benchama/Algebre",
                component: <BenchamaAlgebre />,
              },
              {
                name: "Proba",
                route: "/pages/Formations/Math/Benchama/Proba",
                component: <BenchamaProba />,
              },
              {
                name: "Proba",
                route: "/pages/Formations/Math/Benchama",
                component: <BenchamaP />,
              },
              {
                name: "Mohamed Benchama",
                route: "pages/Formations/Math",
                component: <MathF />,
              },
            ],
          },
        ],
      },
      {
        name: "Physiques",
        description: "",
        route: "/pages/formation/physique",
        dropdown: true,
        collapse: [
          {
            name: "M.Hinnaoui",
            route: "/pages/formation/physique/Hinaoui",
            collapse: [
              {
                name: "",
                route: "/pages/formation/physique",
                component: <PhysiqueF />,
              },
              {
                name: "",
                route: "/pages/formation/physique/Hinaoui",
                component: <HinaouiP />,
              },
              {
                name: "",
                route: "/pages/Formation/Physique/Hinaoui/Mecanique",
                component: <MecH />,
              },
              {
                name: "",
                route: "/pages/Formation/Physique/Hinaoui/Thermo",
                component: <ThermoH />,
              },
              {
                name: "",
                route: "/pages/Formations/Physique/Hinaoui/Optique",
                component: <OptH />,
              },
              {
                name: "",
                route: "/pages/Formations/Physique/Hinaoui/EM",
                component: <EMH />,
              },
            ],
          },
          {
            name: "R.Bouhamza",
            route: "/pages/landing-pages/about-us",
            component: <ContactUs />,
          },
          {
            name: "I.Ibraiken",
            route: "/pages/landing-pages/about-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "Chimies",
        description: "",
        route: "/pages/formation/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "M.Hinnaoui",
            route: "/pages/formation/Chimie/Hinaoui",
            collapse: [
              {
                name: "",
                route: "/pages/formation/Chimie/Hinaoui",
                component: <HinaouiC />,
              },
              {
                name: "",
                route: "/pages/formation/Chimie/Hinaoui/CDS",
                component: <CDS />,
              },
              {
                name: "",
                route: "/pages/formation/Chimie/Hinaoui/CR",
                component: <CR />,
              },
              {
                name: "",
                route: "/pages/formation/Chimie/Hinaoui/CS",
                component: <CS />,
              },
              {
                name: "",
                route: "/pages/formation/Chimie/Hinaoui/TC",
                component: <TC />,
              },
              {
                name: "",
                route: "/pages/formation/Chimie",
                component: <ChimieF />,
              },
            ],
          },
          {
            name: "R.Bouhamza",
            route: "/pages/landing-pages/about-us",
            component: <ContactUs />,
          },
          {
            name: "I.Ibraiken",
            route: "/pages/landing-pages/about-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "S2I",
        //description: "Mecanique - Asservissement",
        route: "/pages/formation/SI",
        dropdown: true,
        collapse: [
          {
            name: "Khalid Khouya",
            route: "/pages/formation/SI/Khalid",
            collapse: [
              {
                name: "",
                route: "/pages/formation/SI",
                component: <SIF />,
              },
              {
                name: "",
                route: "/pages/formation/SI/Khalid",
                component: <Khalid />,
              },
              {
                name: "",
                route: "/pages/formation/SI/Khalid/Mecanique",
                component: <MecSK />,
              },
              {
                name: "",
                route: "/pages/formation/SI/Khalid/Asservissement",
                component: <Ass />,
              },
            ],
          },
          {
            name: "Expertise",
            route: "/pages/formation/SI",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "Informatiques",
        //description: "Python",
        route: "/pages/formation/Info",
        dropdown: true,
        collapse: [
          {
            name: "B.Chemlal",
            route: "/pages/formation/Info",
            component: <InfoF />,
          },
        ],
      },
    ],
  },
  {
    name: "TIPE",
    icon: <Icon>web</Icon>,
    collapse: [
      {
        name: "TIPE",
        description: "Informations Générale",
        route: "/TIPEIG",
        component: <TIPEIG />,
      },
      {
        name: "TIPE examples",
        description: "MP-PSI-TSI",
        route: "/TIPE",
        component: <TIPE />,
      },
    ],
  },
];
export default routes;
