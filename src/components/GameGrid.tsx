import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import { GameQueries } from "../App";

interface Props {
    gameQueries: GameQueries;
}

function GameGrid({ gameQueries }: Props) {
    const { data, error, isLoading } = useGames(gameQueries);
    const skeletons = [1, 2, 3, 4, 5, 6];
    
    return (
        <>
            {error && <Text color={"pink"} paddingTop={"10px"}  paddingLeft={"40px"}> {error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
                padding={10}
                spacing={6}
                >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                ))}
                {data.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
