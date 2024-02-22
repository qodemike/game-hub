import { HStack, useColorMode, Icon, Text, Box } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { HiMoon } from "react-icons/hi";

function ThemeToggleSwitch() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Box color={"black"} fontSize={"sm"}>
      {colorMode === "dark" ? (
        <Box onClick={() => setColorMode("light")} display={"flex"} gap={5}>
          <SunIcon boxSize={5}></SunIcon>
          <Text>Light Mode</Text>
        </Box>
      ) : (
        <Box onClick={() => setColorMode("dark")} display={"flex"} gap={5}>
          <Icon as={HiMoon} boxSize={5} />
          <Text>Dark Mode</Text>
        </Box>
      )}
    </Box>
  );
}

export default ThemeToggleSwitch;
