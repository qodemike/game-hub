import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GenreList from "./GenreList";
import { useRef, useState } from "react";

const Sidebar = () => {
  const [clickedOption, setClickedOption] = useState<
    "Home" | "Browse" | "Trending"
  >("Home");

  return (
    <Box height={'85vh'} >
      <Box
        borderBottom={"1px"}
        borderColor={"var(--color-line)"}
        paddingBottom={"15px"}
        fontSize={"14px"}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
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
            _hover={ clickedOption === "Home" ? {} : { background: "var(--color-gray)" }}

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
            background={clickedOption === "Browse" ? "var(--color-accent)" : ""}
            borderRadius={"10px"}
            transition={"all"}
            transitionDuration={"100ms"}
            _hover={ clickedOption === "Browse" ? {} : { background: "var(--color-gray)" }}
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
            _hover={ clickedOption === "Trending" ? {} : { background: "gray.900" }}

          >
            <Text fontFamily={"Inter"}>Trending</Text>
          </Box>
        </Link>
      </Box>
      <Box marginTop={"20px"}>
        <GenreList></GenreList>
      </Box>
      <Link to={''}>
      <Text marginTop={'40px'} marginLeft={'20px'} fontFamily={"Inter"} fontSize={'12px'}  color={'gray.500'}> Copyright @ QodeMike 2022 </Text>
      </Link>
    </Box>
  );
};

export default Sidebar;
