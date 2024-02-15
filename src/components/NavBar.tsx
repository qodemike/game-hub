import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box className={styles.navBar} width={"100vw"} height={"80px"} zIndex={5} position={"fixed"}>
        <Grid
          padding={{ base: " 0 10px 0 20px", sm: "20px" }}
          templateAreas={`"left middle right"`}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <GridItem
            area={{ base: "middle", sm: "left" }}
            justifySelf={{ base: "center", sm: "start" }}
          >
            <Link to="/">
              <Image
                src={logo}
                width={{ base: "150px", md: "200px" }}
                objectFit={"cover"}
                cursor={"pointer"}
              />
            </Link>
          </GridItem>
          <GridItem area={{ base: "left", sm: "middle" }}>
            <Box display={{ base: "block", sm:"none",  lg:"block" }}>
              <SearchBar />
            </Box>
          </GridItem>
          <GridItem justifySelf={"end"} area={"right"}>
            <ColorModeSwitch></ColorModeSwitch>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default NavBar;
