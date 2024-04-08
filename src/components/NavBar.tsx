import { useEffect, useRef, useState } from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { IoMenuSharp } from "react-icons/io5";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";
import { userAuth } from "../context/AuthContext";
import ColorModeSwitch from "./ColorModeSwitch";
import GoogleIcon from "../assets/google.svg";
import { IoIosLogOut } from "react-icons/io";
import Sprite from "../assets/sprite.svg";

function NavBar() {
  const clearGameQuery = useGameQueryStore((store) => store.clearGameQuery);
  const { scrollToTop } = useGameQueryStore();
  const showSearchBar = useGameQueryStore((s) => s.showSearchBar);
  const { setShowSearchBar } = useGameQueryStore();
  const showSideBar = useGameQueryStore((s) => s.showSideBar);
  const setShowSideBar = useGameQueryStore((s) => s.setShowSideBar);

  const { googleSignIn, user, logOut } = userAuth();
  const toastDivRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [toastSize, setToastSize] = useState<"scale(0)" | "scale(1)">(
    "scale(0)"
  );

  const handleOnGoToHome = () => {
    clearGameQuery();
    scrollToTop();
  };

  const handleShowSearchBar = () => {
    setShowSearchBar(!showSideBar);
  };

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnOpenToast = (e: React.MouseEvent<HTMLDivElement>) => {
    setToastSize((toastSize) =>
      toastSize === "scale(0)" ? "scale(1)" : "scale(0)"
    );
    e.stopPropagation();
  };

  const handleCloseToast = (e: any) => {
    if (!toastDivRef.current.contains(e.target as Node)) {
      setToastSize("scale(0)");
    }
  };

  useEffect(() => {
    if (toastSize === "scale(1)") {
      window.addEventListener("click", handleCloseToast);
      window.addEventListener("scroll", handleCloseToast);
    }

    return () => {
      window.removeEventListener("click", handleCloseToast);
      window.removeEventListener("scroll", handleCloseToast);
    };
  }, [handleOnOpenToast]);

  return (
    <>
      <Box
        className={styles.navBar}
        width={"100vw"}
        height={"80px"}
        zIndex={50}
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
            gap={5}
          >
            <IoMenuSharp
              onClick={handleShowSideBar}
              size={40}
              cursor={"pointer"}
            />
            <SearchIcon onClick={handleShowSearchBar} boxSize={6} />
          </GridItem>
          <GridItem
            area={{ base: "middle", md: "left" }}
            justifySelf={{ base: "start", md: "start" }}
            display={"flex"}
            alignItems={"center"}
            gap={5}
          >
            <Box
              display={{ base: "none", md: "block", lg: "none" }}
              cursor={"pointer"}
            >
              <IoMenuSharp
                onClick={handleShowSideBar}
                strokeWidth={1}
                size={30}
                cursor={"pointer"}
              />
            </Box>

            <Link to="/" onClick={handleOnGoToHome}>
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
            <Box
              cursor={"pointer"}
              onClick={handleOnOpenToast}
              borderRadius={"full"}
              overflow={"hidden"}
            >
              {user ? (
                <Image
                  src={user.photoURL as string}
                  width={"40px"}
                  height={"40px"}
                />
              ) : (
                <svg style={{fill: "white", width: "35px", height:"35px"}}>
                  <use xlinkHref={`${Sprite}#person`} />
                </svg>
              )}
            </Box>

            <Box
              ref={toastDivRef}
              width={"250px"}
              paddingY={"10px"}
              background={"gray.100"}
              borderRadius={"5px"}
              overflow={"hidden"}
              position={"absolute"}
              right={"0"}
              display={"flex"}
              flexDirection={"column"}
              transition={"all 0.2s "}
              transform={toastSize}
              transformOrigin={"90% 0%"}
            >
              {user ? (
                <Box
                  paddingLeft={"20px"}
                  paddingY={"10px"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={6}
                >
                  <Image
                    src={user.photoURL as string}
                    width={"40px"}
                    height={"40px"}
                    borderRadius={"full"}
                  />
                  <Text color={"black"} fontSize={"sm"}>
                    {user.displayName}
                  </Text>
                </Box>
              ) : (
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
              )}
              <Box
                marginX={"20px"}
                marginBottom={"10px"}
                borderBottom={"1px solid"}
                color={"gray.300"}
              ></Box>
              <Box
                paddingX={"20px"}
                paddingY={"10px"}
                _hover={{ background: "gray.300" }}
                cursor={"pointer"}
              >
                <ColorModeSwitch />
              </Box>
              {user && (
                <Box
                  onClick={logOut}
                  paddingX={"20px"}
                  paddingY={"10px"}
                  _hover={{ background: "gray.300" }}
                  cursor={"pointer"}
                  display={"flex"}
                  color={"red"}
                  gap={4}
                >
                  <IoIosLogOut size={25} />
                  <Text fontSize={"sm"}>Log Out</Text>
                </Box>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default NavBar;
