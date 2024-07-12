import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const fontStyles = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Lucida Console",
  "Lucida Sans Unicode",
  "Palatino Linotype",
  "Impact",
  "Comic Sans MS",
  "Century Gothic",
  "Arial Black",
  "Franklin Gothic Medium",
  "Gill Sans",
  "Geneva",
  "Optima",
  "Candara",
  "Avant Garde",
  "Calibri",
  "Charcoal",
  "Menlo",
  "Monaco",
];

const tailwindfontstyle = {
  Arial: "font-arial",
  Verdana: "font-verdana",
  Helvetica: "font-helvetica",
  Tahoma: "font-tahoma",
  "Trebuchet MS": "font-trebuchet",
  "Times New Roman": "font-times",
  Georgia: "font-georgia",
  Garamond: "font-garamond",
  "Courier New": "font-courier",
  "Brush Script MT": "font-brushscript",
  "Lucida Console": "font-lucidaconsole",
  "Lucida Sans Unicode": "font-lucidasans",
  "Palatino Linotype": "font-palatino",
  Impact: "font-impact",
  "Comic Sans MS": "font-comicsans",
  "Century Gothic": "font-centurygothic",
  "Arial Black": "font-arialblack",
  "Franklin Gothic Medium": "font-franklin",
  "Gill Sans": "font-gillsans",
  Geneva: "font-geneva",
  Optima: "font-optima",
  Candara: "font-candara",
  "Avant Garde": "font-avantgarde",
  Calibri: "font-calibri",
  Charcoal: "font-charcoal",
  Menlo: "font-menlo",
  Monaco: "font-monaco",
};

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "orange",
  "teal",
  "indigo",
  "gray",
];

const backgroundColor = {
  red: "rgb(239, 68, 68)", // #ef4444
  blue: "rgb(59, 130, 246)", // #3b82f6
  green: "rgb(16, 185, 129)", // #10b981
  yellow: "rgb(245, 158, 11)", // #f59e0b
  purple: "rgb(139, 92, 246)", // #8b5cf6
  pink: "rgb(236, 72, 153)", // #ec4899
  orange: "rgb(249, 115, 22)", // #f97316
  teal: "rgb(20, 184, 166)", // #14b8a6
  indigo: "rgb(99, 102, 241)", // #6366f1
  gray: "rgb(107, 114, 128)", // #6b7280
};

const fontSize = ["Small", "Medium", "Large"];

const icons = [
  { component: FormatAlignLeftIcon, className: "icon", align: "left" },
  { component: FormatAlignCenterIcon, className: "icon", align: "center" },
  { component: FormatAlignRightIcon, className: "icon", align: "right" },
];

export {
  fontStyles,
  tailwindfontstyle,
  colors,
  backgroundColor,
  fontSize,
  icons,
};
