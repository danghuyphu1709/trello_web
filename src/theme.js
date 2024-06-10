import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appHeaderHeight : '78px',
    appGridMenu : '20%',
    appGridContent: '80%',
  },
  colorSchemes: {
    light: {
      palette: {
          primary: teal,
          secondary: deepOrange
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
          primary: cyan,
          secondary: orange
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
  },
  // ...other properties
});

export default theme;
