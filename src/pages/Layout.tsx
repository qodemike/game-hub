import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import useGameQueryStore from "../store";

const Layout = () => {
  const { showSideBar } = useGameQueryStore();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: `240px 1fr`,
        }}
        templateRows={{
          base: " 80px 1fr",
        }}
        position={"relative"}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        <GridItem
          area="aside"
          zIndex={20}
          position={"fixed"}
          bottom={0}
          left={0}
          width={"280px"}
          height={"90vh"}
          transform={`${showSideBar ? "translateX(0)" : "translateX(-100%)"}`}
          transition={"transform 0.5s ease"}
        >
          <Sidebar />
        </GridItem>

        <GridItem area="main" position={"absolute"}>
          <Box paddingLeft={{ base: "0px", lg: "50px" }}>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
