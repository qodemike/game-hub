import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "";
  return (
    // colorScheme is a color theme for the whole component.
    <Badge colorScheme={color} fontSize="14px" borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
