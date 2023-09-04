import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  // import the grid components for chakra
  // template Areas to define the grid
  return (
    <Grid
      templateAreas={{
        // sm: '30em',small
        // md: '48em',medium
        // lg: '62em',large
        // xl: '80em',
        base: `"nav " " main"`,        // on mobile devices will have nav and main grid
        lg: `"nav nav" "aside main"`,  // on large devices we'll have four grids
      }}
    >
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>
      {/* show is a component where the component inside it will be rendered on lg screens and above */}
      <Show above="lg"> 
        <GridItem area="aside" bg="violet">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightblue">
        Body
      </GridItem>
    </Grid>
  );
}

export default App;
