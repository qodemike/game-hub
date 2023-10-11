import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import { GameQueries } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
    gameQueries: GameQueries;
}

function GameGrid({ gameQueries }: Props) {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQueries);
    const skeletons = Array(11).fill(0).map((value, index) => index + 1);
    const fetchedGamesCount = data?.pages.reduce((intial, currentValue) => intial + currentValue.results.length  ,0) || 0;

    return (
        <>
            {error && <Text color={"pink"} marginTop={"20px"} marginLeft={"40px"}>{error.message}</Text>}
            <InfiniteScroll
                dataLength={fetchedGamesCount} // The total number of items fetch so far.
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<></>}
             >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
                marginTop="30px"
                spacing={4}
                >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                ))}
                {data?.pages.map((page, index)=>
                    <React.Fragment key={index}>
                        {page.results.map((game) => ( // Since the shape of data has changed
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
