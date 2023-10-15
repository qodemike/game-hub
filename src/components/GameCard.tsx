import {
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
import styles from "./GameCard.module.css";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card className={styles.card}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody className={styles.cardBody} paddingTop={2}>
        <VStack
          gap={"15px"}
          justifyContent={"space-between"}
          alignItems={"left"}
        >
          <HStack className={styles.gamecardIconsSection}>
            {game.parent_platforms ? (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
            ) : null}
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Link to={`games/${game.slug}`}>
            <Heading fontFamily={"Inter"} className={styles.gamecardTitle} fontSize={"24px"}>
              {game.name}
            </Heading>
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
