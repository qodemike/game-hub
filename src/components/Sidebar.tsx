import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GenreList from "./GenreList";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { userAuth } from "../context/AuthContext";

const Sidebar = () => {
  const [clickedOption, setClickedOption] = useState<
    "Home" | "Browse" | "Trending"
  >("Home");
  const { logOut } = userAuth();

  return (
    <Box
      height={"85vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        <Box
          paddingBottom={"15px"}
          fontSize={"14px"}
          borderBottom={"1px"}
          borderColor={"var(--color-line)"}
        >
          <Link to={"/"}>
            <Box
              onClick={() => setClickedOption("Home")}
              paddingX={"25px"}
              paddingY={"10px"}
              fontWeight={"light"}
              background={clickedOption === "Home" ? "var(--color-accent)" : ""}
              borderRadius={"10px"}
              transition={"all"}
              transitionDuration={"100ms"}
              _hover={
                clickedOption === "Home"
                  ? {}
                  : { background: "var(--color-gray)" }
              }
            >
              <Text fontFamily={"Inter"}>Home</Text>
            </Box>
          </Link>
          <Link to={"#"}>
            <Box
              onClick={() => setClickedOption("Browse")}
              paddingY={"10px"}
              paddingX={"25px"}
              fontWeight={"light"}
              background={
                clickedOption === "Browse" ? "var(--color-accent)" : ""
              }
              borderRadius={"10px"}
              transition={"all"}
              transitionDuration={"100ms"}
              _hover={
                clickedOption === "Browse"
                  ? {}
                  : { background: "var(--color-gray)" }
              }
            >
              <Text fontFamily={"Inter"}>Browse</Text>
            </Box>
          </Link>
          <Link to={"#"}>
            <Box
              onClick={() => setClickedOption("Trending")}
              paddingY={"10px"}
              paddingX={"25px"}
              fontWeight={"light"}
              background={
                clickedOption === "Trending" ? "var(--color-accent)" : ""
              }
              borderRadius={"10px"}
              transition={"all"}
              transitionDuration={"100ms"}
              transitionTimingFunction={"ease"}
              _hover={
                clickedOption === "Trending" ? {} : { background: "gray.900" }
              }
            >
              <Text fontFamily={"Inter"}>Trending</Text>
            </Box>
          </Link>
        </Box>

        <Box marginTop={"20px"}>
          <GenreList></GenreList>
        </Box>
      </Box>
      <Box
        onClick={logOut}
        marginBottom={"20px"}
        marginLeft={"25px"}
        width={"fit-content"}
        fontSize={"13px"}
        color={"gray.400"}
        _hover={{ color: "white" }}
        display={"flex"}
        alignItems={"center"}
        gap={4}
        transition={"all 0.2s"}
        cursor={"pointer"}
      >
        <IoIosLogOut size={25} />
        <Text fontFamily={"Inter"}>Log Out</Text>
      </Box>
    </Box>
  );
};

export default Sidebar;
