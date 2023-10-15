import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw new Error();


  return (
    <>
    <Box paddingX={6}>
      <Heading fontFamily={"Inter"} marginY={6}>
        {data?.name}
      </Heading>
      <ExpandableText children={data.description_raw}></ExpandableText>
      <GameAttributes data={data} ></GameAttributes>
      </Box>
    </>
  );
};

export default GameDetailPage;
