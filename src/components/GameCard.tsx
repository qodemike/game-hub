import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
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
            <CardBody  className="gamecard" >
                <HStack className="platformicons-list">
                    <PlatformIconList 
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    ></PlatformIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading
                    className="gamecard__title"
                    fontSize="25px"
                >
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;
