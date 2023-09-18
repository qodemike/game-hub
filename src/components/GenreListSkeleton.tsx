import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack marginX="40px" marginY="20px" display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
      <Skeleton borderRadius={"5px"} boxSize={"50px"}></Skeleton>
    </HStack>
  );
};

export default GenreListSkeleton;
