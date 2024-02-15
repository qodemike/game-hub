import { Box,   Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import styles from "./GameDetailPage.module.css";
import GamePlatforms from "../components/GamePlatforms";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw new Error();

  return (
    <>
      <Box >
        <Box minHeight={{base:"0", md:"400px", lg: "500px"}}>
        <div className={styles.imgWrapper}>
          <picture >
            <img
              className={styles.backgroundImg}
              src={data.background_image}
              alt="game_background_image"
            />
          </picture>
        </div>
        </Box>
        <Box margin={{base:"10px 20px", md: "0 30px 0 "}}>
          <Box position={{ base: "relative", md: "absolute" }} top={{base:"0px", md:"180px"}} zIndex={1} maxWidth={{base: "100%", md:"700px"}}>
            <GameAttributes data={data}></GameAttributes>
          </Box>
          <Box marginTop={{base:"20px", md:"60px", lg:"10px"}}>
            <GamePlatforms data={data}></GamePlatforms>
          </Box>
          <Box marginTop={"80px"}>
            <GameScreenshots gameId={data.id}></GameScreenshots>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GameDetailPage;
