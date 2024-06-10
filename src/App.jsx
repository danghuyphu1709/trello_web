import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectMode = event.target.value;
    setMode(selectMode);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-select-dark-ligth-mode">Mode</InputLabel>
      <Select
        labelId="lable-select-dark-ligth-mode"
        id="select-dark-ligth-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small" /> Ligth
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", 
      boxSizing: "border-box",
      overflow: "hidden",}}
    >
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trello.appHeaderHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
        header
      </Box>

      <Box sx={{ display:"flex",maxWidth:"100%" }}>
        <Box xs={3} sx={{ backgroundColor: "primary.dark" , 
          width: (theme) => theme.trello.appGridMenu,
          height: "100vh",  }}>
            menu
        </Box>
        <Box xs={9} sx={{ backgroundColor: "primary.main" , 
          width: (theme) => theme.trello.appGridContent,
          height: "100vh"}}>
        content
        </Box>
      </Box>
  </Container>
  );
}

export default App;
