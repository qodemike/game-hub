import { Box, HStack, Heading, Image, List, Text } from "@chakra-ui/react";
import { useGenres} from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-cropping";
import GenreListSkeleton from "./GenreListSkeleton";
import styles from "./GenreList.module.css";
import { useRef, useState } from "react";
import useGameQueryStore from "../store";

const GenreList = () => {

  const {scrollToTop} = useGameQueryStore();
  const setGenre = useGameQueryStore(s => s.setGenre);
  const  gameQuery = useGameQueryStore(s => s.gameQuery);
  const { data, isLoading, error} = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const [collapse, setCollapse] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleCollapse = () => {
    if (listRef.current) {
      const list = listRef.current;
      list.style.maxHeight = collapse ? "0" : list.scrollHeight + "px";
    }
    setCollapse(!collapse);
  };

  if (error) return null ;

  return (
    <>
      <Text
        paddingBottom={"9px"}
        onClick={toggleCollapse}
        fontSize={"18px"}
        fontWeight={"600"}
        marginLeft={"20px"}
        className={styles.heading}
        fontFamily={"Inter"}
      >
        Genres
      </Text>
      <Box className={styles.genreList}>
        <List
          ref={listRef}
          className={`${styles.collapsible} ${
            collapse ? styles.collapsed : ""
          }`}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GenreListSkeleton key={skeleton}></GenreListSkeleton>
            ))}
          {data?.results.map((genre) => (
            <button
              onClick={() => {
                scrollToTop();
                setGenre(genre);
              }}
              className={`${styles.genreListButton} ${
                gameQuery.genre ? genre.id === gameQuery.genre.id ? styles.selectedGenre : "" : ""
              }`}
              key={genre.id}
            >
              <HStack className={styles.genreListItem} gap={4}>
                <Image
                  className={styles.image}
                  boxSize={"50px"}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Text fontFamily={"Inter"} className={styles.genreLabel}>{genre.name}</Text>
              </HStack>
            </button>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenreList;
