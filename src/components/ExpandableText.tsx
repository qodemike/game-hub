import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 500;

  if (children.length <= limit) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, limit) + '... ';

  return (
    <>
      <Text lineHeight={"1.8"} fontFamily={"Inter"} fontWeight={"300"}>
        {text}
        <Button onClick={() => setExpanded(!expanded)} size={"sm"} transform="scale(.8)" colorScheme="yellow" >{expanded ? "Show Less" : "Read More"} </Button>{" "}
      </Text>
    </>
  );
};

export default ExpandableText;
