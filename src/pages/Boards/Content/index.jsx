import Box from "@mui/material/Box";
function Content() {
  return (
    <Box
      xs={9}
      sx={{
        backgroundColor: "primary.main",
        width: (theme) => theme.trello.appGridContent,
        height: "100vh",
      }}
    >
      content
    </Box>
  );
}

export default Content;
