import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GamesHeading = () => {
  const { gameQuery } = useGameQueryStore();
  return (
    <Heading fontFamily={"Inter"}  fontSize={"4xl"} display={"flex"} justifyContent={{base:"center", md:"start"}} >
      {`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} ${ gameQuery.searchText ? `${gameQuery.searchText}` :  ""}`}
    </Heading>
  );
};

export default GamesHeading;
