import { Button } from "@chakra-ui/react";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const clearGameQuery = useGameQueryStore((s) => s.clearGameQuery);
  return (
    <Button
      onClick={() => clearGameQuery()}
      _hover={{ backgroundColor: "gray.400" }}
      padding="20px 25px"
      backgroundColor={"gray.100"}
      color={"gray.900"}
      borderRadius={"15px"}
      fontSize={"14px"}
    >
      Clear filters
    </Button>
  );
}

export default PlatformSelector;
