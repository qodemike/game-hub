import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton borderRadius={"5px"} boxSize={"50px"}></Skeleton>
    </HStack>
  );
};

export default GenreListSkeleton;
