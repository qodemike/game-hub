import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../services/useGenres";
import getCroppedImageUrl from "../services/image-cropping";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
    {isLoading &&  skeletons.map(() => <GenreListSkeleton></GenreListSkeleton> ) }
    <List marginTop="40px">
      {genres.map((genre) => (
        <HStack marginX={5} marginY={6}>
          <Image borderRadius="5px" boxSize={"50px"} src={getCroppedImageUrl( genre.image_background )}></Image>
          <Text fontFamily={"Inter"} key={genre.id}>{genre.name}</Text>
        </HStack>
      ))}
    </List>
    </>
  );
};

export default GenreList;
