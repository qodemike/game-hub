import { Badge, Box, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "";

  if (!score) {score}

  return (
    // colorScheme is a color theme for the whole component.
    <>
      <Box>
        {
          <Badge  colorScheme={color} >
            <Text >{score ||  "N/A"}</Text>
          </Badge>
        }
      </Box>
    </>
  );
};

export default CriticScore;
