import useGameScreenshots from "../hooks/useGameScreenshots"
import { SimpleGrid, Heading } from "@chakra-ui/react";

interface Props{
  gameId: number;
}

const GameScreenshot = ({gameId}: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);  

  if (isLoading) return null;

  if (error) throw error;
  
  return (
    <>
    <Heading fontSize={{base:"24px", md:"30px"}} marginY={"30px"}>
            Screenshots
    </Heading>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={"30px"} >
        {screenshots?.results.map(file => 
          <img key={file.id} src={file.image} />
          )}
      </SimpleGrid>
    </>
  )
}

export default GameScreenshot