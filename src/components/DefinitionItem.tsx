import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react";

interface Props{
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: Props) => {
  return (
    <Box marginY={5} >
        <Heading marginBottom={2} fontFamily={"Inter"} as="dt" fontSize={"xl"} color={"gray.600"} >{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem