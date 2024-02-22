import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { IoMenuSharp } from "react-icons/io5";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { SearchIcon } from "@chakra-ui/icons";
import { LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";
import { userAuth } from "../context/AuthContext";
import ColorModeSwitch from "./ColorModeSwitch";
import GoogleIcon from "../assets/google.svg";

function NavBar() {
  const clearGameQuery = useGameQueryStore((store) => store.clearGameQuery);
  const { scrollToTop } = useGameQueryStore();
  const showSearchBar = useGameQueryStore((s) => s.showSearchBar);
  const { setShowSearchBar } = useGameQueryStore();
  const { googleSignIn,  userCredentials } = userAuth();

  const handleOnClick = () => {
    clearGameQuery();
    scrollToTop();
  };

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
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
            display={"flex"}
            alignItems={"center"}
            gap={5}
          >
            <Box display={{ base: "none", md: "block" }} cursor={"pointer"}>
              <IoMenuSharp strokeWidth={1} size={30} />
            </Box>

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
            zIndex={10}
          >
            <SearchBar />
          </GridItem>
          <GridItem
            paddingRight={{ base: "0px", lg: "10px" }}
            justifySelf={"end"}
            area={"right"}
            position={"relative"}
          >
            {userCredentials.user ? (
              <img src={userCredentials.user.photoURL as string} />
            ) : (
              <LuUserCircle strokeWidth={1} size={40} />
            )}

            <Box
              width={"250px"}
              paddingY={"10px"}
              background={"gray.100"}
              borderRadius={"5px"}
              overflow={"hidden"}
              position={"absolute"}
              right={"0"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                onClick={handleGoogleSignIn}
                padding={"20px"}
                _hover={{ background: "gray.300" }}
                display={"flex"}
                gap={5}
                cursor={"pointer"}
              >
                <img src={GoogleIcon} width={"23px"} />
                <Text fontSize={"14px"} color={"black"} whiteSpace={"nowrap"}>
                  Sign In with Google
                </Text>
              </Box>
              <Box paddingX={"20px"} paddingY={'10px'} _hover={{ background: "gray.300" }} cursor={"pointer"}>
                <ColorModeSwitch />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default NavBar;
