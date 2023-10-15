import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

  return (
    <>
    <Box paddingLeft= {5} color={"Pink"}>
      <Heading>Oops</Heading>
      <Text>{isRouteErrorResponse(error) ?  "This page does not exist" :  "Unexpected error"}</Text>
    </Box>
    </>
  );
};

export default ErrorPage;
