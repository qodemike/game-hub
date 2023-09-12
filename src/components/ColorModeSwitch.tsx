import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { PiMoonStarsDuotone } from "react-icons/pi";

function ThemeToggleSwitch() {
  const { toggleColorMode, colorMode } = useColorMode(); // returns an object with properties, so we destructure it

  return (
    <HStack>
      <SunIcon boxSize={5}></SunIcon>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={PiMoonStarsDuotone} boxSize={6} />
    </HStack>
  );
}

export default ThemeToggleSwitch;
