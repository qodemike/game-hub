import { Box, HStack, Heading, Image, List, Text } from "@chakra-ui/react";
import  {useGenres, Genre} from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-cropping";
import GenreListSkeleton from "./GenreListSkeleton";
import styles from "./GenreList.module.css";
import { useRef, useState } from "react";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre , selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const [collapse, setCollapse] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleCollapse = () => {
    if (listRef.current) {
      const list = listRef.current;
      list.style.maxHeight = collapse ? '0' : list.scrollHeight + 'px';
    }
    setCollapse(!collapse);
  };

  return (
    <>
    <Heading onClick={toggleCollapse} fontSize={"2xl"} marginLeft={"20px"} className={styles.heading} >Genres</Heading>
    <Box className={styles.genreList}>
      <List ref={listRef} className={`${styles.collapsible} ${collapse ? styles.collapsed : '' }`}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          ))}
        {data?.results.map((genre) => (
          <button
            onClick={() => {
              onSelectGenre(genre)}}
            className={styles.genreListButton}
            key={genre.id}
          >
            <HStack className={styles.genreListItem} gap={4}>
              <Image
              className={styles.image}
                boxSize={"50px"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text className={styles.genreLabel} fontWeight={genre.id === selectedGenre?.id ? "700": "normal"} >
                {genre.name}
              </Text>
            </HStack>
          </button>
        ))}
      </List>
      </Box>
    </>
  );
};

export default GenreList;

