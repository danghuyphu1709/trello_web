
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

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

export default ModeSelect
