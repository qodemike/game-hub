import { Box, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

function NavBar() {
  const clearGameQuery = useGameQueryStore((store) => store.clearGameQuery);
  const { scrollToTop } = useGameQueryStore();
  const showSearchBar  = useGameQueryStore((s) => s.showSearchBar)
  const { setShowSearchBar } = useGameQueryStore()


  const handleOnClick = () => {
    clearGameQuery();
    scrollToTop();
  };

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };

  return (
    <>
      <Box
        className={styles.navBar}
        width={"100vw"}
        height={"80px"}
        zIndex={5}
        position={"fixed"}
      >
        <Grid
          padding={{ base: " 0 10px", sm: "20px" }}
          templateAreas={`"left middle right"`}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <GridItem
            area={{ base: "left" }}
            display={{ base: "flex", md: "none" }}
            alignItems={"center"}
            gap={3}
          >
            <IoMenuOutline size={40} />
            <SearchIcon onClick={handleShowSearchBar} boxSize={6} />
          </GridItem>
          <GridItem
            area={{ base: "middle", sm: "left" }}
            justifySelf={{ base: "start", md: "start" }}
          >
            <Link to="/" onClick={handleOnClick}>
              <Image
                src={logo}
                width={{ base: "150px", md: "200px" }}
                objectFit={"cover"}
                cursor={"pointer"}
              />
            </Link>
          </GridItem>
          <GridItem
            area={{ base: "middle" }}
            gridColumn={{ base: "1 / full", md: "2 / span 1" }}
          >
            <Box
              width={{ lg: "450px" }}
              display={{
                base: `${showSearchBar ? "inline" : "none"}`,
                lg: "block",
              }}
            >
              <SearchBar />
            </Box>
          </GridItem>
          <GridItem justifySelf={"end"} area={"right"}>
            <Box
              width={"40px"}
              height={"40px"}
              background={"white"}
              borderRadius={"full"}
            ></Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default NavBar;
