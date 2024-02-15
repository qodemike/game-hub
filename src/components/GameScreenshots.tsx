import useGameScreenshots from "../hooks/useGameScreenshots"
import {Box, SimpleGrid, Heading } from "@chakra-ui/react";

interface Props{
  gameId: number;
}

const GameScreenshot = ({gameId}: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);  

  if (isLoading) return null;

  if (error) throw error;
  
  return (
    <>
    <Heading  >
            Screenshots
    </Heading>
    <Box borderBottom={"1px"} borderColor={'var(--color-line)'} marginTop={"10px"} ></Box>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={"30px"} marginTop={"30px"}>
        {screenshots?.results.map(file => 
          <img key={file.id} src={file.image} />
          )}
      </SimpleGrid>
    </>
  )
}

export default GameScreenshot