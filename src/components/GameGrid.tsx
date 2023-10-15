import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames();
    const skeletons = Array(12).fill(0).map(( index ) => index + 1);
    const fetchedGamesCount = data?.pages.reduce((intial, currentValue) => intial + currentValue.results.length  ,0) || 0;

    return (
        <>
            {error && <Text color={"pink"} marginY={"20px"} >{error.message}</Text>}
            <InfiniteScroll
                dataLength={fetchedGamesCount} // The total number of items fetch so far.
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<></>}
             >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                spacing={6}
                >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                ))}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map((game) => ( 
                            <GameCard key={game.id} game={game}></GameCard>
                        ))}
                    </React.Fragment>
                )}
                {isFetchingNextPage &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                ))  
                }
            </SimpleGrid>
            </InfiniteScroll>
        </>
    );
}

export default GameGrid;
