import { Box, Grid, GridItem } from "@chakra-ui/react";
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
          left={0}
          bottom={0}
          width={{base: "280px", lg: "240px"}}
          height={{base: "100vh"}}
          transform={{base: `${showSideBar ? "translateX(0)" : "translateX(-100%)"}`, lg:"translateX(0)"}}
          transition={"transform 0.5s ease"}
        >
          <Sidebar />
        </GridItem>

        <GridItem area="main">
          <Box paddingLeft={{ base: "0px", lg: "50px" }}>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
