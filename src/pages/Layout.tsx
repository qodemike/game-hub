import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "240px 1fr",
        }}
        templateRows={{
          base: " 80px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" >
            <Box position={"fixed"} width={"240px"} paddingLeft={"15px"} paddingTop={"10px"} >
              <Sidebar />
            </Box>
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box position={"relative"} top={"-50px"} paddingLeft={{ base: "0px", lg:"50px"}}>
          <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
