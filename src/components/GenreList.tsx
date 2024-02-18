import { Box, HStack, Image, List, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-cropping";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const GenreList = () => {
  const { scrollToTop } = useGameQueryStore();
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
const navigate = useNavigate();

  if (error) return null;

  return (
    <>
      <Text
        paddingBottom={"9px"}
        fontSize={"18px"}
        fontWeight={"600"}
        marginLeft={"20px"}
        fontFamily={"Inter"}
      >
        Genres
      </Text>
      <Box borderBottom={"1px"} borderColor={"var(--color-line)"}>
        <List
          overflow={"scroll"}
          maxHeight={"250px"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <Box marginLeft={"20px"}>
                <GenreListSkeleton key={skeleton}></GenreListSkeleton>
              </Box>
            ))}
          {data?.results.map((genre) => (
            <Box
              onClick={() => {
                scrollToTop();
                navigate("/")
                setGenre(genre);
              }}
              key={genre.id}
              background={
                genre.id === gameQuery?.genre?.id ? "gray.700" : ""
              }
              cursor={"pointer"}
              paddingY={"6px"}
              marginX={"10px"}
              paddingLeft={"10px"}
              borderRadius={"4px"}
              _hover={{
                background: gameQuery.genre?.id !== genre.id ? "gray.900" : "",
              }}
              transition={"all"}
              transitionDuration={"100ms"}
              transitionTimingFunction={"ease-out"}
            >
              <HStack gap={4}>
                <Image
                  borderRadius={"5px"}
                  objectFit={"cover"}
                  boxSize={"50px"}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Text fontFamily={"Inter"} fontSize={"13px"} textAlign={"left"}>
                  {genre.name}
                </Text>
              </HStack>
            </Box>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenreList;
