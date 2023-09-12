import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../services/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-cropping"

interface Props{
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card boxShadow="xl" maxW="400px" borderRadius={10} overflow='hidden' >
        <Image src={ getCroppedImageUrl(game.background_image)}></Image>
        <CardBody paddingY={0} paddingX={5}>
            <HStack justifyContent="space-between" marginY={5}>
              <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading marginBottom={10} fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard