import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import Games  from "../entities/Games";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-cropping";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Box marginBottom={"30px"}>
      
      <Link to={`games/${game.slug}`}>
      <Image borderRadius={"10px"} src={getCroppedImageUrl(game.background_image)}></Image>
      </Link>
        <VStack
          gap={"15px"}
          justifyContent={"space-between"}
          alignItems={"left"}
        >
          <HStack  justifyContent={"space-between"} marginTop={"10px"}>
            {game.parent_platforms ? (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
            ) : null}
            <Box >
              <CriticScore score={game.metacritic}></CriticScore>
            </Box>
          </HStack>
          <Link to={`games/${game.slug}`}>
            <Heading _hover={{color: "gray.400"}} fontFamily={"Inter"} fontSize={"22px"}>{game.name}</Heading>
          </Link>
        </VStack>
    </Box>
  );
}

export default GameCard;
