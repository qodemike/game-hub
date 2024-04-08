import { Box, Image, Skeleton, SkeletonText, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import styles from "./GameDetailPage.module.css";
import GamePlatforms from "../components/GamePlatforms";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);

  if (error) throw new Error();

  return (
    <>
      { isLoading ? (
        <Box
        height='87vh'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
          <Spinner boxSize={10}/>
        </Box>
      ) : (
        <Box>
          <Box position={"relative"} top={{base:'-3px', md:"-5px"}} minHeight={{ base: "0", md: "450px", lg: "500px" }}>
            <Box className={styles.imgWrapper} width={'100%'}  overflow={'hidden'} position={'relative'}>
                <Image
                  className={styles.backgroundImg}
                  src={data?.background_image}
                />
            </Box>
          </Box>
          <Box margin={{ base: "10px 20px", md: "0 30px 0 " }}>
            <Box
              position={{ base: "relative", md: "absolute" }}
              top={{ base: "0px", md: "180px" }}
              zIndex={1}
              maxWidth={{ base: "100%", md: "700px" }}
            >
              <GameAttributes data={data!}></GameAttributes>
            </Box>
            <Box marginTop={{ base: "20px", md: "60px", lg: "10px" }}>
              <GamePlatforms data={data!}></GamePlatforms>
            </Box>
            <Box marginTop={"60px"}>
              <GameScreenshots gameId={data!.id}></GameScreenshots>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GameDetailPage;
