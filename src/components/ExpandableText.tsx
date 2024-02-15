import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const limit = 700;
  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded ? children.substring(0,1200) : children.substring(0, limit)+"...";

  return (
    <>
      <Text
        lineHeight={"1.8"}
        fontSize={"14px"}
        fontFamily={"Inter"}
        fontWeight={"300"}
      >
        {text}
        {isExpanded ? (
          <Button onClick={() => setIsExpanded(false)} size={"xs"}  colorScheme={"yellow"}>read less</Button>
        ) : (
          <Button onClick={() => setIsExpanded(true)} size={"xs"} colorScheme={"yellow"} marginLeft={"5px"}>read more</Button>
        )}
      </Text>
    </>
  );
};

export default ExpandableText;
