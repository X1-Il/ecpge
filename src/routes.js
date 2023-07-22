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
import Pb from "pages/Tech/pb/index.js";
//Physique Pbs
//ARQS
import pbp1 from "pages/Pbs/Physique/Physique/ARQS/Champs E et B dans un condensateur.pdf";
import pbp2 from "pages/Pbs/Physique/Physique/ARQS/OndeReflexion Dielectrique Solenoide.pdf";
//Electronique
import pbp3 from "pages/Pbs/Physique/Physique/electronique/COetCO2 CircuitsCouples.pdf";
import pbp4 from "pages/Pbs/Physique/Physique/electronique/DetectionSynchrone FiltreUniversel.pdf";
import pbp5 from "pages/Pbs/Physique/Physique/electronique/DisqueRotationInitiale PasseBandeTriangle CaviteLaser Gravitation.pdf";
import pbp6 from "pages/Pbs/Physique/Physique/electronique/EffetMoyenne CouleursDiffraction.pdf";
import pbp7 from "pages/Pbs/Physique/Physique/electronique/Electrocinetique de base.pdf";
import pbp8 from "pages/Pbs/Physique/Physique/electronique/Filtre Modulation Demodulation.pdf";
import pbp9 from "pages/Pbs/Physique/Physique/electronique/Filtre selectif.pdf";
import pbp10 from "pages/Pbs/Physique/Physique/electronique/Filtres OscillationsNonGalileen DoubleurEt Hyperfocale CycleEntropie.pdf";
import pbp11 from "pages/Pbs/Physique/Physique/electronique/Jouets BinaireEauEthanol ModulationPhase.pdf";
import pbp12 from "pages/Pbs/Physique/Physique/electronique/MachZehnder Filtrage RefrigerationAirPulse.pdf";
import pbp13 from "pages/Pbs/Physique/Physique/electronique/MichelsonGravitation InterferencesDispersion MgCorrosion BinaireHNO3.pdf";
import pbp14 from "pages/Pbs/Physique/Physique/electronique/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbp15 from "pages/Pbs/Physique/Physique/electronique/MoteurElectrostatique Variometre Laiton.pdf";
import pbp16 from "pages/Pbs/Physique/Physique/electronique/Onde thermique.pdf";
import pbp17 from "pages/Pbs/Physique/Physique/electronique/PortraitPhaseElec NonGalileenEnergie LiquefactionCompressionIsotherme.pdf";
import pbp18 from "pages/Pbs/Physique/Physique/electronique/ReseauReflexion Defibrillateur Chlore.pdf";
import pbp19 from "pages/Pbs/Physique/Physique/electronique/ThermoregulationCycliste EtoileDouble Modulation.pdf";
import pbp20 from "pages/Pbs/Physique/Physique/electronique/Velo diode roue libre.pdf";
//Electrostatique
import pbp21 from "pages/Pbs/Physique/Physique/electrostatique/AvancementGaz Accelerometre TemperatureLune.pdf";
import pbp22 from "pages/Pbs/Physique/Physique/electrostatique/Biprisme EffetHall PressionElectromagnetisme.pdf";
import pbp23 from "pages/Pbs/Physique/Physique/electrostatique/ChampEBordPlan ChambreProjectionTemporelle ThermiqueTransistor.pdf";
import pbp24 from "pages/Pbs/Physique/Physique/electrostatique/Charges ponctuelles en electrostatique.pdf";
import pbp25 from "pages/Pbs/Physique/Physique/electrostatique/Conducteurs cylindriques en electrostatique.pdf";
import pbp26 from "pages/Pbs/Physique/Physique/electrostatique/Fibre optique saut et gradient.pdf";
import pbp27 from "pages/Pbs/Physique/Physique/electrostatique/La foudre.pdf";
import pbp28 from "pages/Pbs/Physique/Physique/electrostatique/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbp29 from "pages/Pbs/Physique/Physique/electrostatique/MoteurElectrostatique Variometre Laiton.pdf";
import pbp30 from "pages/Pbs/Physique/Physique/electrostatique/MoteurEntropie InterferencesMiroirs ModelesAtome.pdf";
import pbp31 from "pages/Pbs/Physique/Physique/electrostatique/OndeReflexion Dielectrique Solenoide.pdf";
import pbp32 from "pages/Pbs/Physique/Physique/electrostatique/SphereConductriceDansEUniforme PiegeDePenning.pdf";
//Induction
import pbp33 from "pages/Pbs/Physique/Physique/Induction/BoucleDetection ChuteDansB DiffractionYoung.pdf";
import pbp34 from "pages/Pbs/Physique/Physique/Induction/ChampMagnetiqueTerrestre.pdf";
import pbp35 from "pages/Pbs/Physique/Physique/Induction/Chute aimant dans tube metallique.pdf";
import pbp36 from "pages/Pbs/Physique/Physique/Induction/CompresseurAdiabatique ElihuThomson.pdf";
import pbp37 from "pages/Pbs/Physique/Physique/Induction/EcrantageB LevitationSphereSupraconductrice PollutionMercure.pdf";
import pbp38 from "pages/Pbs/Physique/Physique/Induction/LevitationMagnetique MoteurLineaire Ressort.pdf";
import pbp39 from "pages/Pbs/Physique/Physique/Induction/RailLaplace MoteurCurzon.pdf";
import pbp40 from "pages/Pbs/Physique/Physique/Induction/RendementBeauDeRochas Alternateur OxydesCuivre.pdf";
import pbp41 from "pages/Pbs/Physique/Physique/Induction/Skeleton OndeMetal PreparationTitane.pdf";
import pbp42 from "pages/Pbs/Physique/Physique/Induction/Spire dans un champ magnetique uniforme.pdf";
import pbp43 from "pages/Pbs/Physique/Physique/Induction/TemperatureTerre RailLaplace MichelsonPlaneite.pdf";
//Magnetostatique
import pbp44 from "pages/Pbs/Physique/Physique/magnetostatique/Biprisme EffetHall PressionElectromagnetisme_2.pdf";
import pbp45 from "pages/Pbs/Physique/Physique/magnetostatique/ChampMagnetiqueTerrestre.pdf";
import pbp46 from "pages/Pbs/Physique/Physique/magnetostatique/CompresseurAdiabatique ElihuThomson.pdf";
import pbp47 from "pages/Pbs/Physique/Physique/magnetostatique/EcrantageB LevitationSphereSupraconductrice PollutionMercure.pdf";
import pbp48 from "pages/Pbs/Physique/Physique/magnetostatique/Effet Hall et magnetoresistance.pdf";
import pbp49 from "pages/Pbs/Physique/Physique/magnetostatique/Indice Distillation.pdf";
import pbp50 from "pages/Pbs/Physique/Physique/magnetostatique/LevitationMagnetique MoteurLineaire Ressort.pdf";
import pbp51 from "pages/Pbs/Physique/Physique/magnetostatique/Sphere supraconductrice.pdf";
//Mecanique du point
import pbp52 from "pages/Pbs/Physique/Physique/mecanique du point/AvancementGaz Accelerometre TemperatureLune.pdf";
import pbp53 from "pages/Pbs/Physique/Physique/mecanique du point/Centrifugeuse.pdf";
import pbp54 from "pages/Pbs/Physique/Physique/mecanique du point/ChampEBordPlan ChambreProjectionTemporelle ThermiqueTransistor.pdf";
import pbp55 from "pages/Pbs/Physique/Physique/mecanique du point/ChampMagnetiqueTerrestre.pdf";
import pbp56 from "pages/Pbs/Physique/Physique/mecanique du point/COetCO2 CircuitsCouples.pdf";
import pbp57 from "pages/Pbs/Physique/Physique/mecanique du point/Deviation lumiere par etoiles.pdf";
import pbp58 from "pages/Pbs/Physique/Physique/mecanique du point/DisqueRotationInitiale PasseBandeTriangle CaviteLaser Gravitation.pdf";
import pbp59 from "pages/Pbs/Physique/Physique/mecanique du point/EcrantageB LevitationSphereSupraconductrice PollutionMercure.pdf";
import pbp60 from "pages/Pbs/Physique/Physique/mecanique du point/Electron dans un champ magnetique constant.pdf";
import pbp61 from "pages/Pbs/Physique/Physique/mecanique du point/Filtres OscillationsNonGalileen DoubleurEt Hyperfocale CycleEntropie.pdf";
import pbp62 from "pages/Pbs/Physique/Physique/mecanique du point/LevitationMagnetique MoteurLineaire Ressort.pdf";
import pbp63 from "pages/Pbs/Physique/Physique/mecanique du point/Mission Apollo.pdf";
import pbp64 from "pages/Pbs/Physique/Physique/mecanique du point/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbp65 from "pages/Pbs/Physique/Physique/mecanique du point/MoteurElectrostatique Variometre Laiton.pdf";
import pbp66 from "pages/Pbs/Physique/Physique/mecanique du point/MoteurEntropie InterferencesMiroirs ModelesAtome.pdf";
import pbp67 from "pages/Pbs/Physique/Physique/mecanique du point/Optique non lineaire.pdf";
import pbp68 from "pages/Pbs/Physique/Physique/mecanique du point/Orbitogramme Frottement.pdf";
import pbp69 from "pages/Pbs/Physique/Physique/mecanique du point/Pendule CinetiqueDensiteOptique.pdf";
import pbp70 from "pages/Pbs/Physique/Physique/mecanique du point/PointSurDisque Voiture.pdf";
import pbp71 from "pages/Pbs/Physique/Physique/mecanique du point/PortraitPhaseElec NonGalileenEnergie LiquefactionCompressionIsotherme.pdf";
import pbp72 from "pages/Pbs/Physique/Physique/mecanique du point/Ressort et amortisseur.pdf";
import pbp73 from "pages/Pbs/Physique/Physique/mecanique du point/Ressort et frottement.pdf";
import pbp74 from "pages/Pbs/Physique/Physique/mecanique du point/Ressorts et equations differentielles.pdf";
import pbp75 from "pages/Pbs/Physique/Physique/mecanique du point/SatelliteEllipseViriel GravitationPesanteur.pdf";
import pbp76 from "pages/Pbs/Physique/Physique/mecanique du point/Satellites d observation terrestre.pdf";
import pbp77 from "pages/Pbs/Physique/Physique/mecanique du point/Secousses Tunnel.pdf";
import pbp78 from "pages/Pbs/Physique/Physique/mecanique du point/SphereConductriceDansEUniforme PiegeDePenning.pdf";
import pbp79 from "pages/Pbs/Physique/Physique/mecanique du point/ThermoregulationCycliste EtoileDouble Modulation.pdf";
import pbp80 from "pages/Pbs/Physique/Physique/mecanique du point/VaisseauSpatial MicroscopeForceAtomique.pdf";
import pbp81 from "pages/Pbs/Physique/Physique/mecanique du point/VecteurExcentricite CompressionsMonothermes ViseurLunettes.pdf";
//Mecanique Solide
import pbp82 from "pages/Pbs/Physique/Physique/mecanique solide/BifurcationMecanique ChauffeEauSolaire DepotLaiton.pdf";
import pbp83 from "pages/Pbs/Physique/Physique/mecanique solide/ChuteTartine ReductionNiO DiffusionBarre.pdf";
import pbp84 from "pages/Pbs/Physique/Physique/mecanique solide/ConvoyeurRouleaux Monochromateur Vaporeformage.pdf";
import pbp85 from "pages/Pbs/Physique/Physique/mecanique solide/DisqueRotationInitiale PasseBandeTriangle CaviteLaser Gravitation.pdf";
import pbp86 from "pages/Pbs/Physique/Physique/mecanique solide/Jouets BinaireEauEthanol ModulationPhase_2.pdf";
import pbp87 from "pages/Pbs/Physique/Physique/mecanique solide/Oscillations.pdf";
import pbp88 from "pages/Pbs/Physique/Physique/mecanique solide/PointSurDisque Voiture.pdf";
import pbp89 from "pages/Pbs/Physique/Physique/mecanique solide/Roue sur un profil cylindrique.pdf";
import pbp90 from "pages/Pbs/Physique/Physique/mecanique solide/RoueFreinage RoueTapisRoulant Timochenko.pdf";
import pbp91 from "pages/Pbs/Physique/Physique/mecanique solide/Roues de bicyclette.pdf";
import pbp92 from "pages/Pbs/Physique/Physique/mecanique solide/Scooter.pdf";
import pbp93 from "pages/Pbs/Physique/Physique/mecanique solide/Secousses Tunnel.pdf";
import pbp94 from "pages/Pbs/Physique/Physique/mecanique solide/Telepherique Holographie.pdf";
import pbp95 from "pages/Pbs/Physique/Physique/mecanique solide/TensionRotation StickSlip CondensateurHF.pdf";
import pbp96 from "pages/Pbs/Physique/Physique/mecanique solide/Terebenthine Retro Antireflet.pdf";
import pbp97 from "pages/Pbs/Physique/Physique/mecanique solide/Velo diode roue libre.pdf";
import pbp98 from "pages/Pbs/Physique/Physique/mecanique solide/Wagonnet sur une pente.pdf";
//Ondes
import pbp99 from "pages/Pbs/Physique/Physique/ondes/Absorption OPPM par un gaz.pdf";
import pbp100 from "pages/Pbs/Physique/Physique/ondes/Biprisme EffetHall PressionElectromagnetisme.pdf";
import pbp101 from "pages/Pbs/Physique/Physique/ondes/Bon conducteur et guide TE.pdf";
import pbp102 from "pages/Pbs/Physique/Physique/ondes/ChauffagePlaqueFoucault ThermometreCristauxLiquides.pdf";
import pbp103 from "pages/Pbs/Physique/Physique/ondes/Coaxial GuideRectangulaire Doppler PotentielPhChrome.pdf";
import pbp104 from "pages/Pbs/Physique/Physique/ondes/Coefficients de reflexion et de transmission.pdf";
import pbp105 from "pages/Pbs/Physique/Physique/ondes/DisqueRotationInitiale PasseBandeTriangle CaviteLaser Gravitation.pdf";
import pbp106 from "pages/Pbs/Physique/Physique/ondes/Effet Faraday dans un plasma.pdf";
import pbp107 from "pages/Pbs/Physique/Physique/ondes/ExperienceFourier EffetPeau.pdf";
import pbp108 from "pages/Pbs/Physique/Physique/ondes/FibreOptique Aluminium.pdf";
import pbp109 from "pages/Pbs/Physique/Physique/ondes/Flux et circulations pour un coaxial.pdf";
import pbp110 from "pages/Pbs/Physique/Physique/ondes/Guide Avalanche Cadmium.pdf";
import pbp111 from "pages/Pbs/Physique/Physique/ondes/GuideTM RayonnementReception EpHChrome.pdf";
import pbp112 from "pages/Pbs/Physique/Physique/ondes/Indice Distillation.pdf";
import pbp113 from "pages/Pbs/Physique/Physique/ondes/Ligne a rubans impedance caracteristique.pdf";
import pbp114 from "pages/Pbs/Physique/Physique/ondes/Metal non parfait.pdf";
import pbp115 from "pages/Pbs/Physique/Physique/ondes/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbp116 from "pages/Pbs/Physique/Physique/ondes/OndequasimonochrResonateurGuide Plasma.pdf";
import pbp117 from "pages/Pbs/Physique/Physique/ondes/OndeReflexion Dielectrique Solenoide.pdf";
import pbp118 from "pages/Pbs/Physique/Physique/ondes/Ondes sur une corde.pdf";
import pbp119 from "pages/Pbs/Physique/Physique/ondes/Plasma GuideOndes CycleTroisTransformations.pdf";
import pbp120 from "pages/Pbs/Physique/Physique/ondes/Skeleton OndeMetal PreparationTitane.pdf";
import pbp121 from "pages/Pbs/Physique/Physique/ondes/TensionRotation StickSlip CondensateurHF.pdf";
import pbp122 from "pages/Pbs/Physique/Physique/ondes/Terebenthine Retro Antireflet.pdf";
//Ondulatoire
import pbp123 from "pages/Pbs/Physique/Physique/Ondulatoire/Biprisme EffetHall PressionElectromagnetisme.pdf";
import pbp124 from "pages/Pbs/Physique/Physique/Ondulatoire/ChauffagePlaqueFoucault ThermometreCristauxLiquides.pdf";
import pbp125 from "pages/Pbs/Physique/Physique/Ondulatoire/ConvoyeurRouleaux Monochromateur Vaporeformage.pdf";
import pbp126 from "pages/Pbs/Physique/Physique/Ondulatoire/Lambdametre.pdf";
import pbp127 from "pages/Pbs/Physique/Physique/Ondulatoire/MachZehnder Filtrage RefrigerationAirPulse.pdf";
import pbp128 from "pages/Pbs/Physique/Physique/Ondulatoire/MichelsonGravitation InterferencesDispersion MgCorrosion BinaireHNO3.pdf";
import pbp129 from "pages/Pbs/Physique/Physique/Ondulatoire/MoteurEntropie InterferencesMiroirs ModelesAtome.pdf";
import pbp130 from "pages/Pbs/Physique/Physique/Ondulatoire/Optique non lineaire.pdf";
import pbp131 from "pages/Pbs/Physique/Physique/Ondulatoire/Projecteur ObservationEtoiles.pdf";
import pbp132 from "pages/Pbs/Physique/Physique/Ondulatoire/Refractometrie avec un Mach Zehnder.pdf";
import pbp133 from "pages/Pbs/Physique/Physique/Ondulatoire/Refractometrie par interferometrie.pdf";
import pbp134 from "pages/Pbs/Physique/Physique/Ondulatoire/ReseauReflexion Defibrillateur Chlore.pdf";
import pbp135 from "pages/Pbs/Physique/Physique/Ondulatoire/Spectrophotometre.pdf";
import pbp136 from "pages/Pbs/Physique/Physique/Ondulatoire/Synthese d ouverture.pdf";
import pbp137 from "pages/Pbs/Physique/Physique/Ondulatoire/Telepherique Holographie.pdf";
import pbp138 from "pages/Pbs/Physique/Physique/Ondulatoire/TemperatureTerre RailLaplace MichelsonPlaneite.pdf";
import pbp139 from "pages/Pbs/Physique/Physique/Ondulatoire/Terebenthine Retro Antireflet.pdf";
import pbp140 from "pages/Pbs/Physique/Physique/Ondulatoire/TurbineVapeur SpectrometrieInterferentielle.pdf";
//Optique Geometrique
import pbp141 from "pages/Pbs/Physique/Physique/Optique G/BoucleDetection ChuteDansB DiffractionYoung.pdf";
import pbp142 from "pages/Pbs/Physique/Physique/Optique G/ChauffagePlaqueFoucault ThermometreCristauxLiquides.pdf";
import pbp143 from "pages/Pbs/Physique/Physique/Optique G/Diffraction de base.pdf";
import pbp144 from "pages/Pbs/Physique/Physique/Optique G/Diffraction et effets turbulence pour telescope.pdf";
import pbp145 from "pages/Pbs/Physique/Physique/Optique G/Diffraction et resolution du reseau.pdf";
import pbp146 from "pages/Pbs/Physique/Physique/Optique G/EffetMoyenne CouleursDiffraction.pdf";
import pbp147 from "pages/Pbs/Physique/Physique/Optique G/FibreOptique Aluminium.pdf";
import pbp148 from "pages/Pbs/Physique/Physique/Optique G/FiltrageOptique ChloreEnSolution DetenteEauDiazote.pdf";
import pbp149 from "pages/Pbs/Physique/Physique/Optique G/Filtres OscillationsNonGalileen DoubleurEt Hyperfocale CycleEntropie.pdf";
import pbp150 from "pages/Pbs/Physique/Physique/Optique G/MichelsonGravitation InterferencesDispersion MgCorrosion BinaireHNO3.pdf";
import pbp151 from "pages/Pbs/Physique/Physique/Optique G/Miroirs et lentilles.pdf";
import pbp152 from "pages/Pbs/Physique/Physique/Optique G/Projecteur ObservationEtoiles.pdf";
import pbp153 from "pages/Pbs/Physique/Physique/Optique G/Reseau a echelettes.pdf";
import pbp154 from "pages/Pbs/Physique/Physique/Optique G/ReseauReflexion Defibrillateur Chlore.pdf";
import pbp155 from "pages/Pbs/Physique/Physique/Optique G/Satellites d observation terrestre.pdf";
import pbp156 from "pages/Pbs/Physique/Physique/Optique G/Spectrophotometre.pdf";
import pbp157 from "pages/Pbs/Physique/Physique/Optique G/Synthese d ouverture.pdf";
import pbp158 from "pages/Pbs/Physique/Physique/Optique G/Telepherique Holographie.pdf";
import pbp159 from "pages/Pbs/Physique/Physique/Optique G/Terebenthine Retro Antireflet.pdf";
import pbp160 from "pages/Pbs/Physique/Physique/Optique G/VecteurExcentricite CompressionsMonothermes ViseurLunettes.pdf";
//Thermique
import pbp161 from "pages/Pbs/Physique/Physique/thermique/AvancementGaz Accelerometre TemperatureLune.pdf";
import pbp162 from "pages/Pbs/Physique/Physique/thermique/BifurcationMecanique ChauffeEauSolaire DepotLaiton.pdf";
import pbp163 from "pages/Pbs/Physique/Physique/thermique/CartesElectroniques.pdf";
import pbp164 from "pages/Pbs/Physique/Physique/thermique/ChampEBordPlan ChambreProjectionTemporelle ThermiqueTransistor.pdf";
import pbp165 from "pages/Pbs/Physique/Physique/thermique/ChauffagePlaqueFoucault ThermometreCristauxLiquides.pdf";
import pbp166 from "pages/Pbs/Physique/Physique/thermique/ChuteTartine ReductionNiO DiffusionBarre.pdf";
import pbp167 from "pages/Pbs/Physique/Physique/thermique/Cryostat RegimeNonStationnaire.pdf";
import pbp168 from "pages/Pbs/Physique/Physique/thermique/ExperienceFourier EffetPeau.pdf";
import pbp169 from "pages/Pbs/Physique/Physique/thermique/Formation couche de glace sur lac.pdf";
import pbp170 from "pages/Pbs/Physique/Physique/thermique/Isolation thermique d un tube vaporisateur.pdf";
import pbp171 from "pages/Pbs/Physique/Physique/thermique/Lampe a incandescence.pdf";
import pbp172 from "pages/Pbs/Physique/Physique/thermique/MicroOndes SulfiteSulfate.pdf";
import pbp173 from "pages/Pbs/Physique/Physique/thermique/Onde thermique.pdf";
import pbp174 from "pages/Pbs/Physique/Physique/thermique/ReacteurBrayton LaserEffetThermique.pdf";
import pbp175 from "pages/Pbs/Physique/Physique/thermique/TemperatureTerre RailLaplace MichelsonPlaneite.pdf";
import pbp176 from "pages/Pbs/Physique/Physique/thermique/Thermique appliquee au corps humain.pdf";
import pbp177 from "pages/Pbs/Physique/Physique/thermique/Thermique dans un fil electrique.pdf";
import pbp178 from "pages/Pbs/Physique/Physique/thermique/Thermique en regime stationnaire avec cylindre.pdf";
import pbp179 from "pages/Pbs/Physique/Physique/thermique/ThermoregulationCycliste EtoileDouble Modulation.pdf";
//Thermodynamique
import pbp180 from "pages/Pbs/Physique/Physique/thermodynamique/ChaineProductionAzote.pdf";
import pbp181 from "pages/Pbs/Physique/Physique/thermodynamique/Chauffage local en fonction de t.pdf";
import pbp182 from "pages/Pbs/Physique/Physique/thermodynamique/CompresseurAdiabatique ElihuThomson.pdf";
import pbp183 from "pages/Pbs/Physique/Physique/thermodynamique/CycleDiesel.pdf";
import pbp184 from "pages/Pbs/Physique/Physique/thermodynamique/FiltrageOptique ChloreEnSolution DetenteEauDiazote.pdf";
import pbp185 from "pages/Pbs/Physique/Physique/thermodynamique/Filtres OscillationsNonGalileen DoubleurEt Hyperfocale CycleEntropie.pdf";
import pbp186 from "pages/Pbs/Physique/Physique/thermodynamique/Gaz parfait et eau liquide et vapeur.pdf";
import pbp187 from "pages/Pbs/Physique/Physique/thermodynamique/MachZehnder Filtrage RefrigerationAirPulse.pdf";
import pbp188 from "pages/Pbs/Physique/Physique/thermodynamique/MoteurEntropie InterferencesMiroirs ModelesAtome.pdf";
import pbp189 from "pages/Pbs/Physique/Physique/thermodynamique/Plasma GuideOndes CycleTroisTransformations.pdf";
import pbp190 from "pages/Pbs/Physique/Physique/thermodynamique/PortraitPhaseElec NonGalileenEnergie LiquefactionCompressionIsotherme.pdf";
import pbp191 from "pages/Pbs/Physique/Physique/thermodynamique/RailLaplace MoteurCurzon.pdf";
import pbp192 from "pages/Pbs/Physique/Physique/thermodynamique/ReacteurBrayton LaserEffetThermique.pdf";
import pbp193 from "pages/Pbs/Physique/Physique/thermodynamique/RendementBeauDeRochas Alternateur OxydesCuivre.pdf";
import pbp194 from "pages/Pbs/Physique/Physique/thermodynamique/TurbineVapeur SpectrometrieInterferentielle.pdf";
import pbp195 from "pages/Pbs/Physique/Physique/thermodynamique/VecteurExcentricite CompressionsMonothermes ViseurLunettes.pdf";
//Chimie pbs
//Atomistique
import pbc1 from "pages/Pbs/Chimie/Ch/Atomistique/Argent.pdf";
import pbc2 from "pages/Pbs/Chimie/Ch/Atomistique/Brome.pdf";
import pbc3 from "pages/Pbs/Chimie/Ch/Atomistique/Chrome.pdf";
import pbc4 from "pages/Pbs/Chimie/Ch/Atomistique/Mercure.pdf";
import pbc5 from "pages/Pbs/Chimie/Ch/Atomistique/Silicium.pdf";
import pbc6 from "pages/Pbs/Chimie/Ch/Atomistique/Soufre.pdf";
import pbc7 from "pages/Pbs/Chimie/Ch/Atomistique/Titane.pdf";
//Cinetique
import pbc8 from "pages/Pbs/Chimie/Ch/Cinetique/Chrome.pdf";
import pbc9 from "pages/Pbs/Chimie/Ch/Cinetique/FibreOptique Aluminium.pdf";
import pbc10 from "pages/Pbs/Chimie/Ch/Cinetique/FiltrageOptique ChloreEnSolution DetenteEauDiazote.pdf";
import pbc11 from "pages/Pbs/Chimie/Ch/Cinetique/Mercure.pdf";
import pbc12 from "pages/Pbs/Chimie/Ch/Cinetique/Pendule CinetiqueDensiteOptique.pdf";
import pbc13 from "pages/Pbs/Chimie/Ch/Cinetique/Silicium.pdf";
import pbc14 from "pages/Pbs/Chimie/Ch/Cinetique/Soufre.pdf";
//Cristallo
import pbc15 from "pages/Pbs/Chimie/Ch/Cristallo/Argent.pdf";
import pbc16 from "pages/Pbs/Chimie/Ch/Cristallo/Brome.pdf";
import pbc17 from "pages/Pbs/Chimie/Ch/Cristallo/Chrome.pdf";
import pbc18 from "pages/Pbs/Chimie/Ch/Cristallo/Jouets BinaireEauEthanol ModulationPhase.pdf";
import pbc19 from "pages/Pbs/Chimie/Ch/Cristallo/MichelsonGravitation InterferencesDispersion MgCorrosion BinaireHNO3.pdf";
import pbc20 from "pages/Pbs/Chimie/Ch/Cristallo/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbc21 from "pages/Pbs/Chimie/Ch/Cristallo/Silicium.pdf";
import pbc22 from "pages/Pbs/Chimie/Ch/Cristallo/Terebenthine Retro Antireflet.pdf";
import pbc23 from "pages/Pbs/Chimie/Ch/Cristallo/Titane.pdf";
//Diag binaire
import pbc24 from "pages/Pbs/Chimie/Ch/Diag bin/Indice Distillation.pdf";
import pbc25 from "pages/Pbs/Chimie/Ch/Diag bin/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbc26 from "pages/Pbs/Chimie/Ch/Diag bin/RendementBeauDeRochas Alternateur OxydesCuivre.pdf";
import pbc27 from "pages/Pbs/Chimie/Ch/Diag bin/Skeleton OndeMetal PreparationTitane.pdf";
//Diag D'ellingham
import pbc28 from "pages/Pbs/Chimie/Ch/diag d'ellingham/Mercure.pdf";
import pbc29 from "pages/Pbs/Chimie/Ch/diag d'ellingham/ModeleThomsonEffetZeeman ChromeEllingham BinaireEauHF.pdf";
import pbc30 from "pages/Pbs/Chimie/Ch/diag d'ellingham/RendementBeauDeRochas Alternateur OxydesCuivre.pdf";
import pbc31 from "pages/Pbs/Chimie/Ch/diag d'ellingham/Skeleton OndeMetal PreparationTitane.pdf";
//diag E-ph
import pbc32 from "pages/Pbs/Chimie/Ch/diag E-pH/Argent.pdf";
import pbc33 from "pages/Pbs/Chimie/Ch/diag E-pH/BifurcationMecanique ChauffeEauSolaire DepotLaiton.pdf";
import pbc34 from "pages/Pbs/Chimie/Ch/diag E-pH/Brome.pdf";
import pbc35 from "pages/Pbs/Chimie/Ch/diag E-pH/Coaxial GuideRectangulaire Doppler PotentielPhChrome.pdf";
import pbc36 from "pages/Pbs/Chimie/Ch/diag E-pH/EcrantageB LevitationSphereSupraconductrice PollutionMercure.pdf";
import pbc37 from "pages/Pbs/Chimie/Ch/diag E-pH/FibreOptique Aluminium.pdf";
import pbc38 from "pages/Pbs/Chimie/Ch/diag E-pH/Guide Avalanche Cadmium.pdf";
import pbc39 from "pages/Pbs/Chimie/Ch/diag E-pH/GuideTM RayonnementReception EpHChrome.pdf";
import pbc40 from "pages/Pbs/Chimie/Ch/diag E-pH/MichelsonGravitation InterferencesDispersion MgCorrosion BinaireHNO3.pdf";
import pbc41 from "pages/Pbs/Chimie/Ch/diag E-pH/ReseauReflexion Defibrillateur Chlore.pdf";
import pbc42 from "pages/Pbs/Chimie/Ch/diag E-pH/SolubiliteAluminium OrDiagrammeEpCN.pdf";
//Solution aqueuse
import pbc43 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc44 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc45 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc46 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc47 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc48 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc49 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc50 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc51 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc52 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
import pbc53 from "pages/Pbs/Chimie/Ch/Solution a/Argent.pdf";
//Structure
import pbc54 from "pages/Pbs/Chimie/Ch/Structure/Chrome.pdf";
import pbc55 from "pages/Pbs/Chimie/Ch/Structure/COetCO2 CircuitsCouples.pdf";
import pbc56 from "pages/Pbs/Chimie/Ch/Structure/FiltrageOptique ChloreEnSolution DetenteEauDiazote.pdf";
import pbc57 from "pages/Pbs/Chimie/Ch/Structure/Soufre.pdf";
import pbc58 from "pages/Pbs/Chimie/Ch/Structure/Titane.pdf";
//Thermochimie
import pbc59 from "pages/Pbs/Chimie/Ch/Thermochimie/Argent.pdf";
import pbc60 from "pages/Pbs/Chimie/Ch/Thermochimie/AvancementGaz Accelerometre TemperatureLune.pdf";
import pbc61 from "pages/Pbs/Chimie/Ch/Thermochimie/Brome.pdf";
import pbc62 from "pages/Pbs/Chimie/Ch/Thermochimie/Chrome.pdf";
import pbc63 from "pages/Pbs/Chimie/Ch/Thermochimie/ChuteTartine ReductionNiO DiffusionBarre.pdf";
import pbc64 from "pages/Pbs/Chimie/Ch/Thermochimie/ConvoyeurRouleaux Monochromateur Vaporeformage.pdf";
import pbc65 from "pages/Pbs/Chimie/Ch/Thermochimie/FiltrageOptique ChloreEnSolution DetenteEauDiazote.pdf";
import pbc66 from "pages/Pbs/Chimie/Ch/Thermochimie/Mercure.pdf";
import pbc67 from "pages/Pbs/Chimie/Ch/Thermochimie/Silicium.pdf";
import pbc68 from "pages/Pbs/Chimie/Ch/Thermochimie/Soufre.pdf";
import pbc69 from "pages/Pbs/Chimie/Ch/Thermochimie/Titane.pdf";
//Pbs Math Sup
import pbm1 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Polynome de Bezout.pdf";
import pbm2 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Polynome de Hilbert.pdf";
import pbm3 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Polynome de Legendre.pdf";
import pbm4 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Polynome de Tchebychev.pdf";
import pbm5 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Polynomes irreductibles dans Q[X].pdf";
import pbm6 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Theoreme de Tchebychev.pdf";
import pbm7 from "pages/Pbs/Math/Elamdaoui/MPSI/polynomes-classique/Theoreme de Wedderburn.pdf";
import pbm8 from "pages/Pbs/Math/Elamdaoui/MPSI/Déterminant/Calcul de determinant.pdf";
import pbm9 from "pages/Pbs/Math/Elamdaoui/MPSI/Déterminant/Det d_une matrice dependant d_un parametre.pdf";
import pbm10 from "pages/Pbs/Math/Elamdaoui/MPSI/Déterminant/Det de vandermonde et de cauchy.pdf";
import pbm11 from "pages/Pbs/Math/Elamdaoui/MPSI/Déterminant/Systeme tridiagonal symetrique.pdf";
import pbm12 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Equation matricielle.pdf";
import pbm13 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Hyperplans de Mn(K).pdf";
import pbm14 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Matrice productive.pdf";
import pbm15 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Matrices magiques d_ordre 3.pdf";
import pbm16 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Matrices semblables è son inverse.pdf";
import pbm17 from "pages/Pbs/Math/Elamdaoui/MPSI/Matrices/Puissance d_une matrice.pdf";
import pbm18 from "pages/Pbs/Math/Elamdaoui/MPSI/Algébre lin/TD révision.pdf";
import pbm19 from "pages/Pbs/Math/Elamdaoui/MPSI/Algébre lin/algebre-lineaire.pdf";
//Pbs Math Spe
import pbms1 from "pages/Pbs/Math/Elamdaoui/MP/1-Groupes/DL corrigé_Groupe operant.pdf";
import pbms2 from "pages/Pbs/Math/Elamdaoui/MP/1-Groupes/Exposant d_un groupe.pdf";
import pbms3 from "pages/Pbs/Math/Elamdaoui/MP/1-Groupes/Les entiers de gauss.pdf";
import pbms4 from "pages/Pbs/Math/Elamdaoui/MP/1-Groupes/Sous groupes de (R,+).pdf";
import pbms5 from "pages/Pbs/Math/Elamdaoui/MP/1-Groupes/TD corrigé.pdf";
import pbms6 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Automorphisme.pdf";
import pbms7 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Classiques.pdf";
import pbms8 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Dunford.pdf";
import pbms9 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Matrice stockastique.pdf";
import pbms10 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Noyaux_images.pdf";
import pbms11 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Poly_minimal.pdf";
import pbms12 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/produit de kronecker-corrigé.pdf";
import pbms13 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/produit de kronecker_enoncé.pdf";
import pbms14 from "pages/Pbs/Math/Elamdaoui/MP/3-Reduction/Rang_1.pdf";
import pbms15 from "pages/Pbs/Math/Elamdaoui/MP/4-Topologie/calcul de distance par la norme de Schur.pdf";
import pbms16 from "pages/Pbs/Math/Elamdaoui/MP/4-Topologie/classiques topologie Mn(K).pdf";
import pbms17 from "pages/Pbs/Math/Elamdaoui/MP/4-Topologie/formes linéaires continues, hyperplans.pdf";
import pbms18 from "pages/Pbs/Math/Elamdaoui/MP/4-Topologie/normes subordonnées.pdf";
import pbms19 from "pages/Pbs/Math/Elamdaoui/MP/4-Topologie/suites définis par itération, point fixe.pdf";
import pbms20 from "pages/Pbs/Math/Elamdaoui/MP/5-Series Num/SER-Stirling-3.pdf";
import pbms21 from "pages/Pbs/Math/Elamdaoui/MP/6-Sommabilité/classiques sommabilité.pdf";
import pbms22 from "pages/Pbs/Math/Elamdaoui/MP/7-Dérivation-intégration/Intégrale de Gauss.pdf";
import pbms23 from "pages/Pbs/Math/Elamdaoui/MP/7-Dérivation-intégration/Les polynômes de Bernoulli.pdf";
import pbms24 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/comparaison des modes de cv.pdf";
import pbms25 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/Fonction Digamma.pdf";
import pbms26 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/Fonctions d_Euler.pdf";
import pbms27 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/Les fonctions Eulériennes.pdf";
import pbms28 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/théorème d_Abel.pdf";
import pbms29 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/théorème de Stone Weirstrass.pdf";
import pbms30 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/zéta et zéta alternée de Riemann.pdf";
import pbms31 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/étude d_une série ......pdf";
import pbms32 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/étude d_une série .....pdf";
import pbms33 from "pages/Pbs/Math/Elamdaoui/MP/8-Suites et séries de fnct/étude d_une série ....pdf";
import pbms34 from "pages/Pbs/Math/Elamdaoui/MP/9-Séries entiers/Autour les séries entières.pdf";
import pbms35 from "pages/Pbs/Math/Elamdaoui/MP/9-Séries entiers/nombre de dérangement.pdf";
import pbms36 from "pages/Pbs/Math/Elamdaoui/MP/9-Séries entiers/Théorèmes d_Abel et Tauberien faible.pdf";
import pbms37 from "pages/Pbs/Math/Elamdaoui/MP/10-Equa-Diff/Cal-dif-Equation-chaleur (1)-1.pdf";
import pbms38 from "pages/Pbs/Math/Elamdaoui/MP/10-Equa-Diff/REV-ERA.pdf";
import pbms39 from "pages/Pbs/Math/Elamdaoui/MP/11-Fonction holomorphes/REV-ERA.pdf";
import pbms40 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Fon_Gen_Mom.pdf";
import pbms41 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Formule_de_Stirling.pdf";
import pbms42 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Loi_de_Zipf.pdf";
import pbms43 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_convergence.pdf";
import pbms44 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_Fonc_caract.pdf";
import pbms45 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_fonc_gen_moments.pdf";
import pbms46 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_For_stirling.pdf";
import pbms47 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_geo_exp_conv.pdf";
import pbms48 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_khi_deux.pdf";
import pbms49 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_loi_Zipf.pdf";
import pbms50 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_min_max_quotient.pdf";
import pbms51 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_stone_weierst.pdf";
import pbms52 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Proba_var_sans_memoire.pdf";
import pbms53 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Stone_Weiestrass.pdf";
import pbms54 from "pages/Pbs/Math/Elamdaoui/Classique_probas/Var_Sous_Gau.pdf";
//InfoSpe
import CinfoS1 from "pages/Cours/Spe/Info/src/Pdfs/1 - Bases de données - Cours.pdf";
import RinfoS1 from "pages/Cours/Spe/Info/src/Pdfs/1 - Bases de données - Résumé.pdf";
import T1infoS1 from "pages/Cours/Spe/Info/src/Pdfs/1-1 - TD - Applications du cours.pdf";
import T1infoS1C from "pages/Cours/Spe/Info/src/Pdfs/1-1 - TD - Applications du cours - Correction.pdf";
import T2infoS1 from "pages/Cours/Spe/Info/src/Pdfs/1-2 - TD - Station de ski.pdf";
import T2infoS1C from "pages/Cours/Spe/Info/src/Pdfs/1-2 - TD - Station de ski - Correction.pdf";
import T3infoS1 from "pages/Cours/Spe/Info/src/Pdfs/1-3 - IA & BDD - Sujet.pdf";
import T3infoS1C from "pages/Cours/Spe/Info/src/Pdfs/1-3 - IA & BDD - Correction - Apprentissage.py";
import RinfoS2 from "pages/Cours/Spe/Info/src/Pdfs/2 - Dictionnaires et programmation dynamique - Résumé.pdf";
import T1infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-1 - TD - Dictionnaires - Sujet.pdf";
import T1infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-1 - TD - Dictionnaires - Correction.py";
import T2infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-2 - TD - Hachage - Sujet.pdf";
import T2infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-2 - TD - Hachage - Correction.py";
import T3infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-3 - TD - Le compte est bon - Sujet.pdf";
import T3infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-3 - TD - Le compte est bon - Correction.py";
import T4infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-4 - TD - Partition équilibrée d'entiers positifs.pdf";
import T4infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-4 - TD - Partition équilibrée d'entiers positifs.py";
import T5infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-5 - TD - Ordonnancement de tâches pondérées.pdf";
import T5infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-5 - TD - Ordonnancement de tâches pondérées.py";
import T6infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-6 - TD - Plus longue sous-suite commune.pdf";
import T6infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-6 - TD - Plus longue sous-suite commune.py";
import T7infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-7 - TD - Distance d’édition - Levenshtein.pdf";
import T7infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-7 - TD - Distance d’édition - Levenshtein.py";
import T8infoS2 from "pages/Cours/Spe/Info/src/Pdfs/2-8 - TD - Distances dans un graphe - Floyd-Warshall.pdf";
import T8infoS2C from "pages/Cours/Spe/Info/src/Pdfs/2-8 - TD - Distances dans un graphe - Floyd-Warshall.py";
import RinfoS3 from "pages/Cours/Spe/Info/src/Pdfs/3 - Intelligence artificielle - Résumé.pdf";
import T1infoS3 from "pages/Cours/Spe/Info/src/Pdfs/3-1 - Algorithme KNN - Sujet.pdf";
import T1infoS3C from "pages/Cours/Spe/Info/src/Pdfs/3-1 - Algorithme KNN - Correction.py";
import T2infoS3 from "pages/Cours/Spe/Info/src/Pdfs/3-2 - Algorithme K-moyennes - Sujet.pdf";
import T2infoS3C from "pages/Cours/Spe/Info/src/Pdfs/3-2 - Algorithme K-moyennes - Correction.py";
import T3infoS3 from "pages/Cours/Spe/Info/src/Pdfs/3-3 - Jeu de Babylone - Sujet.pdf";
import T3infoS3C from "pages/Cours/Spe/Info/src/Pdfs/3-3 - Jeu de Babylone - Correction.py";
import T4infoS3 from "pages/Cours/Spe/Info/src/Pdfs/3-4 - KNN 2D - Sujet.pdf";
import T4infoS3C from "pages/Cours/Spe/Info/src/Pdfs/3-4 - KNN 2D - Correction.py";

//InfoSup
import Cinfo1 from "pages/Cours/Sup/Info/src/Pdfs/1 - Ordinateur.pdf";
import Cinfo2 from "pages/Cours/Sup/Info/src/Pdfs/2 - Logiciel - Cours.pdf";
import Rinfo2 from "pages/Cours/Sup/Info/src/Pdfs/2 - Logiciel - Résumé.pdf";
import Cinfo3 from "pages/Cours/Sup/Info/src/Pdfs/3 - Commentaires - Cours.pdf";
import Cinfo4 from "pages/Cours/Sup/Info/src/Pdfs/4 - Variables - Cours.pdf";
import Rinfo4 from "pages/Cours/Sup/Info/src/Pdfs/4 - Variables - Résumé.pdf";
import Tinfo4 from "pages/Cours/Sup/Info/src/Pdfs/4-1 - TD - Variables - Sujet.pdf";
import Tinfo4C from "pages/Cours/Sup/Info/src/Pdfs/4-1 - TD - Variables - Correction.pdf";
import Cinfo5 from "pages/Cours/Sup/Info/src/Pdfs/5 - Print - Cours.pdf";
import Cinfo6 from "pages/Cours/Sup/Info/src/Pdfs/6 - Librairies - Cours.pdf";
import Cinfo7 from "pages/Cours/Sup/Info/src/Pdfs/7 - Listes - Cours.pdf";
import Rinfo7 from "pages/Cours/Sup/Info/src/Pdfs/7 - Listes - Résumé.pdf";
import Tinfo7 from "pages/Cours/Sup/Info/src/Pdfs/7-1 - TD - Listes - Sujet.pdf";
import Tinfo7C from "pages/Cours/Sup/Info/src/Pdfs/7-1 - TD - Listes - Correction.pdf";
import Cinfo8 from "pages/Cours/Sup/Info/src/Pdfs/8 - for if while - Cours.pdf";
import Rinfo8 from "pages/Cours/Sup/Info/src/Pdfs/8 - for if while - Résumé.pdf";
import T1info8 from "pages/Cours/Sup/Info/src/Pdfs/8-1 - TD - for if while - Sujet.pdf";
import T1info8C from "pages/Cours/Sup/Info/src/Pdfs/8-1 - TD - for if while - Correction.pdf";
import T2info8 from "pages/Cours/Sup/Info/src/Pdfs/8-2 - TD - Balle rebondissante - Sujet.pdf";
import T2info8C from "pages/Cours/Sup/Info/src/Pdfs/8-2 - TD - Balle rebondissante - 1 - Balle.py";
import Cinfo9 from "pages/Cours/Sup/Info/src/Pdfs/9 - Fonctions - Cours.pdf";
import Rinfo9 from "pages/Cours/Sup/Info/src/Pdfs/9 - Fonctions - Résumé.pdf";
import Cinfo10 from "pages/Cours/Sup/Info/src/Pdfs/10 - Matplotlib - Cours.pdf";
import Rinfo10 from "pages/Cours/Sup/Info/src/Pdfs/10 - Matplotlib - Résumé.pdf";
import Cinfo11 from "pages/Cours/Sup/Info/src/Pdfs/11 - Numpy - Array - Cours.pdf";
import Rinfo11 from "pages/Cours/Sup/Info/src/Pdfs/11 - Numpy - Array - Résumé.pdf";
import Cinfo12 from "pages/Cours/Sup/Info/src/Pdfs/12 - Fichiers - Cours.pdf";
import Rinfo12 from "pages/Cours/Sup/Info/src/Pdfs/12 - Fichiers - Résumé.pdf";
import Tinfo12 from "pages/Cours/Sup/Info/src/Pdfs/12-1 - TD - Anagrammes.pdf";
import Tinfo12C from "pages/Cours/Sup/Info/src/Pdfs/12-1 - TD - Anagrammes.py";
import Cinfo13 from "pages/Cours/Sup/Info/src/Pdfs/13 - Dictionnaires - Cours.pdf";
import Rinfo13 from "pages/Cours/Sup/Info/src/Pdfs/13 - Dictionnaires - Résumé.pdf";
import Cinfo14 from "pages/Cours/Sup/Info/src/Pdfs/14 - Boîte à outils - Cours.pdf";
import Rinfo14 from "pages/Cours/Sup/Info/src/Pdfs/14 - Boîte à outils - Résumé.pdf";
import Cinfo15 from "pages/Cours/Sup/Info/src/Pdfs/15 - Aide Python - Cours.pdf";
import Rinfo15 from "pages/Cours/Sup/Info/src/Pdfs/15 - Aide Python - Résumé.pdf";
import Cinfo16 from "pages/Cours/Sup/Info/src/Pdfs/16 - Quelques erreurs - Cours.pdf";
import Rinfo16 from "pages/Cours/Sup/Info/src/Pdfs/16 - Quelques erreurs - Résumé.pdf";
import Cinfo17 from "pages/Cours/Sup/Info/src/Pdfs/17 - Rédaction - Cours.pdf";
import T1info18 from "pages/Cours/Sup/Info/src/Pdfs/ict/2-1 - TD - Facteur dans un texte.pdf";
import T1info18C from "pages/Cours/Sup/Info/src/Pdfs/ict/2-1 - TD - Facteur dans un texte.py";
import T2info18 from "pages/Cours/Sup/Info/src/Pdfs/ict/2-2 - TD - Valeurs proches dans un tableau.pdf";
import T2info18C from "pages/Cours/Sup/Info/src/Pdfs/ict/2-2 - TD - Valeurs proches dans un tableau.py";
import T3info18 from "pages/Cours/Sup/Info/src/Pdfs/ict/2-3 - TD - Tri bulles.pdf";
import T3info18C from "pages/Cours/Sup/Info/src/Pdfs/ict/2-3 - TD - Tri bulles.py";
import T1info19 from "pages/Cours/Sup/Info/src/Pdfs/ict/3-1 - TD - Lecture dans un fichier.pdf";
import T1info19C from "pages/Cours/Sup/Info/src/Pdfs/ict/3-1 - TD - Lecture dans un fichier.py";
import T2info19 from "pages/Cours/Sup/Info/src/Pdfs/ict/3-2 - TD - Représentation graphique.pdf";
import T2info19C from "pages/Cours/Sup/Info/src/Pdfs/ict/3-2 - TD - Représentation graphique.py";
import T3info19 from "pages/Cours/Sup/Info/src/Pdfs/ict/3-3 - TD - Calcul statistique.pdf";
import T3info19C from "pages/Cours/Sup/Info/src/Pdfs/ict/3-3 - TD - Calcul statistique.py";
import T1info20 from "pages/Cours/Sup/Info/src/Pdfs/ict/4-1 - TD - Recherche dans un tableau trié.pdf";
import T1info20C from "pages/Cours/Sup/Info/src/Pdfs/ict/4-1 - TD - Recherche dans un tableau trié.py";
import T2info20 from "pages/Cours/Sup/Info/src/Pdfs/ict/4-2 - TD - Exponentiation rapide.pdf";
import T2info20C from "pages/Cours/Sup/Info/src/Pdfs/ict/4-2 - TD - Exponentiation rapide.py";
import T3info20 from "pages/Cours/Sup/Info/src/Pdfs/ict/4-3 - TD - Tri insertion.pdf";
import T3info20C from "pages/Cours/Sup/Info/src/Pdfs/ict/4-3 - TD - Tri insertion.py";
import T4info20 from "pages/Cours/Sup/Info/src/Pdfs/ict/4-4 - TD - Maximum.pdf";
import T4info20C from "pages/Cours/Sup/Info/src/Pdfs/ict/4-4 - TD - Maximum.py";
import Cinfo21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5 - Cours - Fonctions récursives.pdf";
import Rinfo21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5 - Résumé - Fonctions récursives.pdf";
import T0info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-0 - TD - Entrainement.pdf";
import T0info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-0 - TD - Entrainement.py";
import T1info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-1 - TD - Recherche dichotomique dans un tableau trié.pdf";
import T1info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-1 - TD - Recherche dichotomique dans un tableau trié.py";
import T2info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-2 - TD - Exponentiation rapide.pdf";
import T2info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-2 - TD - Exponentiation rapide.py";
import T3info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-3 - TD - Figures récursives.pdf";
import T3info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-3 - TD - Figures récursives.py";
import T4info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-4 - TD - Enumération de sous-listes et permutations.pdf";
import T4info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-4 - TD - Enumération de sous-listes et permutations.py";
import T5info21 from "pages/Cours/Sup/Info/src/Pdfs/ict/5-5 - TD - Exercices divers.pdf";
import T5info21C from "pages/Cours/Sup/Info/src/Pdfs/ict/5-5 - TD - Exercices divers.py";
import T1info22 from "pages/Cours/Sup/Info/src/Pdfs/ict/6-1 - TD - Rendu de monnaie.pdf";
import T1info22C from "pages/Cours/Sup/Info/src/Pdfs/ict/6-1 - TD - Rendu de monnaie.py";
import T2info22 from "pages/Cours/Sup/Info/src/Pdfs/ict/6-2 - TD - Allocation de ressources.pdf";
import T2info22C from "pages/Cours/Sup/Info/src/Pdfs/ict/6-2 - TD - Allocation de ressources.py";
import Cinfo23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7 - Cours - Images.pdf";
import Rinfo23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7 - Résumé - Images.pdf";
import T1info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-1 - TD - Météo.pdf";
import T1info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-1 - TD - Météo.py";
import T2info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-2 - TD - Détection de contours.pdf";
import T2info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-2 - TD - Détection de contours.py";
import T3info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-3 - TD - Transformations.pdf";
import T3info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-3 - TD - Transformations - Correction.py";
import T4info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-4 - TD - Missile guidé.pdf";
import T4info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-4 - TD - Missile guidé.py";
import T5info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-5 - TD - Tour de magie.pdf";
import T5info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-5 - TD - Tour de magie.py";
import T6info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-6 - TD - Images cachées.pdf";
import T6info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-6 - TD - Images cachées.py";
import T7info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-7 - TD - Fractales de Mandelbrot.pdf";
import T7info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-7 - TD - Fractales de Mandelbrot.py";
import T8info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-8 - TD - Fractales de Newton.pdf";
import T8info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-8 - TD - Fractales de Newton.py";
import T9info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-9 - TD - Photomaton.pdf";
import T9info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-9 - TD - Photomaton.py";
import T10info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-10 - Avant Après.pdf";
import T10info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-10 - Avant Après.py";
import T11info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-11 - TD - Les pixels.pdf";
import T11info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-11 - TD - Les pixels.py";
import T12info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-12 - TD - Différences.pdf";
import T12info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-12 - TD - Différences.py";
import T13info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-13 - TD - Agent secret.pdf";
import T13info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-13 - TD - Agent secret.py";
import T14info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-14 - TD - Miroir.pdf";
import T14info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-14 - TD - Miroir.py";
import T15info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-15 - Détection de zones et motifs.pdf";
import T15info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-15 - Détection de zones et motifs - Correction.py";
import T16info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-16 - Recadrage bilinéaire.pdf";
import T16info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-16 - Recadrage bilinéaire - Correction.py";
import T17info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-17 - Recadrage projectif.pdf";
import T17info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-17 - Recadrage projectif - Correction.py";
import T18info23 from "pages/Cours/Sup/Info/src/Pdfs/ict/7-18 - Etude de texte.pdf";
import T18info23C from "pages/Cours/Sup/Info/src/Pdfs/ict/7-18 - Etude de texte.py";
import Cinfo24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8 - Cours - Tris.pdf";
import Rinfo24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8 - Résumé - Tris.pdf";
import T1info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-1 - TD - Tri par insertion.pdf";
import T1info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-1 - TD - Tri par insertion.py";
import T2info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-2 - TD - Tri par sélection.pdf";
import T2info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-2 - TD - Tri par sélection.py";
import T3info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-3 - TD - Tri fusion.pdf";
import T3info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-3 - TD - Tri fusion.py";
import T4info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-4 - TD - Tri rapide.pdf";
import T4info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-4 - TD - Tri rapide.py";
import T5info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-5 - TD - Tri par comptage.pdf";
import T5info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-5 - TD - Tri par comptage.py";
import T6info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-6 - TD - Tri radix.pdf";
import T6info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-6 - TD - Tri radix.py";
import T7info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-7 - TD - Scm et Alpha-tri.pdf";
import T7info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-7 - TD - Scm et Alpha-tri.py";
import T8info24 from "pages/Cours/Sup/Info/src/Pdfs/ict/8-8 - TD - Analyse.pdf";
import T8info24C from "pages/Cours/Sup/Info/src/Pdfs/ict/8-8 - TD - Analyse.py";
import Cinfo25 from "pages/Cours/Sup/Info/src/Pdfs/ict/9 - Algorithmique - Cours.pdf";
import Rinfo25 from "pages/Cours/Sup/Info/src/Pdfs/ict/9 - Algorithmique - Résumé.pdf";
import Cinfo26 from "pages/Cours/Sup/Info/src/Pdfs/ict/10 - Cours - Représentation des nombres.pdf";
import Rinfo26 from "pages/Cours/Sup/Info/src/Pdfs/ict/10 - Résumé - Représentation des nombres.pdf";
import T1info26 from "pages/Cours/Sup/Info/src/Pdfs/ict/10-1 - TD - Entiers binaires.pdf";
import T1info26C from "pages/Cours/Sup/Info/src/Pdfs/ict/10-1 - TD - Entiers binaires.py";
import T2info26 from "pages/Cours/Sup/Info/src/Pdfs/ict/10-2 - TD - Entiers multiprécision.pdf";
import T2info26C from "pages/Cours/Sup/Info/src/Pdfs/ict/10-2 - TD - Entiers multiprécision.py";
import Cinfo27 from "pages/Cours/Sup/Info/src/Pdfs/ict/11 - Bases de graphes - Cours.pdf";
import Rinfo27 from "pages/Cours/Sup/Info/src/Pdfs/ict/11 - Bases de graphes - Résumé.pdf";
import T1info27 from "pages/Cours/Sup/Info/src/Pdfs/ict/11-1 - TD - Parcours.pdf";
import T1info27C from "pages/Cours/Sup/Info/src/Pdfs/ict/11-1 - TD - Parcours.py";
import T2info27 from "pages/Cours/Sup/Info/src/Pdfs/ict/11-2 - TD - Dijkstra.pdf";
import T2info27C from "pages/Cours/Sup/Info/src/Pdfs/ict/11-2 - TD - Dijkstra.py";
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
        route: "/Cours/Math",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Sup/Math",
            dropdown: true,
            component: <MathSup />,
            collapse: [
              {
                name: "Sup",
                route: "/Cours/Sup/Math",
                dropdown: true,
                component: <MathSup />,
              },
              {
                name: "Sup",
                route: "/Cours/Math",
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
                route: "/Contact",
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
            route: "/Cours/Spe/Math",
            dropdown: true,
            component: <MathSpe />,
            collapse: [
              {
                name: "Spe",
                route: "/Cours/Spe/Math",
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
        route: "/Cours/Physique",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Physique/Sup",
            collapse: [
              {
                name: "Sup",
                route: "/landing-pages/about-us",
                component: <Formation data={datailham} />,
              },
              {
                name: "",
                route: "/Cours/Physique",
                component: <PhysiqueC />,
              },
              {
                name: "",
                route: "/Cours/Physique/Sup",
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
            route: "/Cours/Physique/Spe",
            collapse: [
              {
                name: "",
                route: "/Cours/Physique/Spe",
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
        route: "/Cours/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Chimie/Sup",
            collapse: [
              {
                name: "",
                route: "/Cours/Chimie",
                component: <ChimieC />,
              },
              {
                name: "",
                route: "/Cours/Chimie/Sup",
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
            route: "/Cours/Chimie/Spe",
            collapse: [
              {
                name: "Spe",
                route: "/Cours/Chimie/Spe",
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
        route: "/Cours/SI",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Sup/SI",
            collapse: [
              {
                name: "Sup",
                route: "/Cours/Sup/SI",
                component: <SISup />,
              },
              {
                name: "",
                route: "/Cours/SI",
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
            route: "/Cours/Spe/SI",
            collapse: [
              {
                name: "",
                route: "/Cours/Spe/SI",
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
        route: "/Cours/Info",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Info/Sup",
            collapse: [
              {
                name: "",
                route: "/Cours/Info",
                component: <InfoC />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup",
                component: <ISup />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C1",
                component: <Pdf C={Cinfo1} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C2",
                component: <Pdf C={Cinfo2} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R2",
                component: <Pdf C={Rinfo2} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C3",
                component: <Pdf C={Cinfo3} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C4",
                component: <Pdf C={Cinfo4} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R4",
                component: <Pdf C={Rinfo4} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/T4",
                component: <Pdfss T={Tinfo4C} C={Tinfo4} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C5",
                component: <Pdf C={Cinfo5} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C6",
                component: <Pdf C={Cinfo6} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C7",
                component: <Pdf C={Cinfo7} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R7",
                component: <Pdf C={Rinfo7} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/T7",
                component: <Pdfss T={Tinfo7C} C={Tinfo7} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C8",
                component: <Pdf C={Cinfo8} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R8",
                component: <Pdf C={Rinfo8} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/T81",
                component: <Pdfss T={T1info8C} C={T1info8} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/T82",
                component: <Pdfss T={T2info8C} C={T2info8} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C9",
                component: <Pdf C={Cinfo9} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R9",
                component: <Pdf C={Rinfo9} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C10",
                component: <Pdf C={Cinfo10} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R10",
                component: <Pdf C={Rinfo10} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C11",
                component: <Pdf C={Cinfo11} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R11",
                component: <Pdf C={Rinfo11} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C12",
                component: <Pdf C={Cinfo12} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R12",
                component: <Pdf C={Rinfo12} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/T12",
                component: <Pdfss T={Tinfo12C} C={Tinfo12} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C13",
                component: <Pdf C={Cinfo13} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R13",
                component: <Pdf C={Rinfo13} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C14",
                component: <Pdf C={Cinfo14} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R14",
                component: <Pdf C={Rinfo14} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C15",
                component: <Pdf C={Cinfo15} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R15",
                component: <Pdf C={Rinfo15} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C16",
                component: <Pdf C={Cinfo16} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/R16",
                component: <Pdf C={Rinfo16} label1="Informatique" label2="Sup" />,
              },
              {
                name: "Sup",
                route: "/Cours/Info/Sup/C17",
                component: <Pdf C={Cinfo17} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T118",
                component: <Pdfss T={T1info18C} C={T1info18} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T218",
                component: <Pdfss T={T2info18C} C={T2info18} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T318",
                component: <Pdfss T={T3info18C} C={T3info18} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T119",
                component: <Pdfss T={T1info19C} C={T1info19} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T219",
                component: <Pdfss T={T2info19C} C={T2info19} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T319",
                component: <Pdfss T={T3info19C} C={T3info19} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T120",
                component: <Pdfss T={T1info20C} C={T1info20} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T220",
                component: <Pdfss T={T2info20C} C={T2info20} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T320",
                component: <Pdfss T={T3info20C} C={T3info20} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T420",
                component: <Pdfss T={T4info20C} C={T4info20} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C21",
                component: <Pdf C={Cinfo21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R21",
                component: <Pdf C={Rinfo21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T021",
                component: <Pdfss T={T0info21C} C={T0info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T121",
                component: <Pdfss T={T1info21C} C={T1info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T221",
                component: <Pdfss T={T2info21C} C={T2info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T321",
                component: <Pdfss T={T3info21C} C={T3info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T421",
                component: <Pdfss T={T4info21C} C={T4info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T521",
                component: <Pdfss T={T5info21C} C={T5info21} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T122",
                component: <Pdfss T={T1info22C} C={T1info22} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T222",
                component: <Pdfss T={T2info22C} C={T2info22} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C23",
                component: <Pdf C={Cinfo23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R23",
                component: <Pdf C={Rinfo23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T123",
                component: <Pdfss T={T1info23C} C={T1info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T223",
                component: <Pdfss T={T2info23C} C={T2info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T323",
                component: <Pdfss T={T3info23C} C={T3info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T423",
                component: <Pdfss T={T4info23C} C={T4info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T523",
                component: <Pdfss T={T5info23C} C={T5info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T623",
                component: <Pdfss T={T6info23C} C={T6info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T723",
                component: <Pdfss T={T7info23C} C={T7info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T823",
                component: <Pdfss T={T8info23C} C={T8info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T923",
                component: <Pdfss T={T9info23C} C={T9info23} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1023",
                component: (
                  <Pdfss T={T10info23C} C={T10info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1123",
                component: (
                  <Pdfss T={T11info23C} C={T11info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1223",
                component: (
                  <Pdfss T={T12info23C} C={T12info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1323",
                component: (
                  <Pdfss T={T13info23C} C={T13info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1423",
                component: (
                  <Pdfss T={T14info23C} C={T14info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1523",
                component: (
                  <Pdfss T={T15info23C} C={T15info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1623",
                component: (
                  <Pdfss T={T16info23C} C={T16info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1723",
                component: (
                  <Pdfss T={T17info23C} C={T17info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T1823",
                component: (
                  <Pdfss T={T18info23C} C={T18info23} label1="Informatique" label2="Sup" />
                ),
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C24",
                component: <Pdf C={Cinfo24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R24",
                component: <Pdf C={Rinfo24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T124",
                component: <Pdfss T={T1info24C} C={T1info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T224",
                component: <Pdfss T={T2info24C} C={T2info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T324",
                component: <Pdfss T={T3info24C} C={T3info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T424",
                component: <Pdfss T={T4info24C} C={T4info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T524",
                component: <Pdfss T={T5info24C} C={T5info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T624",
                component: <Pdfss T={T6info24C} C={T6info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T724",
                component: <Pdfss T={T7info24C} C={T7info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T824",
                component: <Pdfss T={T8info24C} C={T8info24} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C25",
                component: <Pdf C={Cinfo25} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R25",
                component: <Pdf C={Rinfo25} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C26",
                component: <Pdf C={Cinfo26} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R26",
                component: <Pdf C={Rinfo26} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T126",
                component: <Pdfss T={T1info26C} C={T1info26} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T226",
                component: <Pdfss T={T2info26C} C={T2info26} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/C27",
                component: <Pdf C={Cinfo27} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/R27",
                component: <Pdf C={Rinfo27} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T127",
                component: <Pdfss T={T1info27C} C={T1info27} label1="Informatique" label2="Sup" />,
              },
              {
                name: "",
                route: "/Cours/Info/Sup/T227",
                component: <Pdfss T={T2info27C} C={T2info27} label1="Informatique" label2="Sup" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/Cours/Info/Spe",
            collapse: [
              {
                name: "",
                route: "/Cours/Info",
                component: <InfoC />,
              },
              {
                name: "Spe",
                route: "/Cours/Info/Spe",
                component: <ISpe />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/C1",
                component: <Pdf C={CinfoS1} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/R1",
                component: <Pdf C={RinfoS1} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T11",
                component: <Pdfss T={T1infoS1C} C={T1infoS1} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T12",
                component: <Pdfss T={T2infoS1C} C={T2infoS1} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T13",
                component: <Pdfss T={T3infoS1C} C={T3infoS1} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/R2",
                component: <Pdf C={RinfoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T21",
                component: <Pdfss T={T1infoS2C} C={T1infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T22",
                component: <Pdfss T={T2infoS2C} C={T2infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T23",
                component: <Pdfss T={T3infoS2C} C={T3infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T24",
                component: <Pdfss T={T4infoS2C} C={T4infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T25",
                component: <Pdfss T={T5infoS2C} C={T5infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T26",
                component: <Pdfss T={T6infoS2C} C={T6infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T27",
                component: <Pdfss T={T7infoS2C} C={T7infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T28",
                component: <Pdfss T={T8infoS2C} C={T8infoS2} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/R3",
                component: <Pdf C={RinfoS3} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T31",
                component: <Pdfss T={T1infoS3C} C={T1infoS3} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T32",
                component: <Pdfss T={T2infoS3C} C={T2infoS3} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T33",
                component: <Pdfss T={T3infoS3C} C={T3infoS3} label1="Informatique" label2="Spe" />,
              },
              {
                name: "",
                route: "/Cours/Info/Spe/T34",
                component: <Pdfss T={T4infoS3C} C={T4infoS3} label1="Informatique" label2="Spe" />,
              },
            ],
          },
        ],
      },
      {
        name: "Traduction",
        //description: "Ar-Fr",
        route: "/Cours/Tr",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Cours/Tr/Sup",
            collapse: [
              {
                name: "",
                route: "/Cours/Tr",
                component: <TrC />,
              },
              {
                name: "",
                route: "/Cours/Tr/Sup",
                component: <TSup />,
              },
              {
                name: "Spe",
                route: "/Cours/Tr/Spe",
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
            route: "/Cours/Tr/Spe",
            collapse: [
              {
                name: "Spe",
                route: "/Cours/Tr/Spe",
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
        route: "/Pbs/Math",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Pbs/Sup/Math",
            collapse: [
              {
                name: "",
                route: "/Pbs/Sup/Math",
                component: <PbM />,
              },
              {
                name: "",
                route: "/Pbs/Math",
                component: <MPBS />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/Algebre",
                component: <PbMAl />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P1",
                component: <Pb C={pbm1} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P2",
                component: <Pb C={pbm2} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P3",
                component: <Pb C={pbm3} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P4",
                component: <Pb C={pbm4} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P5",
                component: <Pb C={pbm5} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P6",
                component: <Pb C={pbm6} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P7",
                component: <Pb C={pbm7} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P8",
                component: <Pb C={pbm8} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P9",
                component: <Pb C={pbm9} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P10",
                component: <Pb C={pbm10} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P11",
                component: <Pb C={pbm11} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P12",
                component: <Pb C={pbm12} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P13",
                component: <Pb C={pbm13} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P14",
                component: <Pb C={pbm14} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P15",
                component: <Pb C={pbm15} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P16",
                component: <Pb C={pbm16} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P17",
                component: <Pb C={pbm17} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P18",
                component: <Pb C={pbm18} label1="Math" label2="Algebre" />,
              },
              {
                name: "",
                route: "/Pbs/Sup/Math/P19",
                component: <Pb C={pbm19} label1="Math" label2="Algebre" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/Pbs/Spe/Math",
            collapse: [
              {
                name: "",
                route: "/Pbs/Spe/Math",
                component: <PbMS />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/Algebre",
                component: <PbMSAl />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/Analyse",
                component: <PbMSA />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/Proba",
                component: <PbMSP />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P1",
                component: <Pb C={pbms1} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P2",
                component: <Pb C={pbms2} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P3",
                component: <Pb C={pbms3} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P4",
                component: <Pb C={pbms4} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P5",
                component: <Pb C={pbms5} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P6",
                component: <Pb C={pbms6} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P7",
                component: <Pb C={pbms7} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P8",
                component: <Pb C={pbms8} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P9",
                component: <Pb C={pbms9} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P10",
                component: <Pb C={pbms10} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P11",
                component: <Pb C={pbms11} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P12",
                component: <Pb C={pbms12} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P13",
                component: <Pb C={pbms13} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P14",
                component: <Pb C={pbms14} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P15",
                component: <Pb C={pbms15} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P16",
                component: <Pb C={pbms16} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P17",
                component: <Pb C={pbms17} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P18",
                component: <Pb C={pbms18} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P19",
                component: <Pb C={pbms19} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P20",
                component: <Pb C={pbms20} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P21",
                component: <Pb C={pbms21} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P22",
                component: <Pb C={pbms22} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P23",
                component: <Pb C={pbms23} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P24",
                component: <Pb C={pbms24} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P25",
                component: <Pb C={pbms25} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P26",
                component: <Pb C={pbms26} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P27",
                component: <Pb C={pbms27} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P28",
                component: <Pb C={pbms28} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P29",
                component: <Pb C={pbms29} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P30",
                component: <Pb C={pbms30} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P31",
                component: <Pb C={pbms31} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P32",
                component: <Pb C={pbms32} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P33",
                component: <Pb C={pbms33} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P34",
                component: <Pb C={pbms34} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P35",
                component: <Pb C={pbms35} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P36",
                component: <Pb C={pbms36} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P37",
                component: <Pb C={pbms37} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P38",
                component: <Pb C={pbms38} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P39",
                component: <Pb C={pbms39} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P40",
                component: <Pb C={pbms40} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P41",
                component: <Pb C={pbms41} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P42",
                component: <Pb C={pbms42} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P43",
                component: <Pb C={pbms43} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P44",
                component: <Pb C={pbms44} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P45",
                component: <Pb C={pbms45} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P46",
                component: <Pb C={pbms46} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P47",
                component: <Pb C={pbms47} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P48",
                component: <Pb C={pbms48} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P49",
                component: <Pb C={pbms49} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P50",
                component: <Pb C={pbms50} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P51",
                component: <Pb C={pbms51} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P52",
                component: <Pb C={pbms52} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P53",
                component: <Pb C={pbms53} label1="Math" label2="Spe" />,
              },
              {
                name: "",
                route: "/Pbs/Spe/Math/P54",
                component: <Pb C={pbms54} label1="Math" label2="Spe" />,
              },
            ],
          },
        ],
      },
      {
        name: "Pbs Physique",
        description: "",
        route: "/Pbs/Physique",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Pbs/Sup/Physique",
            collapse: [
              {
                name: "Sup",
                route: "/Pbs/Sup/Physique",
                component: <PbPS />,
              },
              {
                name: "",
                route: "/Pbs/Physique",
                component: <PPBS />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P1",
                component: <Pb C={pbp1} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P2",
                component: <Pb C={pbp2} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P3",
                component: <Pb C={pbp3} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P4",
                component: <Pb C={pbp4} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P5",
                component: <Pb C={pbp5} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P6",
                component: <Pb C={pbp6} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P7",
                component: <Pb C={pbp7} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P8",
                component: <Pb C={pbp8} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P9",
                component: <Pb C={pbp9} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P10",
                component: <Pb C={pbp10} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P11",
                component: <Pb C={pbp11} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P12",
                component: <Pb C={pbp12} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P13",
                component: <Pb C={pbp13} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P14",
                component: <Pb C={pbp14} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P15",
                component: <Pb C={pbp15} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P16",
                component: <Pb C={pbp16} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P17",
                component: <Pb C={pbp17} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P18",
                component: <Pb C={pbp18} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P19",
                component: <Pb C={pbp19} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P20",
                component: <Pb C={pbp20} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P21",
                component: <Pb C={pbp21} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P22",
                component: <Pb C={pbp22} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P23",
                component: <Pb C={pbp23} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P24",
                component: <Pb C={pbp24} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P25",
                component: <Pb C={pbp25} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P26",
                component: <Pb C={pbp26} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P27",
                component: <Pb C={pbp27} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P28",
                component: <Pb C={pbp28} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P29",
                component: <Pb C={pbp29} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P30",
                component: <Pb C={pbp30} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P31",
                component: <Pb C={pbp31} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P32",
                component: <Pb C={pbp32} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P33",
                component: <Pb C={pbp33} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P34",
                component: <Pb C={pbp34} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P35",
                component: <Pb C={pbp35} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P36",
                component: <Pb C={pbp36} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P37",
                component: <Pb C={pbp37} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P38",
                component: <Pb C={pbp38} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P39",
                component: <Pb C={pbp39} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P40",
                component: <Pb C={pbp40} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P41",
                component: <Pb C={pbp41} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P42",
                component: <Pb C={pbp42} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P43",
                component: <Pb C={pbp43} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P44",
                component: <Pb C={pbp44} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P45",
                component: <Pb C={pbp45} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P46",
                component: <Pb C={pbp46} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P47",
                component: <Pb C={pbp47} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P48",
                component: <Pb C={pbp48} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P49",
                component: <Pb C={pbp49} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P50",
                component: <Pb C={pbp50} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P51",
                component: <Pb C={pbp51} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P52",
                component: <Pb C={pbp52} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P53",
                component: <Pb C={pbp53} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P54",
                component: <Pb C={pbp54} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P55",
                component: <Pb C={pbp55} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P56",
                component: <Pb C={pbp56} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P57",
                component: <Pb C={pbp57} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P58",
                component: <Pb C={pbp58} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P59",
                component: <Pb C={pbp59} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P60",
                component: <Pb C={pbp60} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P61",
                component: <Pb C={pbp61} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P62",
                component: <Pb C={pbp62} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P63",
                component: <Pb C={pbp63} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P64",
                component: <Pb C={pbp64} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P65",
                component: <Pb C={pbp65} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P66",
                component: <Pb C={pbp66} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P67",
                component: <Pb C={pbp67} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P68",
                component: <Pb C={pbp68} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P69",
                component: <Pb C={pbp69} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P70",
                component: <Pb C={pbp70} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P71",
                component: <Pb C={pbp71} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P72",
                component: <Pb C={pbp72} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P73",
                component: <Pb C={pbp73} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P74",
                component: <Pb C={pbp74} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P75",
                component: <Pb C={pbp75} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P76",
                component: <Pb C={pbp76} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P77",
                component: <Pb C={pbp77} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P78",
                component: <Pb C={pbp78} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P79",
                component: <Pb C={pbp79} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P80",
                component: <Pb C={pbp80} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P81",
                component: <Pb C={pbp81} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P82",
                component: <Pb C={pbp82} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P83",
                component: <Pb C={pbp83} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P84",
                component: <Pb C={pbp84} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P85",
                component: <Pb C={pbp85} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P86",
                component: <Pb C={pbp86} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P87",
                component: <Pb C={pbp87} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P88",
                component: <Pb C={pbp88} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P89",
                component: <Pb C={pbp89} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P90",
                component: <Pb C={pbp90} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P91",
                component: <Pb C={pbp91} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P92",
                component: <Pb C={pbp92} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P93",
                component: <Pb C={pbp93} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P94",
                component: <Pb C={pbp94} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P95",
                component: <Pb C={pbp95} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P96",
                component: <Pb C={pbp96} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P97",
                component: <Pb C={pbp97} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P98",
                component: <Pb C={pbp98} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P99",
                component: <Pb C={pbp99} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P100",
                component: <Pb C={pbp100} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P101",
                component: <Pb C={pbp101} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P102",
                component: <Pb C={pbp102} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P103",
                component: <Pb C={pbp103} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P104",
                component: <Pb C={pbp104} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P105",
                component: <Pb C={pbp105} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P106",
                component: <Pb C={pbp106} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P107",
                component: <Pb C={pbp107} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P108",
                component: <Pb C={pbp108} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P109",
                component: <Pb C={pbp109} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P110",
                component: <Pb C={pbp110} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P111",
                component: <Pb C={pbp111} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P112",
                component: <Pb C={pbp112} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P113",
                component: <Pb C={pbp113} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P114",
                component: <Pb C={pbp114} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P115",
                component: <Pb C={pbp115} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P116",
                component: <Pb C={pbp116} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P117",
                component: <Pb C={pbp117} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P118",
                component: <Pb C={pbp118} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P119",
                component: <Pb C={pbp119} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P120",
                component: <Pb C={pbp120} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P121",
                component: <Pb C={pbp121} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P122",
                component: <Pb C={pbp122} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P123",
                component: <Pb C={pbp123} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P124",
                component: <Pb C={pbp124} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P125",
                component: <Pb C={pbp125} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P126",
                component: <Pb C={pbp126} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P127",
                component: <Pb C={pbp127} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P128",
                component: <Pb C={pbp128} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P129",
                component: <Pb C={pbp129} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P130",
                component: <Pb C={pbp130} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P131",
                component: <Pb C={pbp131} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P132",
                component: <Pb C={pbp132} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P133",
                component: <Pb C={pbp133} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P134",
                component: <Pb C={pbp134} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P135",
                component: <Pb C={pbp135} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P136",
                component: <Pb C={pbp136} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P137",
                component: <Pb C={pbp137} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P138",
                component: <Pb C={pbp138} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P139",
                component: <Pb C={pbp139} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P140",
                component: <Pb C={pbp140} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P141",
                component: <Pb C={pbp141} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P142",
                component: <Pb C={pbp142} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P143",
                component: <Pb C={pbp143} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P144",
                component: <Pb C={pbp144} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P145",
                component: <Pb C={pbp145} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P146",
                component: <Pb C={pbp146} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P147",
                component: <Pb C={pbp147} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P148",
                component: <Pb C={pbp148} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P149",
                component: <Pb C={pbp149} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P150",
                component: <Pb C={pbp150} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P151",
                component: <Pb C={pbp151} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P152",
                component: <Pb C={pbp152} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P153",
                component: <Pb C={pbp153} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P154",
                component: <Pb C={pbp154} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P155",
                component: <Pb C={pbp155} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P156",
                component: <Pb C={pbp156} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P157",
                component: <Pb C={pbp157} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P158",
                component: <Pb C={pbp158} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P159",
                component: <Pb C={pbp159} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P160",
                component: <Pb C={pbp160} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P161",
                component: <Pb C={pbp161} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P162",
                component: <Pb C={pbp162} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P163",
                component: <Pb C={pbp163} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P164",
                component: <Pb C={pbp164} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P165",
                component: <Pb C={pbp165} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P166",
                component: <Pb C={pbp166} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P167",
                component: <Pb C={pbp167} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P168",
                component: <Pb C={pbp168} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P169",
                component: <Pb C={pbp169} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P170",
                component: <Pb C={pbp170} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P171",
                component: <Pb C={pbp171} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P172",
                component: <Pb C={pbp172} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P173",
                component: <Pb C={pbp173} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P174",
                component: <Pb C={pbp174} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P175",
                component: <Pb C={pbp175} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P176",
                component: <Pb C={pbp176} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P177",
                component: <Pb C={pbp177} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P178",
                component: <Pb C={pbp178} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P179",
                component: <Pb C={pbp179} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P180",
                component: <Pb C={pbp180} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P181",
                component: <Pb C={pbp181} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P182",
                component: <Pb C={pbp182} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P183",
                component: <Pb C={pbp183} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P184",
                component: <Pb C={pbp184} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P185",
                component: <Pb C={pbp185} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P186",
                component: <Pb C={pbp186} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P187",
                component: <Pb C={pbp187} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P188",
                component: <Pb C={pbp188} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P189",
                component: <Pb C={pbp189} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P190",
                component: <Pb C={pbp190} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P191",
                component: <Pb C={pbp191} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P192",
                component: <Pb C={pbp192} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P193",
                component: <Pb C={pbp193} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P194",
                component: <Pb C={pbp194} label1="Physique" label2="Problème" />,
              },
              {
                name: "",
                route: "/Pbs/Physique/P195",
                component: <Pb C={pbp195} label1="Physique" label2="Problème" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/Pbs/Spe/Physique",
            collapse: [
              {
                name: "",
                route: "/Pbs/Spe/Physique",
                component: <PbPSP />,
              },
              {
                name: "",
                route: "/Pbs/Physique",
                component: <PPBS />,
              },
            ],
          },
        ],
      },
      {
        name: "Pbs Chimie",
        description: "",
        route: "/Pbs/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "Sup",
            route: "/Pbs/Sup/Chimie",
            collapse: [
              {
                name: "",
                route: "/Pbs/Sup/Chimie",
                component: <CbPS />,
              },
              {
                name: "",
                route: "/Pbs/Chimie",
                component: <CPBS />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P1",
                component: <Pb C={pbc1} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P2",
                component: <Pb C={pbc2} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P3",
                component: <Pb C={pbc3} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P4",
                component: <Pb C={pbc4} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P5",
                component: <Pb C={pbc5} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P6",
                component: <Pb C={pbc6} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P7",
                component: <Pb C={pbc7} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P8",
                component: <Pb C={pbc8} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P9",
                component: <Pb C={pbc9} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P10",
                component: <Pb C={pbc10} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P11",
                component: <Pb C={pbc11} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P12",
                component: <Pb C={pbc12} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P13",
                component: <Pb C={pbc13} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P14",
                component: <Pb C={pbc14} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P15",
                component: <Pb C={pbc15} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P16",
                component: <Pb C={pbc16} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P17",
                component: <Pb C={pbc17} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P18",
                component: <Pb C={pbc18} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P19",
                component: <Pb C={pbc19} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P20",
                component: <Pb C={pbc20} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P21",
                component: <Pb C={pbc21} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P22",
                component: <Pb C={pbc22} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P23",
                component: <Pb C={pbc23} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P24",
                component: <Pb C={pbc24} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P25",
                component: <Pb C={pbc25} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P26",
                component: <Pb C={pbc26} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P27",
                component: <Pb C={pbc27} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P28",
                component: <Pb C={pbc28} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P29",
                component: <Pb C={pbc29} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P30",
                component: <Pb C={pbc30} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P31",
                component: <Pb C={pbc31} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P32",
                component: <Pb C={pbc32} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P33",
                component: <Pb C={pbc33} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P34",
                component: <Pb C={pbc34} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P35",
                component: <Pb C={pbc35} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P36",
                component: <Pb C={pbc36} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P37",
                component: <Pb C={pbc37} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P38",
                component: <Pb C={pbc38} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P39",
                component: <Pb C={pbc39} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P40",
                component: <Pb C={pbc40} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P41",
                component: <Pb C={pbc41} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P42",
                component: <Pb C={pbc42} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P43",
                component: <Pb C={pbc43} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P44",
                component: <Pb C={pbc44} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P45",
                component: <Pb C={pbc45} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P46",
                component: <Pb C={pbc46} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P47",
                component: <Pb C={pbc47} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P48",
                component: <Pb C={pbc48} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P49",
                component: <Pb C={pbc49} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P50",
                component: <Pb C={pbc50} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P51",
                component: <Pb C={pbc51} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P52",
                component: <Pb C={pbc52} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P53",
                component: <Pb C={pbc53} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P54",
                component: <Pb C={pbc54} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P55",
                component: <Pb C={pbc55} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P56",
                component: <Pb C={pbc56} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P57",
                component: <Pb C={pbc57} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P58",
                component: <Pb C={pbc58} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P59",
                component: <Pb C={pbc59} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P60",
                component: <Pb C={pbc60} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P61",
                component: <Pb C={pbc61} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P62",
                component: <Pb C={pbc62} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P63",
                component: <Pb C={pbc63} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P64",
                component: <Pb C={pbc64} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P65",
                component: <Pb C={pbc65} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P66",
                component: <Pb C={pbc66} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P67",
                component: <Pb C={pbc67} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P68",
                component: <Pb C={pbc68} label1="Chimie" label2="Problèmes" />,
              },
              {
                name: "",
                route: "/Pbs/Chimie/P69",
                component: <Pb C={pbc69} label1="Chimie" label2="Problèmes" />,
              },
            ],
          },
          {
            name: "Spe",
            route: "/Pbs/Spe/Chimie",
            collapse: [
              {
                name: "",
                route: "/Pbs/Spe/Chimie",
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
        route: "/Formations/Math",
        dropdown: true,
        collapse: [
          {
            name: "Abdellatif Ilham",
            route: "/Formations/Math/Ilham",
            component: <IlhamP />,
            collapse: [
              {
                name: "Analyse",
                route: "/Formations/Math/Ilham/Analyse",
                component: <IlhamAnalyse />,
              },
              {
                name: "Algebre",
                route: "/Formations/Math/Ilham/Algebre",
                component: <IlhamAlgebre />,
              },
              {
                name: "Proba",
                route: "/Formations/Math/Ilham/Proba",
                component: <IlhamProba />,
              },
              {
                name: "Proba",
                route: "/Formations/Math/Ilham",
                component: <IlhamP />,
              },
            ],
          },
          {
            name: "Mohamed Benchama",
            route: "/Formations/Math/Benchama",
            collapse: [
              {
                name: "Analyse",
                route: "/Formations/Math/Benchama/Analyse",
                component: <BenchamaAnalyse />,
              },
              {
                name: "Algebre",
                route: "/Formations/Math/Benchama/Algebre",
                component: <BenchamaAlgebre />,
              },
              {
                name: "Proba",
                route: "/Formations/Math/Benchama/Proba",
                component: <BenchamaProba />,
              },
              {
                name: "Proba",
                route: "/Formations/Math/Benchama",
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
        route: "/formation/physique",
        dropdown: true,
        collapse: [
          {
            name: "M.Hinnaoui",
            route: "/formation/physique/Hinaoui",
            collapse: [
              {
                name: "",
                route: "/formation/physique",
                component: <PhysiqueF />,
              },
              {
                name: "",
                route: "/formation/physique/Hinaoui",
                component: <HinaouiP />,
              },
              {
                name: "",
                route: "/Formation/Physique/Hinaoui/Mecanique",
                component: <MecH />,
              },
              {
                name: "",
                route: "/Formation/Physique/Hinaoui/Thermo",
                component: <ThermoH />,
              },
              {
                name: "",
                route: "/Formations/Physique/Hinaoui/Optique",
                component: <OptH />,
              },
              {
                name: "",
                route: "/Formations/Physique/Hinaoui/EM",
                component: <EMH />,
              },
            ],
          },
          {
            name: "R.Bouhamza",
            route: "/landing-pages/about-us",
            component: <ContactUs />,
          },
          {
            name: "I.Ibraiken",
            route: "/landing-pages/about-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "Chimies",
        description: "",
        route: "/formation/Chimie",
        dropdown: true,
        collapse: [
          {
            name: "M.Hinnaoui",
            route: "/formation/Chimie/Hinaoui",
            collapse: [
              {
                name: "",
                route: "/formation/Chimie/Hinaoui",
                component: <HinaouiC />,
              },
              {
                name: "",
                route: "/formation/Chimie/Hinaoui/CDS",
                component: <CDS />,
              },
              {
                name: "",
                route: "/formation/Chimie/Hinaoui/CR",
                component: <CR />,
              },
              {
                name: "",
                route: "/formation/Chimie/Hinaoui/CS",
                component: <CS />,
              },
              {
                name: "",
                route: "/formation/Chimie/Hinaoui/TC",
                component: <TC />,
              },
              {
                name: "",
                route: "/formation/Chimie",
                component: <ChimieF />,
              },
            ],
          },
          {
            name: "R.Bouhamza",
            route: "/landing-pages/about-us",
            component: <ContactUs />,
          },
          {
            name: "I.Ibraiken",
            route: "/landing-pages/about-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "S2I",
        //description: "Mecanique - Asservissement",
        route: "/formation/SI",
        dropdown: true,
        collapse: [
          {
            name: "Khalid Khouya",
            route: "/formation/SI/Khalid",
            collapse: [
              {
                name: "",
                route: "/formation/SI",
                component: <SIF />,
              },
              {
                name: "",
                route: "/formation/SI/Khalid",
                component: <Khalid />,
              },
              {
                name: "",
                route: "/formation/SI/Khalid/Mecanique",
                component: <MecSK />,
              },
              {
                name: "",
                route: "/formation/SI/Khalid/Asservissement",
                component: <Ass />,
              },
            ],
          },
          {
            name: "Expertise",
            route: "/formation/SI",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "Informatiques",
        //description: "Python",
        route: "/formation/Info",
        dropdown: true,
        collapse: [
          {
            name: "B.Chemlal",
            route: "/formation/Info",
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
