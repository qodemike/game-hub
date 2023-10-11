import { Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import styles from "./PlatformSelector.module.css";

interface Props {
    onSelectedPlatform: (platform: Platform ) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectedPlatform, selectedPlatform}: Props ) {
    const { data } = usePlatforms();

    return (
        <Menu>
            <MenuButton className={styles.button} as={Button} rightIcon={ <BsChevronDown/> }>
                {selectedPlatform?.name || <span>Platforms</span>} 
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform) } >{platform.slug}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;
