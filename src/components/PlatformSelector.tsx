import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import data from "../data/platforms";
import useGameQueryStore from "../store";

function PlatformSelector() {
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return (
    <Menu>
      <MenuButton
        fontSize={"14px"}
        border={"1px solid var(--color-border-line) "}
        paddingX="25px"
        paddingY="20px"
        borderRadius={"15px"}
        backgroundColor={"gray.800"}
        _hover={{backgroundColor: "gray.700"}}
        _active={{backgroundColor: "gray.700"}}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {gameQuery.platform ? gameQuery.platform.name : "Platforms"}
      </MenuButton>
      <MenuList
          backgroundColor={"gray.800"}
      >
        {data.map((platform) => (
          <MenuItem 
          backgroundColor={"gray.800"}
          _hover={{backgroundColor: "gray.700"}}
          key={platform.id} onClick={() => setPlatform(platform)}>
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
