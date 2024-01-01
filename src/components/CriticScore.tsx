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
          <Badge borderRadius="4px" colorScheme={color} >
            <Text py="2px" px="3px" fontFamily={"Inter"}>{score ||  "N/A"}</Text>
          </Badge>
        }
      </Box>
    </>
  );
};

export default CriticScore;
