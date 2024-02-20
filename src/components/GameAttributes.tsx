import { FaCircle } from "react-icons/fa";
import {
  Badge,
  Box,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Games from "../entities/Games";
import ExpandableText from "./ExpandableText";
import CriticScore from "./CriticScore";
interface Props {
  data: Games;
}

const GameAttributes = ({ data }: Props) => {
  const releaseDate = new Date(data.released);

  const year = releaseDate.getFullYear();

  return (
    <>
      <Box>
        <Heading fontFamily={'Inter'} fontSize={{ base: "26px", md: "40px" }}>{data.name}</Heading>
        <Box margin={"10px 0  20px 0px"} display={"flex"}  alignItems={"center"} gap={10}>
          <Text fontFamily={'Inter'} display={"flex"}  alignItems={"center"} gap={2}>
            <Icon
              boxSize={1.5}
              fill={"white"}
              as={FaCircle}
            />
            {year}
          </Text>
          <Box display={"flex"} flexWrap={'wrap'} alignItems={"center"} gap={0}>
          <Icon
              boxSize={1.5}
              fill={"white"}
              as={FaCircle}
            />
            {data.genres.map((genre) => (
              <Text
                key={genre.id}
                marginLeft={"20px"}
                fontSize={"13px"}
                fontFamily={"Inter"}
              >
                {genre.name.toUpperCase()}
              </Text>
            ))}
          </Box>
          <Box position={"relative"} top={"-3px"}>
            <CriticScore score={data.metacritic}></CriticScore>
          </Box>
        </Box>
        <ExpandableText>{data.description_raw}</ExpandableText>
      </Box>
    </>
  );
};

export default GameAttributes;
