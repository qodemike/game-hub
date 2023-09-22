import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

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
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList selectedGenre={gameQueries.genre}  onSelectGenre={(genre) => setGameQueries({ ...gameQueries, genre})}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack marginLeft={"40px"} marginRight={"40px"} gap={"20px"} >
          <PlatformSelector selectedPlatform={gameQueries.platform} onSelectedPlatform={(platform) => setGameQueries({...gameQueries, platform}) } />
          <SortSelector sortOrder={gameQueries.sortOrder} onSelectSortOrder={ (sortOrder) => setGameQueries( {...gameQueries, sortOrder} ) } />
          <SearchInput onSearch={ (searchText) => setGameQueries({...gameQueries, searchText })} ></SearchInput>
        </HStack>
        <GameGrid gameQueries={gameQueries} />
      </GridItem>
    </Grid>
  );
}

export default App;
