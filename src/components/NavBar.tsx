import { Box, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { IoMenuSharp } from "react-icons/io5";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { SearchIcon } from "@chakra-ui/icons";
import { LuUser, LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

function NavBar() {
  const clearGameQuery = useGameQueryStore((store) => store.clearGameQuery);
  const { scrollToTop } = useGameQueryStore();
  const showSearchBar = useGameQueryStore((s) => s.showSearchBar);
  const { setShowSearchBar } = useGameQueryStore();

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
          paddingX={{ base: "10px", md: "20px" }}
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
            <IoMenuSharp size={40} />
            <SearchIcon onClick={handleShowSearchBar} boxSize={6} />
          </GridItem>
          <GridItem
            area={{ base: "middle", md: "left" }}
            justifySelf={{ base: "", md: "start" }}
          >
            <Link to="/" onClick={handleOnClick}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                GameHub
              </Text>
            </Link>
          </GridItem>
          <GridItem
            width={{ md: "350px", lg: "450px" }}
            display={{
              base: `${showSearchBar ? "inline" : "none"}`,
              md: "block",
            }}
            area={{ base: "right" }}
            gridColumn={{ base: "1 / full", md: "2 / span 1" }}
          >
            <SearchBar />
          </GridItem>
          <GridItem
            paddingRight={{ base: "0px", lg: "10px" }}
            justifySelf={"end"}
            area={"right"}
            position={'relative'}
          >
            <Box display={{ base: "inline", md: "none" }}>
              <LuUser strokeWidth={1} size={40} />
            </Box>
            <Box display={{ base: "none", md: "inline" }}>
              <LuUserCircle strokeWidth={1} size={40} />
            </Box>

            <Box paddingX={'15px'} background={'white'} position={'absolute'}>
              <Text color={'blackAlpha.900'}>Login</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default NavBar;
