import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";

const GameDescription = () => {
  const { slug }= useParams();

// by appending an exclamation at the end, where telling TS that this variable will never be null or undefined
 const { data, isLoading } = useGameDetail(slug!); 

 if (isLoading) return <Spinner/>;
 
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text fontFamily={'Inter'} fontWeight={'300'} >{data?.description_raw}</Text>
    </>
  );
};

export default GameDescription;
