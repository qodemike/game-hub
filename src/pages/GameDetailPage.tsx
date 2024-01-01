import { Box, Image,  Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import styles from "./GameDetailPage.module.css";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw new Error();
  console.log(data);
  return (
    <>
      <Box>
        <div className={styles.imgWrapper}>
          <picture>
            <img
              className={styles.backgroundImg}
              src={data.background_image}
              alt="game_background_image"
            />
          </picture>
        </div>
        <Box margin={{base:"20px 30px", md: "0 20px 0 40px"}}>
          <Box position={{ base: "relative", md: "absolute" }} top={{base:"0px", md:"200px"}} zIndex={1} maxWidth={{base: "100%", md:"500px"}}>
            <GameAttributes data={data}></GameAttributes>
          </Box>
          <GameScreenshots gameId={data.id}></GameScreenshots>
        </Box>
      </Box>
    </>
  );
};

export default GameDetailPage;
