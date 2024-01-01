import { Box, Heading, Icon, List, ListItem, Text } from "@chakra-ui/react";
import Games from "../entities/Games";
import ExpandableText from "./ExpandableText";
import { FaCircle } from "react-icons/fa";
interface Props {
  data: Games;
}

const GameAttributes = ({ data }: Props) => {
  const releaseDate = new Date(data.released);

  const year = releaseDate.getFullYear();

  return (
    <>
      <Heading fontSize={{ base: "26px", md: "40px" }}>{data.name}</Heading>
      <Box margin={"10px 0  20px 0px"}>
        <Text
          marginRight={"40px"}
          fontFamily={"Poppins"}
          fontSize={"14px"}
          display={"inline"}
        >
          {year}
        </Text>
        {data.genres.map((g) => (
          <Text marginLeft={"20px"} fontSize={"13px"} display={"inline"}>
            {g.name.toUpperCase()}
          </Text>
        ))}
      </Box>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <List marginTop={"20px"}  >
        {data.platforms.map((p) => (
          <ListItem whiteSpace={"nowrap"} marginRight={"20px"}  display={"inline"}>
            <Icon
              boxSize={1.5}
              fill={"white"}
              display={"inline"}
              as={FaCircle}
            />
            <Text marginLeft={"10px"} fontSize={"13px"} display={"inline"}>{p.platform.name}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameAttributes;
