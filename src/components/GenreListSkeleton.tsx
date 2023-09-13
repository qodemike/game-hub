import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack marginX={5} marginY={6} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Skeleton borderRadius={"5px"} boxSize={"50px"}></Skeleton>
      <Skeleton height={"12px"} width={"100px"} noOfLines={1}></Skeleton>
    </HStack>
  );
};

export default GenreListSkeleton;
