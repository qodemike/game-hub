import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GamesHeading from "../components/GamesHeading";
import ClearFilterButton from "../components/ClearFilterButton";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";

const Homepage = () => {
  return (
    <>
      <Box marginLeft={"40px"} marginRight={"20px"} >
        <HStack
          display={{ base: "none", md: "flex" }}
          position={"fixed"}
          marginRight={"20px"}
          right={0}
          marginTop={"4px"}
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

          <Box paddingTop={"50px"} paddingBottom={"10px"}>
            <GamesHeading></GamesHeading>
          </Box>
            <GameGrid />
      </Box>
    </>
  );
};

export default Homepage;
