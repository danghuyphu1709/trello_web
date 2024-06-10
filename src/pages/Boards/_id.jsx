import Container from "@mui/material/Container";
import Header from "../../components/Header";
import Content from "./Content";
import Menu from "./Menu";
import Box from "@mui/material/Box";
function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", boxSizing: "border-box", overflow: "hidden" }}
    >
      <Header />
      {/* flex layout */}
      <Box sx={{ display: "flex", maxWidth: "100%" }}>
        <Menu />
        <Content />
      </Box>
    </Container>
  );
}

export default Board;
