import { Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import data from "../data/platforms";
import useGameQueryStore from "../store";


function PlatformSelector() {
    const setPlatform  = useGameQueryStore(s => s.setPlatform);
    const gameQuery  = useGameQueryStore(s => s.gameQuery);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={ <BsChevronDown/> }>
                {gameQuery.platform ? gameQuery.platform.name : "Platforms"} 
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => setPlatform(platform) }>{platform.slug}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
