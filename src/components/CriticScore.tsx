import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "";
  return (
    // colorScheme is a color theme for the whole component.
    <Badge borderRadius="4px" variant={"outline"} colorScheme={color} fontSize={"12px"} >
      <Text py="2px" px="3px" fontFamily={"Poppins"}>{score}</Text>
    </Badge>
  );
};

export default CriticScore;
