import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "./ExpandableText";

const GameDescription = () => {
  const { slug }= useParams();

// by appending an exclamation at the end, where telling TS that this variable will never be null or undefined
 const { data, isLoading, error } = useGameDetail(slug!); 

 if (isLoading) return <Spinner/>;
 
 if (error || !data) throw new Error();

  return (
    <>
      <Heading marginY={6}>{data?.name}</Heading>
      <ExpandableText children={data.description_raw}></ExpandableText> 
    </>
  );
};

export default GameDescription;
