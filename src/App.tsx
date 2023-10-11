import { Box,  Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import GamesHeading from "./components/GamesHeading";

export interface GameQueries{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQueries, setGameQueries] = useState<GameQueries>( {} as GameQueries );
  
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
        lg: "64px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQueries({ ...gameQueries, searchText })}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingTop={"40px"} >
          <GenreList selectedGenre={gameQueries.genre}  onSelectGenre={(genre) => setGameQueries({ ...gameQueries, genre})}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX={7}>
        <GamesHeading gameQueries={gameQueries} ></GamesHeading>
        <HStack position={"relative"} left={"-5px"}>
          <PlatformSelector selectedPlatform={gameQueries.platform} onSelectedPlatform={(platform) => setGameQueries({...gameQueries, platform}) } />
          <SortSelector sortOrder={gameQueries.sortOrder} onSelectSortOrder={ (sortOrder) => setGameQueries( {...gameQueries, sortOrder} ) } />
        </HStack>
        <GameGrid gameQueries={gameQueries} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
