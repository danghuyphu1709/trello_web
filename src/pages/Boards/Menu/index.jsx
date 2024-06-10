import Box from "@mui/material/Box";
function Menu() {
  return (
    <Box
      xs={3}
      sx={{
        backgroundColor: "primary.dark",
        width: (theme) => theme.trello.appGridMenu,
        height: "100vh",
      }}
    >
      menu
    </Box>
  );
}

export default Menu;
