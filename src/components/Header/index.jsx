import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";

function Header() {
  return (
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
  )
}

export default Header
