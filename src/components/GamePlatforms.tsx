import { Text, Icon, List, ListItem, Heading } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import Games from "../entities/Games";

interface Props {
  data: Games;
}

const GamePlatforms = ({ data }: Props) => {
  return (
    <>
      <Heading fontFamily={"Inter"}>Platforms</Heading>
      <List marginTop={"20px"} display={"flex"} flexWrap={"wrap"}  gap={8} >
        {data.platforms.map((p, index) => (
          <ListItem
            key={index}
            whiteSpace={"nowrap"}
            marginRight={"20px"}
            display={"inline"}
            flex={'1  100px'}
          >
            <Icon
              boxSize={1.5}
              fill={"white"}
              display={"inline"}
              as={FaCircle}
            />
            <Text marginLeft={"10px"} fontSize={"13px"} display={"inline"}>
              {p.platform.name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GamePlatforms;
