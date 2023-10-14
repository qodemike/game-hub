import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GamesHeading from "../components/GamesHeading";
import ClearFilterButton from "../components/ClearFilterButton";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";


const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `" main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
      templateRows={{
        lg: "64px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      
      <GridItem area="main">
        <Box marginTop={"40px"} marginX={7}>
          <GamesHeading></GamesHeading>
          <HStack
            marginTop={"20px"}
            position={"relative"}
            left={"-6px"}
            zIndex="1"
          >
            <Box transform={"scale(.9)"}>
              <ClearFilterButton />
            </Box>
            <Box transform={"scale(.9)"}>
              <PlatformSelector />
            </Box>
            <Box transform={"scale(.9)"}>
              <SortSelector />
            </Box>
          </HStack>
          <Box marginTop={"15px"}>
            <GameGrid />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Homepage