import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Box marginBottom={"20px"}>
        <Skeleton marginBottom={"15px"} borderRadius={"10px"} height="224px" />
        <SkeletonText noOfLines={2} />
      </Box>
    </>
  );
};

export default GameCardSkeleton;
