import { Box, HStack } from "@chakra-ui/react";
import GamesHeading from "../components/GamesHeading";
import ClearFilterButton from "../components/ClearFilterButton";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";

const Homepage = () => {
  return (
    <>
      <Box  maxWidth={"90vw"} margin={{base: "0 auto 0 auto", md: " 0 20px 0 "}} >
        <HStack
          display={{ base: "none", md: "flex" }}
          position={"fixed"}
          top={"83px"}
          marginRight={"20px"}
          right={0}
          zIndex={5}
        >
          <Box flexShrink={0}>
            <ClearFilterButton />
          </Box>
          <Box flexShrink={0}>
            <PlatformSelector />
          </Box>
          <Box flexShrink={0}>
            <SortSelector />
          </Box>
        </HStack>

          <Box paddingTop={{base:"20px", md: "90px"}}  marginBottom={"20px"}>
            <GamesHeading></GamesHeading>
          </Box>
          <Box>
            <GameGrid />
          </Box>
      </Box>
    </>
  );
};

export default Homepage;
