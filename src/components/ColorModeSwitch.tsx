import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode(); // returns an object with properties, so we destructure it

  return (
    <HStack>
      <Switch colorScheme="blue" isChecked={(colorMode === "dark")} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
