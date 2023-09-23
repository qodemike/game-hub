import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { HiMoon} from "react-icons/hi";
import styles from "./ColorModeSwitch.module.css";

function ThemeToggleSwitch() {
  const { toggleColorMode, colorMode } = useColorMode(); // returns an object with properties, so we destructure it

  return (
    <HStack>
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
