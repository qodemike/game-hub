import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GamesHeading = () => {
  const { gameQuery } = useGameQueryStore();
  return (
    <Heading fontFamily={"Inter"} fontSize={"5xl"}>
      {`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} ${ gameQuery.searchText ? `${gameQuery.searchText}` : "Games"}`}
    </Heading>
  );
};

export default GamesHeading;
