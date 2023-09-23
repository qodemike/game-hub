import { Card, CardBody, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-cropping";
import styles from "./GameCard.module.css"

interface Props {
    game: Games;
}

function GameCard({ game }: Props) {
    return (
        <Card className={styles.card} >
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody className={styles.cardBody} >
                <VStack gap={"15px"} justifyContent={"space-between"} alignItems={"left"} >
                    <HStack  className={styles.gamecardIconsSection}>
                        <PlatformIconList
                            platforms={game.parent_platforms.map((p) => p.platform)}
                        ></PlatformIconList>
                        <CriticScore score={game.metacritic}></CriticScore>
                    </HStack>
                    <Heading
                    className={styles.gamecardTitle}
                    fontSize={"24px"}
                    >
                        {game.name}
                    </Heading>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
