import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import ClearFilterButton from "./components/ClearFilterButton";
import GameGrid from "./components/GameGrid";
import GamesHeading from "./components/GamesHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
      templateRows={{
        lg: "64px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={"20px"}>
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
              <ClearFilterButton />
              <PlatformSelector />
              <SortSelector />
          </HStack>
          <Box marginTop={"15px"}>
            <GameGrid />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
