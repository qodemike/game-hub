import { Card, CardBody, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { GameObj } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-cropping";

interface Props {
    game: GameObj;
}

function GameCard({ game }: Props) {
    return (
        <Card maxW="400px" borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody paddingBottom={"30px"} paddingTop={"15px"}>
                <VStack gap={"15px"} justifyContent={"space-between"} alignItems={"left"} >
                    <HStack  className="platformicons-list">
                        <PlatformIconList
                            platforms={game.parent_platforms.map((p) => p.platform)}
                        ></PlatformIconList>
                        <CriticScore score={game.metacritic}></CriticScore>
                    </HStack>
                    <Heading
                        fontSize={"22px"}
                    >
                        {game.name}
                    </Heading>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
