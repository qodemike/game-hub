import { HStack, Image, List, Text } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-cropping";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <List marginTop="40px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          ))}
        {data.map((genre) => (
          <button
            onClick={() => {onSelectGenre(genre)}}
            className="sidebar__list-item "
            key={genre.id}
          >
            <HStack gap={4}>
              <Image
                borderRadius="5px"
                boxSize={"50px"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"13px"} fontFamily={"Inter"}>
                {genre.name}
              </Text>
            </HStack>
          </button>
        ))}
      </List>
    </>
  );
};

export default GenreList;

