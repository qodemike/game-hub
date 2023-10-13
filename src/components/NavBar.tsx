import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Bronsen.png";
import ColorModeSwitch from "./ColorModeSwitch";
import styles from "./NavBar.module.css";
import SearchInput from "./SearchInput";


function NavBar() {
  return (
    <>
      <Box className={styles.navBar}>
        <HStack
          backgroundColor={"#0E1015"}
          paddingX="16px"
          paddingY="10px"
        >
          <Image src={logo} className={styles.logo} />
            <SearchInput/>
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;
