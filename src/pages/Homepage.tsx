import { Box, HStack } from "@chakra-ui/react";
import GamesHeading from "../components/GamesHeading";
import ClearFilterButton from "../components/ClearFilterButton";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [dragDisabled, setDragDisabled] = useState(true);
  const [isOnPhone, setIsOnPhone] = useState(true);

  const onResize = () => {
    if (window.innerWidth < 500) {
      setIsOnPhone(true);
    } else {
      setIsOnPhone(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 500){
      setDragDisabled(false);
    } else {
      setDragDisabled(true)
    }
    window.addEventListener("resize", onResize);
  }, [window.innerWidth]);

  return (
    <>
      <Box maxWidth={"90vw"} margin={{ base: "0 auto", lg: "0 20px 0 0" }}>
        <Draggable
          axis="x"
          bounds={{ right: 0, left: -150 }}
          disabled={dragDisabled}
          position={isOnPhone ? undefined : { x: 0, y: 0 }}
        >
          <HStack
            display={{ base: "flex", md: "flex" }}
            position={"fixed"}
            top={"83px"}
            marginRight={{ lg: "20px" }}
            right={{ lg: 0 }}
            zIndex={5}
          >
            <Box>
              <ClearFilterButton />
            </Box>
            <Box>
              <PlatformSelector />
            </Box>
            <Box>
              <SortSelector />
            </Box>
          </HStack>
        </Draggable>

        <Box paddingTop={{ base: "50px", md: "30px" }} marginBottom={"20px"}>
          <GamesHeading></GamesHeading>
        </Box>

        <Box>
          <GameGrid />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
