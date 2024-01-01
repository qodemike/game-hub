import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { HiMoon} from "react-icons/hi";

function ThemeToggleSwitch() {
  // Returns an object with properties, so we destructure it
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack color="rgb(236 236 237)">
      <SunIcon boxSize={4}></SunIcon>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={HiMoon} boxSize={5} />
    </HStack>
  );
}

export default ThemeToggleSwitch;
