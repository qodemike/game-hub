import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import styles from "./NavBar.module.css";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box className={styles.navBar}>
        <HStack paddingX={{base:" 0 ", lg: "16px"}} justifyContent={"space-between"}>
          <Link to="/">
            <Image src={logo} className={styles.logo} />
          </Link>
          <SearchInput />
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;
