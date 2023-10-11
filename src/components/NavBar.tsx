import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Bronsen Dark.png";
import ColorModeSwitch from "./ColorModeSwitch";
import styles from "./NavBar.module.css";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <Box className={styles.navBar}>
        <HStack
          backgroundColor={"#0E1015"}
          justifyContent={"space-between"}
          paddingX="16px"
          paddingY="10px"
        >
          <Image src={logo} className={styles.logo} />
            <SearchInput onSearch={(searchText) => onSearch(searchText)} />
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;
