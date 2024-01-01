import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const limit = 400;

  const text = children.substring(0, limit) + "... ";

  return (
    <>
      <Text
        lineHeight={"1.8"}
        fontSize={"14px"}
        fontFamily={"Inter"}
        fontWeight={"300"}
      >{text}
      </Text>
    </>
  );
};

export default ExpandableText;
