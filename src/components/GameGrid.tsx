import { SimpleGrid, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";

interface Props {
    selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
    // Pass selectedGenre as a parameter to useGames to pass to the backend
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];
    
    return (
        <>

            {error && <Text>{error}</Text>}
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
