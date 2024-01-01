import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import GenreList from "../components/GenreList";

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
          <GridItem area="aside">
            <Box position={"fixed"} maxWidth={"240px"}>
            <GenreList></GenreList>
            </Box>
          </GridItem>
        </Show>



        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Grid>

    </>
  );
};

export default Layout;
